import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const DashboardGuru = () => {
    const { profile } = useAuth();
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { tab } = useParams();
    const validTabs = ['siswa', 'ujian', 'nilai'];

    const [exams, setExams] = useState([]);
    const [loadingExams, setLoadingExams] = useState(false);
    const [newExamTitle, setNewExamTitle] = useState('');
    const [newExamDesc, setNewExamDesc] = useState('');

    const [results, setResults] = useState([]);
    const [loadingResults, setLoadingResults] = useState(false);

    if (!validTabs.includes(tab)) {
        return <Navigate to="/dashboard-guru/siswa" replace />;
    }

    const activeTab = tab;

    useEffect(() => {
        if (activeTab === 'siswa') {
            fetchStudents();
        } else if (activeTab === 'ujian') {
            fetchExams();
        } else if (activeTab === 'nilai') {
            fetchResults();
            fetchStudents(); // Ambil roster murid
            fetchExams();    // Ambil kolom-kolom ujian
        }
    }, [activeTab]);

    // -------- ACTIONS UNTUK SISWA --------
    const fetchStudents = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('role', 'siswa')
            .order('created_at', { ascending: false });
            
        if (!error && data) {
            setStudents(data);
        }
        setLoading(false);
    };

    const approveStudent = async (id) => {
        const { error } = await supabase.from('profiles').update({ is_approved: true }).eq('id', id);
        if (!error) setStudents(students.map(s => s.id === id ? { ...s, is_approved: true } : s));
        else alert('Gagal meng-approve siswa: ' + error.message);
    };

    const revokeStudent = async (id) => {
        const { error } = await supabase.from('profiles').update({ is_approved: false }).eq('id', id);
        if (!error) setStudents(students.map(s => s.id === id ? { ...s, is_approved: false } : s));
        else alert('Gagal mencabut akses: ' + error.message);
    };

    const deleteStudent = async (id, name) => {
        if (!window.confirm(`Yakin ingin menghapus siswa "${name}"? Tindakan ini permanen dan akan menghapus seluruh data serta riwayat nilai siswa tersebut.`)) return;

        const { error } = await supabase.from('profiles').delete().eq('id', id);
        if (!error) {
            setStudents(students.filter(s => s.id !== id));
            alert('Siswa berhasil dihapus.');
        } else {
            alert('Gagal menghapus siswa: ' + error.message);
        }
    };

    // -------- ACTIONS UNTUK UJIAN --------
    const fetchExams = async () => {
        setLoadingExams(true);
        const { data, error } = await supabase
            .from('exams')
            .select('*')
            .order('created_at', { ascending: false });
            
        if (!error && data) setExams(data);
        setLoadingExams(false);
    };

    const createExam = async (e) => {
        e.preventDefault();
        if(!newExamTitle) return;

        // Bikin akses kode 6 digit secara acak
        const accessCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        
        const { data, error } = await supabase
            .from('exams')
            .insert([{
                teacher_id: profile.id,
                title: newExamTitle,
                description: newExamDesc,
                access_code: accessCode,
                is_active: false // Ujian dimulai dalam keadaan "Selesai/Tutup" agar siswa belum bisa akses
            }])
            .select();

        if (!error && data) {
            setExams([data[0], ...exams]);
            setNewExamTitle('');
            setNewExamDesc('');
            alert(`Ujian berhasil dibuat dengan Kode Akses: ${accessCode}`);
        } else {
            alert('Gagal membuat ujian: ' + error.message);
        }
    };

    const toggleExamStatus = async (id, currentStatus) => {
        const { error } = await supabase
            .from('exams')
            .update({ is_active: !currentStatus })
            .eq('id', id);
            
        if (!error) {
            setExams(exams.map(e => e.id === id ? { ...e, is_active: !currentStatus } : e));
        } else {
            alert('Gagal merubah status: ' + error.message);
        }
    };

    const deleteExam = async (id) => {
        if (!window.confirm("Yakin ingin menghapus ujian ini secara permanen? Semua soal di dalamnya juga akan terhapus otomatis.")) return;
        
        const { error } = await supabase
            .from('exams')
            .delete()
            .eq('id', id);
            
        if (!error) {
            setExams(exams.filter(e => e.id !== id));
        } else {
            alert('Gagal menghapus ujian: ' + error.message);
        }
    };

    // -------- ACTIONS UNTUK REKAP NILAI --------
    const fetchResults = async () => {
        setLoadingResults(true);
        const { data, error } = await supabase
            .from('exam_results')
            .select(`
                *,
                profiles (full_name),
                exams (title)
            `)
            .order('submitted_at', { ascending: false });
            
        if (!error && data) {
            setResults(data);
        }
        setLoadingResults(false);
    };

    return (
        <div className="max-w-6xl mx-auto min-h-[70vh]">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
                <div className="bg-indigo-700 px-8 py-8 text-white">
                    <h1 className="text-3xl font-bold mb-2">Panel Administrasi Guru</h1>
                    <p className="text-indigo-200">Selamat datang kembali, {profile?.full_name}. Kelola pendaftar siswa baru dan materi ujian Anda di sini.</p>
                </div>
            </div>

            {/* Content: Kelola Siswa */}
            {activeTab === 'siswa' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Daftar Pendaftaran Siswa</h2>
                    
                    {loading ? (
                        <div className="py-8 text-center text-gray-500">Memuat data pendaftar dari Supabase...</div>
                    ) : students.length === 0 ? (
                        <div className="py-8 text-center text-gray-500 bg-gray-50 rounded-lg">Belum ada siswa yang mendaftar sejauh ini.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="p-4 font-semibold text-gray-700 rounded-tl-lg">Nama Lengkap</th>
                                        <th className="p-4 font-semibold text-gray-700">Email</th>
                                        <th className="p-4 font-semibold text-gray-700 text-center">Status Akses</th>
                                        <th className="p-4 font-semibold text-gray-700 text-right rounded-tr-lg">Aksi Pengendalian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((siswa) => (
                                        <tr key={siswa.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-medium text-gray-800">{siswa.full_name}</td>
                                            <td className="p-4 text-gray-600">{siswa.email}</td>
                                            <td className="p-4 text-center">
                                                {siswa.is_approved ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                                        Aktif
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                                        Tertahan (Pending)
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-4 text-right">
                                                {siswa.is_approved ? (
                                                    <button 
                                                        onClick={() => revokeStudent(siswa.id)}
                                                        className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 px-4 py-2 rounded-lg shadow-sm text-sm font-semibold transition-colors mr-2"
                                                    >
                                                        Cabut Akses
                                                    </button>
                                                ) : (
                                                    <button 
                                                        onClick={() => approveStudent(siswa.id)}
                                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-semibold transition-colors mr-2"
                                                    >
                                                        Izinkan Akses
                                                    </button>
                                                )}
                                                <button 
                                                    onClick={() => deleteStudent(siswa.id, siswa.full_name)}
                                                    className="bg-white hover:bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg shadow-sm text-sm font-semibold transition-colors"
                                                    title="Hapus Siswa Permanen"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}

            {/* Content: Manajemen Ujian */}
            {activeTab === 'ujian' && (
                <div className="space-y-6">
                    {/* Form Pembuatan Ujian Baru */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Buat Sesi Ujian Baru</h2>
                        <form onSubmit={createExam} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Judul Ujian</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={newExamTitle}
                                        onChange={(e) => setNewExamTitle(e.target.value)}
                                        placeholder="Contoh: Kuis Bab Dasar Routing"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat (Opsional)</label>
                                    <input 
                                        type="text" 
                                        value={newExamDesc}
                                        onChange={(e) => setNewExamDesc(e.target.value)}
                                        placeholder="Ujian susulan untuk anak IPS"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-sm">
                                Generate Ujian & Kode Akses
                            </button>
                        </form>
                    </div>

                    {/* Daftar Ujian Terbangun */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Bank Materi Ujian Anda</h2>
                        
                        {loadingExams ? (
                            <div className="py-8 text-center text-gray-500">Memuat data ujian...</div>
                        ) : exams.length === 0 ? (
                            <div className="py-12 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                <p className="text-gray-500 font-medium">Anda belum membuat bank ujian sama sekali.</p>
                                <p className="text-sm text-gray-400 mt-1">Gunakan formulir di atas untuk meng-generate ujian pertama Anda.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {exams.map((exam) => (
                                    <div key={exam.id} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                        <div className={`absolute top-0 left-0 w-full h-1.5 ${exam.is_active ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-bold text-gray-900 text-lg leading-tight pr-4">{exam.title}</h3>
                                            <span className={`px-2 py-1 min-w-[65px] text-center rounded text-xs font-bold border ${exam.is_active ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                                                {exam.is_active ? 'MULAI' : 'TUTUP'}
                                            </span>
                                        </div>
                                        
                                        <p className="text-sm text-gray-500 mb-4 h-10 truncate whitespace-normal line-clamp-2">{exam.description || 'Tidak ada deskripsi'}</p>
                                        
                                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center mb-6">
                                            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Kode Akses Siswa</p>
                                            <p className="text-2xl font-mono font-black text-indigo-700 tracking-widest">{exam.access_code}</p>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Link to={`/dashboard-guru/exam/${exam.id}`} className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                Kelola Soal ({exam.is_active ? 'Live' : 'Draft'})
                                            </Link>
                                            
                                            <div className="grid grid-cols-2 gap-2 mt-1">
                                                <button 
                                                    onClick={() => toggleExamStatus(exam.id, exam.is_active)}
                                                    className={`py-2 rounded-lg text-sm font-semibold transition-colors ${exam.is_active ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                                                >
                                                    {exam.is_active ? 'Matikan Ujian' : 'Mulai Ujian'}
                                                </button>
                                                <button 
                                                    onClick={() => deleteExam(exam.id)}
                                                    className="py-2.5 rounded-lg text-sm font-semibold transition-colors bg-white border border-red-200 text-red-600 hover:bg-red-50"
                                                >
                                                    Hapus Ujian
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Content: Rekap Nilai (Buku Absensi / Gradebook) */}
            {activeTab === 'nilai' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Buku Absensi Penilaian Siswa</h2>
                    
                    {loadingResults ? (
                        <div className="py-8 text-center text-gray-500">Memuat buku nilai...</div>
                    ) : (
                        <div className="overflow-x-auto pb-4">
                            <table className="w-full text-left border-collapse whitespace-nowrap">
                                <thead>
                                    <tr className="bg-indigo-50 border-y border-indigo-100">
                                        <th className="p-3 font-bold text-indigo-900 w-10 text-center relative max-w-[50px]">No</th>
                                        <th className="p-3 font-bold text-indigo-900 sticky left-0 bg-indigo-50 shadow-[1px_0_0_0_#e0e7ff] z-10 w-64 min-w-[200px]">Nama Lengkap</th>
                                        
                                        {/* Dynamic Columns based on Exams available */}
                                        {exams.map(ex => (
                                            <th key={ex.id} className="p-3 font-bold text-indigo-900 text-center border-l border-indigo-100" title={ex.title}>
                                                <div className="w-24 truncate mx-auto text-sm">{ex.title}</div>
                                            </th>
                                        ))}
                                        
                                        <th className="p-3 font-black text-indigo-900 border-l-2 border-indigo-200 text-center min-w-[120px]">Rata-rata</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...students]
                                        .sort((a, b) => (a.full_name || '').localeCompare(b.full_name || ''))
                                        .map((siswa, idx) => {
                                            // Find all results for this particular student
                                            const studentResults = results.filter(r => r.student_id === siswa.id);
                                            
                                            // Calculate Average
                                            let studentAvg = 0;
                                            if (studentResults.length > 0) {
                                                studentAvg = Math.round(studentResults.reduce((acc, curr) => acc + curr.score, 0) / studentResults.length);
                                            }

                                            return (
                                                <tr key={siswa.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                                                    <td className="p-3 text-center text-gray-500 font-medium">{idx + 1}</td>
                                                    <td className="p-3 font-semibold text-gray-800 sticky left-0 bg-white group-hover:bg-gray-50 shadow-[1px_0_0_0_#f3f4f6] z-10 truncate">
                                                        {siswa.full_name}
                                                    </td>
                                                    
                                                    {exams.map(ex => {
                                                        // Cari nilai dia di ujian (kolom) ini
                                                        const res = studentResults.find(r => r.exam_id === ex.id);
                                                        return (
                                                            <td key={ex.id} className="p-3 text-center border-l border-gray-100">
                                                                {res ? (
                                                                    <span className={`font-bold text-lg ${res.score >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                                                                        {res.score}
                                                                    </span>
                                                                ) : (
                                                                    <span className="text-gray-300 font-bold">-</span>
                                                                )}
                                                            </td>
                                                        );
                                                    })}
                                                    
                                                    <td className="p-3 text-center border-l-2 border-gray-100 font-black text-lg bg-gray-50/50">
                                                        {studentResults.length > 0 ? (
                                                            <span className={studentAvg >= 70 ? 'text-green-600' : 'text-red-500'}>
                                                                {studentAvg}
                                                            </span>
                                                        ) : (
                                                            <span className="text-gray-300">-</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                    {students.length === 0 && (
                                        <tr>
                                            <td colSpan={exams.length + 3} className="text-center py-10 text-gray-500 italic">
                                                Belum ada data siswa di dalam sistem.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DashboardGuru;
