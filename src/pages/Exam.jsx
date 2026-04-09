import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const Exam = () => {
    const { profile } = useAuth();
    
    // States
    const [accessCode, setAccessCode] = useState('');
    const [exam, setExam] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({}); // { question_id: 'A' }
    
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState(null); // Score 0-100
    const [errorMsg, setErrorMsg] = useState('');

    // 1. Validasi Akses Kode & Mulai Ujian
    const handleStartExam = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setLoading(true);

        try {
            // Cek apakah kode ujian eksis dan berstatus aktif
            const { data: examData, error: examError } = await supabase
                .from('exams')
                .select('*')
                .eq('access_code', accessCode.toUpperCase())
                .eq('is_active', true)
                .single();

            if (examError || !examData) {
                setErrorMsg('Kode ujian tidak ditemukan atau sesi ujian saat ini belum/sudah ditutup oleh Guru.');
                setLoading(false);
                return;
            }

            // Cek apakah siswa ini sudah pernah Mengerjakan ujian ini sebelumnya
            const { data: historyCheck } = await supabase
                .from('exam_results')
                .select('score')
                .eq('exam_id', examData.id)
                .eq('student_id', profile.id)
                .single();

            if (historyCheck) {
                setErrorMsg(`Anda sudah pernah mengerjakan ujian ini dengan nilai sebelumnya: ${historyCheck.score}. Ujian hanya dapat dilakukan satu kali rilis.`);
                setLoading(false);
                return;
            }

            // Tarik Soal
            const { data: questionData, error: qError } = await supabase
                .from('questions')
                .select('*')
                .eq('exam_id', examData.id)
                .order('created_at', { ascending: true }); // Mengurutkan dari soal pertama dibuat

            if (qError || !questionData || questionData.length === 0) {
                setErrorMsg('Guru belum menambahkan satupun rincian soal untuk ujian ini.');
                setLoading(false);
                return;
            }

            setExam(examData);
            setQuestions(questionData);
        } catch (error) {
            setErrorMsg('Terjadi kesalahan tidak terduga.');
        } finally {
            setLoading(false);
        }
    };

    // 2. Select Jawaban
    const handleSelectAnswer = (questionId, optionKey) => {
        setAnswers({
            ...answers,
            [questionId]: optionKey
        });
    };

    // 3. Kalkulasi Otomatis (Max 100)
    const handleSubmitExam = async () => {
        if (Object.keys(answers).length < questions.length) {
            if (!window.confirm("Ada beberapa soal yang belum Anda jawab. Yakin ingin mengumpulkan sekarang?")) {
                return;
            }
        } else {
            if (!window.confirm("Pastikan kembali jawaban Anda. Kumpulkan ujian sekarang?")) return;
        }

        setSubmitting(true);
        let correctCount = 0;

        // Auto Grade Check (apapun total jumlah soalnya, akan di convert ke pro-rata skala 100)
        questions.forEach((q) => {
            if (answers[q.id] === q.correct_option) {
                correctCount++;
            }
        });

        const finalScore = Math.round((correctCount / questions.length) * 100);

        // Lempar ke Supabase
        const { error } = await supabase
            .from('exam_results')
            .insert([{
                exam_id: exam.id,
                student_id: profile.id,
                score: finalScore
            }]);

        setSubmitting(false);

        if (error) {
            alert('Gagal mengirim jawaban (Internet Anda mungkin terputus): ' + error.message);
        } else {
            setResult(finalScore);
        }
    };

    // UI: Jika sudah selesai
    if (result !== null) {
        return (
            <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow border border-gray-200 p-12 text-center">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-2">Ujian Selesai!</h1>
                <p className="text-gray-600 mb-8">Berhasil disubmit ke guru atas nama <strong>{profile?.full_name}</strong>.</p>
                
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-8 mb-8 inline-block shadow-sm">
                    <p className="text-sm font-bold text-indigo-800 uppercase tracking-widest mb-2">Nilai Akhir Anda</p>
                    <p className={`text-6xl font-black ${result >= 70 ? 'text-green-600' : 'text-red-500'}`}>{result}</p>
                    <p className="text-sm text-gray-500 mt-2">Di nilai berdasarkan total {questions.length} soal.</p>
                </div>

                <div>
                    <button onClick={() => window.location.reload()} className="text-indigo-600 font-semibold hover:underline">
                        Kembali ke Halaman Masuk
                    </button>
                </div>
            </div>
        );
    }

    // UI: Jika Sedang Mengerjakan Ujian
    if (exam && questions.length > 0) {
        return (
            <div className="max-w-4xl mx-auto pb-12">
                <div className="bg-indigo-700 rounded-xl p-4 md:p-8 text-white shadow-md mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sticky top-20 z-10">
                    <div>
                        <h1 className="text-lg md:text-2xl font-bold">{exam.title}</h1>
                        <p className="text-indigo-200 opacity-90 text-sm md:text-base">{exam.description || 'Kerjakan dengan mandiri dan jujur.'}</p>
                    </div>
                    <div className="bg-white/20 px-4 md:px-6 py-2 md:py-3 rounded-lg text-center backdrop-blur-sm border border-white/10 shrink-0">
                        <p className="text-xs uppercase font-bold tracking-widest opacity-80 mb-0.5">Terjawab</p>
                        <p className="text-xl md:text-2xl font-black">{Object.keys(answers).length} <span className="text-base md:text-lg opacity-70">/ {questions.length}</span></p>
                    </div>
                </div>

                <div className="space-y-8">
                    {questions.map((q, idx) => (
                        <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded shrink-0 bg-gray-100 text-gray-700 flex justify-center items-center font-bold text-lg">{idx + 1}</div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-900 text-lg mb-6 leading-relaxed whitespace-pre-wrap">{q.question_text}</p>
                                    
                                    <div className="space-y-3">
                                        {['A', 'B', 'C', 'D'].map((opt) => {
                                            const optValue = opt === 'A' ? q.option_a : opt === 'B' ? q.option_b : opt === 'C' ? q.option_c : q.option_d;
                                            const isSelected = answers[q.id] === opt;
                                            return (
                                                <div 
                                                    key={opt}
                                                    onClick={() => handleSelectAnswer(q.id, opt)}
                                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center gap-4 ${isSelected ? 'bg-indigo-50 border-indigo-600 shadow-sm' : 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-gray-50'}`}
                                                >
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-indigo-600 text-indigo-600' : 'border-gray-400'}`}>
                                                        {isSelected && <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>}
                                                    </div>
                                                    <span className={`font-semibold shrink-0 ${isSelected ? 'text-indigo-800' : 'text-gray-500'}`}>{opt}.</span>
                                                    <span className={isSelected ? 'font-medium text-indigo-900' : 'text-gray-700'}>{optValue}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center sticky bottom-6 z-10 border-t-8 border-t-indigo-600">
                    <p className="font-medium text-gray-600 hidden sm:block">Pastikan tidak ada soalan yang terlewat sebelum mengumpulkan hasil ujian.</p>
                    <button 
                        onClick={handleSubmitExam}
                        disabled={submitting}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-10 rounded-lg shadow-md transition-colors disabled:opacity-50 text-lg w-full sm:w-auto"
                    >
                        {submitting ? 'Mengkalkulasi...' : 'Kumpulkan & Lihat Nilai'}
                    </button>
                </div>
            </div>
        );
    }

    // UI: Gerbang Masuk Kode 6 Digit
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-gray-100">
                <div className="bg-indigo-600 h-2 w-full"></div>
                <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-50 rounded-2xl border border-indigo-100 flex items-center justify-center mb-6 shadow-sm">
                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Portal Ujian</h1>
                    <p className="text-gray-500 mb-8 leading-relaxed">Persiapkan diri Anda sebaik mungkin. Masukkan kode akses unik 6 digit dari Guru untuk memulai ujian.</p>

                    {errorMsg && (
                        <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm font-medium border border-red-100 mb-6 flex items-start gap-3">
                            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleStartExam}>
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Access Code</label>
                            <input 
                                type="text"
                                maxLength={6}
                                required
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                                placeholder="Contoh: 8XH9P2"
                                className="w-full text-center text-4xl tracking-[0.25em] font-black text-indigo-900 py-4 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-indigo-600 uppercase bg-gray-50 transition-colors placeholder:font-normal placeholder:text-2xl placeholder:tracking-normal placeholder:opacity-50"
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={loading || accessCode.length < 6}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50 disabled:shadow-none"
                        >
                            {loading ? 'Menghubungkan Server...' : 'Mulai Kerjakan'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Exam;
