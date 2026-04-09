import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/atoms/SEO';

const Home = () => {
  const { user, profile } = useAuth();
  return (
    <div className="max-w-5xl mx-auto py-8">
      <SEO 
        title="Beranda" 
        description="Platform edukasi interaktif untuk memahami fundamental jaringan komputer, routing, manajemen bandwidth, dan troubleshooting menggunakan MikroTik RouterOS."
        path="/"
      />
      
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            MikroTik Web PLP Jaka Perdana
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Platform edukasi interaktif untuk memahami fundamental jaringan komputer, routing, manajemen bandwidth, dan troubleshooting menggunakan sistem operasi RouterOS dengan bahasa yang mudah dicerna.
          </p>
        </div>

        {/* CTA Login / Register */}
        <div className="bg-blue-50 px-8 py-8 md:flex md:items-center md:justify-between border-t border-blue-100">
          {user ? (
            <div className="mb-6 md:mb-0 w-full text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Selamat Datang kembali, {profile?.full_name || 'Siswa'}! 👋</h3>
              <p className="text-blue-700/80">Silakan pilih menu modul di bawah untuk mulai/melanjutkan petualangan jaringan Anda hari ini.</p>
            </div>
          ) : (
            <>
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Belum Punya Akun?</h3>
                <p className="text-blue-700/80">Silakan login atau daftar untuk melacak progres belajar Anda dan mengakses seluruh modul secara penuh, serta mendapatkan akses kuis ujian simulasi.</p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <Link to="/login" className="bg-white text-blue-600 hover:bg-gray-50 border border-blue-200 font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-sm">
                  Masuk (Login)
                </Link>
                <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-sm">
                  Buat Akun Baru
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modules Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          Kurikulum Modul Kita
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link to="/fondasi/pengenalan-routeros" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 mb-2 transition-colors">Bab 1: Fondasi Jaringan</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Pengenalan RouterOS, Layer 2 vs 3, metode akses port interface, dan pondasi subnetting IPv4.</p>
            <span className="text-indigo-600 font-medium text-sm flex items-center">Mulai Belajar <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></span>
          </Link>

          {/* Card 2 */}
          <Link to="/routing/konsep-dasar" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 mb-2 transition-colors">Bab 2: Routing Inti (L3)</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Membaca jalan IP Routes, Distance Metric, Failover, The Default Route (0.0.0.0/0), dan aturan routing.</p>
            <span className="text-indigo-600 font-medium text-sm flex items-center">Mulai Belajar <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></span>
          </Link>

          {/* Card 3 */}
          <Link to="/nat/konsep-dasar" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 mb-2 transition-colors">Bab 3: NAT</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Source NAT, Destination NAT, membedah Masquerade topeng IP, dan melubangi firewall CCTV via Port Forwarding.</p>
            <span className="text-indigo-600 font-medium text-sm flex items-center">Mulai Belajar <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></span>
          </Link>

          {/* Card 4 */}
          <Link to="/packet-flow/pengenalan" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 mb-2 transition-colors">Bab 4: Packet Flow</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Menyelami jeroan Input, Output, Forward, dan memahami dimana paket dicegik (Prerouting & Postrouting).</p>
            <span className="text-indigo-600 font-medium text-sm flex items-center">Mulai Belajar <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></span>
          </Link>

          {/* Card 5 */}
          <Link to="/manajemen/konfigurasi" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 mb-2 transition-colors">Bab 5: Manajemen Router</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Limit Bandwidth (QoS), Auto-Script Scheduler, NTP Clock, Hardening keamanan, dan konfigurasi Filter Firewall.</p>
            <span className="text-indigo-600 font-medium text-sm flex items-center">Mulai Belajar <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></span>
          </Link>

          {/* Card 6 */}
          <Link to="/troubleshooting/skenario-umum" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 mb-2 transition-colors">Bab 6: Analisa & Trouble</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Membedah System Log merah, menangani ping RTO vs Unreachable, nge-Torch bandwitdh, dan Traceroute.</p>
            <span className="text-indigo-600 font-medium text-sm flex items-center">Mulai Belajar <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></span>
          </Link>
        </div>

        <Link to="/exam" className="mt-8 flex items-center justify-center gap-2 w-full rounded-xl shadow-md p-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg transition-all transform hover:-translate-y-1">
          Take Exam
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>

    </div>
  );
};

export default Home;
