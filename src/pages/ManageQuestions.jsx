import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const ManageQuestions = () => {
    const { examId } = useParams();
    const { profile } = useAuth();
    
    const [exam, setExam] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Form States
    const [qText, setQText] = useState('');
    const [optA, setOptA] = useState('');
    const [optB, setOptB] = useState('');
    const [optC, setOptC] = useState('');
    const [optD, setOptD] = useState('');
    const [correctOpt, setCorrectOpt] = useState('A');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchExamAndQuestions();
    }, [examId]);

    const fetchExamAndQuestions = async () => {
        setLoading(true);
        // 1. Fetch Exam Detail
        const { data: examData, error: examError } = await supabase
            .from('exams')
            .select('*')
            .eq('id', examId)
            .single();
            
        if (!examError && examData) {
            setExam(examData);
        }

        // 2. Fetch Questions
        const { data: qData, error: qError } = await supabase
            .from('questions')
            .select('*')
            .eq('exam_id', examId)
            .order('created_at', { ascending: true });
            
        if (!qError && qData) {
            setQuestions(qData);
        }
        setLoading(false);
    };

    const handleAddQuestion = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        const { data, error } = await supabase
            .from('questions')
            .insert([{
                exam_id: examId,
                question_text: qText,
                option_a: optA,
                option_b: optB,
                option_c: optC,
                option_d: optD,
                correct_option: correctOpt
            }])
            .select();
            
        if (!error && data) {
            setQuestions([...questions, data[0]]);
            // Reset form
            setQText('');
            setOptA('');
            setOptB('');
            setOptC('');
            setOptD('');
            setCorrectOpt('A');
        } else {
            alert("Gagal menambahkan soal: " + error.message);
        }
        setSubmitting(false);
    };

    const deleteQuestion = async (id) => {
        if(!window.confirm("Hapus soal ini?")) return;
        const { error } = await supabase.from('questions').delete().eq('id', id);
        if(!error) {
            setQuestions(questions.filter(q => q.id !== id));
        } else {
            alert("Gagal menghapus soal: " + error.message);
        }
    };

    if (loading) return <div className="text-center py-20">Memuat data soal...</div>;
    if (!exam) return <div className="text-center py-20 text-red-500 font-bold">Ujian tidak ditemukan atau Anda tidak memiliki akses.</div>;

    return (
        <div className="max-w-4xl mx-auto min-h-[70vh] pb-12">
            {/* Navigasi & Info Ujian */}
            <div className="mb-6">
                <Link to="/dashboard-guru" className="text-indigo-600 hover:underline flex items-center gap-2 mb-4 font-medium text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Kembali ke Dashboard
                </Link>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">{exam.title}</h1>
                        <p className="text-gray-500 mb-3">{exam.description || 'Tidak ada deskripsi'}</p>
                        <div className="flex gap-4 items-center">
                            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded text-sm font-semibold border border-indigo-100">
                                Kode: {exam.access_code}
                            </span>
                            <span className={`px-3 py-1 rounded text-sm font-semibold border ${exam.is_active ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                                Status: {exam.is_active ? 'AKTIF (Siswa Bisa Masuk)' : 'DITUTUP'}
                            </span>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border text-center min-w-[120px]">
                        <p className="text-3xl font-black text-indigo-600">{questions.length}</p>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Total Soal</p>
                    </div>
                </div>
            </div>

            {/* List Soal yang Tersedia */}
            <div className="space-y-4 mb-10">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                    Pratinjau Soal
                </h2>
                
                {questions.length === 0 ? (
                    <div className="bg-white border border-gray-200 border-dashed rounded-xl p-8 text-center text-gray-500">
                        Belum ada soal pada ujian ini. Silakan buat soal pertama Anda di bawah.
                    </div>
                ) : (
                    questions.map((q, idx) => (
                        <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 relative group">
                            <button onClick={() => deleteQuestion(q.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 bg-red-50 hover:bg-red-100 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded shrink-0 bg-indigo-100 text-indigo-700 flex justify-center items-center font-bold">{idx + 1}</div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800 mb-4 whitespace-pre-wrap">{q.question_text}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                        <div className={`p-3 rounded border ${q.correct_option === 'A' ? 'bg-green-50 border-green-300 font-medium text-green-800' : 'bg-gray-50 border-gray-200 text-gray-600'}`}><span className="font-bold mr-2 text-gray-400">A.</span> {q.option_a}</div>
                                        <div className={`p-3 rounded border ${q.correct_option === 'B' ? 'bg-green-50 border-green-300 font-medium text-green-800' : 'bg-gray-50 border-gray-200 text-gray-600'}`}><span className="font-bold mr-2 text-gray-400">B.</span> {q.option_b}</div>
                                        <div className={`p-3 rounded border ${q.correct_option === 'C' ? 'bg-green-50 border-green-300 font-medium text-green-800' : 'bg-gray-50 border-gray-200 text-gray-600'}`}><span className="font-bold mr-2 text-gray-400">C.</span> {q.option_c}</div>
                                        <div className={`p-3 rounded border ${q.correct_option === 'D' ? 'bg-green-50 border-green-300 font-medium text-green-800' : 'bg-gray-50 border-gray-200 text-gray-600'}`}><span className="font-bold mr-2 text-gray-400">D.</span> {q.option_d}</div>
                                    </div>
                                    <div className="mt-3 text-xs text-gray-500 italic">Kunci Jawaban: {q.correct_option}</div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Form Tambah Soal Baru */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                    <h3 className="font-bold text-gray-800">Tambahkan Soal Baru</h3>
                </div>
                <form onSubmit={handleAddQuestion} className="p-6">
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pertanyaan</label>
                        <textarea 
                            rows="3" 
                            required
                            value={qText}
                            onChange={(e) => setQText(e.target.value)}
                            placeholder="Tuliskan pertanyaan di sini..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Opsi A</label>
                            <input type="text" required value={optA} onChange={e => setOptA(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Opsi B</label>
                            <input type="text" required value={optB} onChange={e => setOptB(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Opsi C</label>
                            <input type="text" required value={optC} onChange={e => setOptC(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Opsi D</label>
                            <input type="text" required value={optD} onChange={e => setOptD(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Kunci Jawaban yang Benar</label>
                        <div className="flex gap-4">
                            {['A', 'B', 'C', 'D'].map(val => (
                                <label key={val} className={`flex-1 border rounded-lg p-3 text-center cursor-pointer transition-colors ${correctOpt === val ? 'bg-green-100 border-green-500 text-green-800 font-bold' : 'hover:bg-gray-50 border-gray-300'}`}>
                                    <input type="radio" name="correct_option" value={val} checked={correctOpt === val} onChange={e => setCorrectOpt(e.target.value)} className="hidden" />
                                    Opsi {val}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button type="submit" disabled={submitting} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-sm disabled:opacity-50">
                        {submitting ? 'Menyimpan...' : 'Simpan Soal ke Bank Ujian'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ManageQuestions;
