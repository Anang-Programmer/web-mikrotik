import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/atoms/SEO';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { login, profile, user } = useAuth();
    const navigate = useNavigate();

    // Redirect otomatis jika sudah pernah login dan state context punya profile
    useEffect(() => {
        if (user && profile) {
            if (profile.role === 'guru') {
                navigate('/dashboard-guru');
            } else {
                navigate('/');
            }
        }
    }, [user, profile, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            // Note: navigate tidak diperlukan disini karena useEffect di atas 
            // akan tertrigger otomatis setelah proses koneksi context selesai.
        } catch (err) {
            setError(err.message || 'Kombinasi email atau password salah.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <SEO title="Masuk" description="Masuk ke akun MikroTik Web PLP Anda untuk mengakses seluruh materi." path="/login" />
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Selamat Datang Kembali</h1>
                <p className="text-gray-600 mt-2">Masuk ke akun LMS MikroTik Anda</p>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm border border-red-100">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="••••••••"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 disabled:opacity-50 transition-colors"
                >
                    {loading ? 'Memeriksa Kredensial...' : 'Masuk'}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
                Belum punya akun? <Link to="/register" className="text-blue-600 hover:underline font-medium">Daftar sekarang</Link>
            </div>
        </div>
    );
};

export default Login;