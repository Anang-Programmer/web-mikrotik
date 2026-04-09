import MateriImage from "../../components/atoms/MateriImage";

const SkenarioUmumTroubleshooting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 6: Troubleshooting & Analisa
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Skenario Masalah Penyakit Umum
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Request Timed Out (RTO) vs Unreachable */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Salah Kaprah: RTO vs Destination Net Unreachable</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Saat koneksi warnet putus, administrator pemula biasanya hanya berteriak <em>"Wah ping-nya putus nih!"</em> tanpa membaca pelan pelan tulisan pesan teks balasan keramat yang dilemparkan oleh terminal layar hitam CMD Windows. 
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li>
                            <strong className="text-red-700">Request Timed Out (RTO):</strong> Ciri mutlak bahwa Router Anda itu <strong>tau arah/jalan petanya</strong> saat di-tanya mau buang kemana. Tapi sayang nasib, dia udah capek nungguin, Eh ternyata si Server target diseberang sana mati kelistrikan atau jalannya putus ketimbun longsor di tengah perjalanan hop selanjutnya. Intinya paket udah terlanjur meluncur keluar dari router lu.
                        </li>
                        <li>
                            <strong className="text-blue-700">Destination Net Unreachable:</strong> Ini tamparan keras buat lu si tukang setting. Kenapa? Karena paket suratnya bahkan <strong>belum sempat dikirim keluar</strong> pintu router! Si router sejak detik pertama di mejanya udah kebingungan ngomel <em>"Gue gapunya peta route ini di otak Routing Table gue! Jangan paksa gue buang paket ke kehampaan"</em>. Segera setting Default Route kalian.
                        </li>
                    </ul>
                </div>

                {/* 2. DNS Leak Resolution */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Internet "Nyakut" Ping Angka Bisa, Buka Browser Bengong</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Kejadian paling ajaib ke-2: Klien bisa melakukan <code>ping 8.8.8.8</code> dengan sukses balasan <em>Reply 10ms</em> dari CMD. Saking senengnya dia buka Google Chrome trus ngetik alamat youtube.com, EH gak taunya malah muter terus keluar dinosaurus offline mentok! Logikanya ping rute aspal jalan, kenapa buka website gagal?
                    </p>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-[15px] mt-4">
                        <strong className="text-yellow-800 mb-1 block">Solusi Tersangka Mutlak: DNS Server Kosong!</strong> 
                        Website butuh jasa Tukang cari nama Buku Telepon (DNS)!. Meskipun jalan tol aspalnya sehat (Ping angka lancar), Chrome kalian tidak akan bisa nemu jalan Youtube kalau tak ada jasa transalasi penerjemahnya. 
                        <br/>Segera isikan <code>8.8.8.8</code> di menu <em>IP &gt; DNS</em> mikrotik, dan jangan lupa isikan IP router Anda sendiri di tab setting ip Laptop Client IPv4 DNS-nya!
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkenarioUmumTroubleshooting;
