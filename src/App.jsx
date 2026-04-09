import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Register from "./pages/register";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";

// fondasi imports
// ... assuming they stay the same here ...
import PengenalanRouterosFondasi from "./pages/fondasi/pengenalan-routeros";
import MetodeAksesFondasi from "./pages/fondasi/metode-akses";
import ManajemenDasarFondasi from "./pages/fondasi/manajemen-dasar";
import IpAddressFondasi from "./pages/fondasi/ip-address";
import Layer2VsLayer3Fondasi from "./pages/fondasi/layer2-vs-layer3";
import ManajemenInterfaceFondasi from "./pages/fondasi/manajemen-interface";

// routing imports
import KonsepDasarRouting from "./pages/routing/konsep-dasar";
import RoutingTableRouting from "./pages/routing/routing-table";
import DefaultRouteRouting from "./pages/routing/default-route";
import StaticRoutingRouting from "./pages/routing/static-routing";
import MetricDistanceRouting from "./pages/routing/metric-distance";
import CheckGatewayRouting from "./pages/routing/check-gateway";

// nat imports
import KonsepDasarNat from "./pages/nat/konsep-dasar";
import SourceNatNat from "./pages/nat/source-nat";
import DestinationNatNat from "./pages/nat/destination-nat";
import ConnectionTrackingNat from "./pages/nat/connection-tracking";

// packet-flow imports
import PengenalanPacketFlow from "./pages/packet-flow/pengenalan";
import InputOutputPacketFlow from "./pages/packet-flow/input-output";
import ForwardPacketFlow from "./pages/packet-flow/forward";
import PreroutingPostroutingPacketFlow from "./pages/packet-flow/prerouting-postrouting";
import AnalisaMasalahPacketFlow from "./pages/packet-flow/analisa-masalah";

// manajemen imports
import KonfigurasiManajemen from "./pages/manajemen/konfigurasi";
import FirewallFilterManajemen from "./pages/manajemen/firewall-filter";
import KeamananRouterManajemen from "./pages/manajemen/keamanan-router";
import ManajemenBandwidthManajemen from "./pages/manajemen/manajemen-bandwidth";
import LayananJaringanManajemen from "./pages/manajemen/layanan-jaringan";
import NtpManajemen from "./pages/manajemen/ntp";

// troubleshooting imports
import ToolDiagnosaTroubleshooting from "./pages/troubleshooting/tool-diagnosa";
import MonitoringTrafikTroubleshooting from "./pages/troubleshooting/monitoring-trafik";
import SystemLoggingTroubleshooting from "./pages/troubleshooting/system-logging";
import SkenarioUmumTroubleshooting from "./pages/troubleshooting/skenario-umum";

// Teacher Admin import
import DashboardGuru from "./pages/DashboardGuru";
import ManageQuestions from "./pages/ManageQuestions";
import MateriLayout from "./components/atoms/MateriLayout";

// Komponen Pembuka Bab (Ketika hanya klik judul bab)
const BabPage = () => {
  const { chapter } = useParams();
  const formatText = (text) => text.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const chapterData = {
    'fondasi': {
      title: 'Bab 1: Fondasi Jaringan',
      desc: 'Tahap awal untuk mengenal dunia RouterOS. Anda akan mempelajari arsitektur dasar perangkat MikroTik, metode pembagian jalan, hingga konfigurasi fundamental perangkat.',
      topics: ['Pengenalan RouterOS & RouterBoard', 'Empat Metode Akses Perangkat', 'Manajemen Dasar OS & Hak User', 'Pemahaman Desain IP Address', 'Konsep Layer 2 vs Layer 3', 'Manajemen Antarmuka (Interface)']
    },
    'routing': {
      title: 'Bab 2: Routing Inti (Layer 3)',
      desc: 'Memasuki gerbang utama dari teknologi jaringan. Anda akan mempelajari esensi dari bagaimana sebuah router menimbang, menilai jalur, dan melakukan pengiriman paket beda benua.',
      topics: ['Konsep Dasar Peta Routing', 'Membaca Tabel Routing (IP Routes)', 'Static Routing (Manajemen Manual)', 'Default Route 0.0.0.0/0', 'Distance Metric & Failover ISP', 'Check Gateway (Senter Tembak Ping)']
    },
    'nat': {
      title: 'Bab 3: Sihir NAT (Penerjemah)',
      desc: 'Mengupas tuntas sihir ajaib di balik koneksi privat. Pahami bagaimana seratus karyawan bisa berbagi 1 sumber IP internet, dan kebalikan proses membajak Port akses luar.',
      topics: ['Konsep Dasar (Kiamat IPv4)', 'Source NAT & Aksi Masquerade', 'Destination NAT (Port Forwarding)', 'Connection Tracking (Daftar Buku Tamu)']
    },
    'packet-flow': {
      title: 'Bab 4: Peta Arus Packet Flow',
      desc: 'Menyelami labirin inti pembagian mesin MikroTik. Kenali dimana sebuah gerak belok paket diputuskan, dan kuasai seni peletakkan eksekusi Filter yang sebenarnya.',
      topics: ['Pengenalan Logical Diagram', 'Lorong Prerouting & Postrouting', 'Chain Input & Output', 'Chain Forward (Sang Jembatan)', 'Analisa Salah Tembak Filter']
    },
    'manajemen': {
      title: 'Bab 5: Manajemen Fitur Mutakhir',
      desc: 'Ilmu bertahan para administrator harian sejati. Dari pembagian limit kecepatan jatah warnet, sekuritas kunci gembok jaringan lokal, hingga urusan perihal jam waktu detak.',
      topics: ['Layanan DHCP & DNS Server', 'Limitasi Bandwidth (Simple Queue/Tree)', 'Firewall Filter & Sensor Layer 7', 'Sinkronisasi NTP (Jam Otomatis)', 'Scheduler Alarm & Scripting Lanjut', 'Harden Keamanan (IP Service & RoMON)']
    },
    'troubleshooting': {
      title: 'Bab 6: Analisa & Troubleshooting',
      desc: 'Jurus akhir pencarian titik keruntuhan internet secara cerdas. Hentikan rabaan ilmu ghaib, dan mulailah menganalisa layaknya seorang Network Engineer bedah.',
      topics: ['Analisis Umum: RTO vs Unreachable', 'Tool Diagnosa (Traceroute & Profile)', 'System Logging & Baca Peringatan Merah', 'Monitoring Trafik (Torch Senter Live & MRTG)']
    }
  };

  const data = chapterData[chapter] || {
    title: `Pengantar Modul: ${formatText(chapter)}`,
    desc: 'Silakan pilih sub-materi dari menu navigasi di atas untuk mulai belajar atau mengakses simulasi latihan.',
    topics: []
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mt-6">
       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-10 text-white">
          <h1 className="text-3xl font-bold mb-3">{data.title}</h1>
          <p className="text-blue-100 text-lg max-w-3xl leading-relaxed">{data.desc}</p>
       </div>
       <div className="p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            Apa yang akan Anda pelajari di Bab ini?
          </h2>
          {data.topics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {data.topics.map((t, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 border border-gray-100 p-4 rounded-lg hover:border-indigo-200 transition-colors">
                     <span className="flex-shrink-0 bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded flex items-center justify-center text-sm">{index + 1}</span>
                     <span className="text-gray-700 font-medium">{t}</span>
                  </div>
               ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">Belum ada daftar topik spesifik yang ditentukan.</p>
          )}
          <div className="mt-8 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded text-indigo-900">
             <strong>Aksi Berikutnya:</strong> Gunakan menu <em>Dropdown</em> (panah ke bawah) pada tajuk Bab di <strong>Navigasi Atas</strong> untuk mulai membaca dan membuka lembaran materi secara berurutan.
          </div>
       </div>
    </div>
  );
};

import Home from "./pages/Home";
import Exam from "./pages/Exam";
import TentangKami from "./pages/support/TentangKami";
import Faq from "./pages/support/Faq";
import LaporkanMasalah from "./pages/support/LaporkanMasalah";
import PrivacyPolicy from "./pages/support/PrivacyPolicy";
import TermsOfService from "./pages/support/TermsOfService";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/laporkan-masalah" element={<LaporkanMasalah />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* Protected: Exam (standalone, tidak pakai MateriLayout) */}
          <Route element={<ProtectedRoute requireApproval={true} />}>
            <Route path="/exam" element={<Exam />} />
          </Route>

          {/* Protected: Semua halaman Materi (dibungkus MateriLayout = breadcrumb back) */}
          <Route element={<ProtectedRoute requireApproval={true} />}>
            <Route element={<MateriLayout />}>
              {/* fondasi routes */}
              <Route path="/fondasi/pengenalan-routeros" element={<PengenalanRouterosFondasi />} />
              <Route path="/fondasi/metode-akses" element={<MetodeAksesFondasi />} />
              <Route path="/fondasi/manajemen-dasar" element={<ManajemenDasarFondasi />} />
              <Route path="/fondasi/ip-address" element={<IpAddressFondasi />} />
              <Route path="/fondasi/layer2-vs-layer3" element={<Layer2VsLayer3Fondasi />} />
              <Route path="/fondasi/manajemen-interface" element={<ManajemenInterfaceFondasi />} />

              {/* routing routes */}
              <Route path="/routing/konsep-dasar" element={<KonsepDasarRouting />} />
              <Route path="/routing/routing-table" element={<RoutingTableRouting />} />
              <Route path="/routing/default-route" element={<DefaultRouteRouting />} />
              <Route path="/routing/static-routing" element={<StaticRoutingRouting />} />
              <Route path="/routing/metric-distance" element={<MetricDistanceRouting />} />
              <Route path="/routing/check-gateway" element={<CheckGatewayRouting />} />

              {/* nat routes */}
              <Route path="/nat/konsep-dasar" element={<KonsepDasarNat />} />
              <Route path="/nat/source-nat" element={<SourceNatNat />} />
              <Route path="/nat/destination-nat" element={<DestinationNatNat />} />
              <Route path="/nat/connection-tracking" element={<ConnectionTrackingNat />} />

              {/* packet-flow routes */}
              <Route path="/packet-flow/pengenalan" element={<PengenalanPacketFlow />} />
              <Route path="/packet-flow/input-output" element={<InputOutputPacketFlow />} />
              <Route path="/packet-flow/forward" element={<ForwardPacketFlow />} />
              <Route path="/packet-flow/prerouting-postrouting" element={<PreroutingPostroutingPacketFlow />} />
              <Route path="/packet-flow/analisa-masalah" element={<AnalisaMasalahPacketFlow />} />

              {/* manajemen routes */}
              <Route path="/manajemen/konfigurasi" element={<KonfigurasiManajemen />} />
              <Route path="/manajemen/firewall-filter" element={<FirewallFilterManajemen />} />
              <Route path="/manajemen/keamanan-router" element={<KeamananRouterManajemen />} />
              <Route path="/manajemen/manajemen-bandwidth" element={<ManajemenBandwidthManajemen />} />
              <Route path="/manajemen/layanan-jaringan" element={<LayananJaringanManajemen />} />
              <Route path="/manajemen/ntp" element={<NtpManajemen />} />

              {/* troubleshooting routes */}
              <Route path="/troubleshooting/tool-diagnosa" element={<ToolDiagnosaTroubleshooting />} />
              <Route path="/troubleshooting/monitoring-trafik" element={<MonitoringTrafikTroubleshooting />} />
              <Route path="/troubleshooting/system-logging" element={<SystemLoggingTroubleshooting />} />
              <Route path="/troubleshooting/skenario-umum" element={<SkenarioUmumTroubleshooting />} />
              
              {/* Fallback halaman Bab */}
              <Route path="/:chapter" element={<BabPage />} />
            </Route>
          </Route>

          {/* Teacher Only Routes (Admin) */}
          <Route element={<ProtectedRoute requireRole="guru" />}>
            <Route path="/dashboard-guru" element={<Navigate to="/dashboard-guru/siswa" replace />} />
            <Route path="/dashboard-guru/:tab" element={<DashboardGuru />} />
            <Route path="/dashboard-guru/exam/:examId" element={<ManageQuestions />} />
          </Route>

        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
