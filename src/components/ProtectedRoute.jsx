import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ requireApproval = false, requireRole = null }) => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Jika belum login, redirect ke login page
  if (!user || !profile) {
    return <Navigate to="/login" replace />;
  }

  // Jika membutuhkan role khusus (misalnya hanya 'guru' yang boleh masuk)
  if (requireRole && profile.role !== requireRole) {
    return <Navigate to="/" replace />; // Lempar ke beranda kalau bukan role-nya
  }

  // Jika butuh persetujuan login (Untuk siswa yang belum diapprove guru)
  if (requireApproval && profile.role === 'siswa' && !profile.is_approved) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8">
        <div className="bg-yellow-50 text-yellow-600 p-6 rounded-full mb-6 relative">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Akses Anda Menunggu Persetujuan</h1>
        <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
          Akun Anda saat ini belum diproses atau diaktifkan oleh Guru. Silakan hubungi pengajar Anda untuk memverifikasi pendaftaran Anda agar bisa mulai membaca kelas materi LMS ini.
        </p>
        <button onClick={() => window.history.back()} className="bg-white border flex gap-2 items-center border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Halaman Sebelumnya
        </button>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
