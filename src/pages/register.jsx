import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/atoms/SEO';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('siswa');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await register(email, password, fullName, role);
            
            // Supabase default: Kalau email confirmation NYALA, session bakal null.
            if (data?.user && !data?.session) {
                alert("Berhasil mendaftar! TAPI sistem kami mendeteksi perlunya verifikasi Email. Harap cek Inbox Email Anda sekarang, klik link konfirmasinya, lalu kembali ke sini untuk Login.");
                navigate('/login');
            } else {
                // Langsung login kalau email confirmation MATI
                navigate('/');
            }
        } catch (err) {
            setError(err.message || 'Gagal mendaftar. Silakan coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <SEO title="Daftar" description="Buat akun MikroTik Web PLP baru untuk mulai belajar jaringan sekarang." path="/register" />
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Buat Akun Baru</h1>
                <p className="text-gray-600 mt-2">Daftar untuk mengakses materi LMS MikroTik</p>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm border border-red-100">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input 
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="Nama Siswa"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="nama@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                        type="password" 
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="Minimal 6 karakter"
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 disabled:opacity-50 transition-colors"
                >
                    {loading ? 'Mendaftar...' : 'Daftar Sekarang'}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
                Sudah punya akun? <Link to="/login" className="text-blue-600 hover:underline font-medium">Masuk di sini</Link>
            </div>
        </div>
    );
};

export default Register;