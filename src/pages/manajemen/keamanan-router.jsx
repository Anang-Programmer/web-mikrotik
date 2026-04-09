import MateriImage from "../../components/atoms/MateriImage";

const KeamananRouterManajemen = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 5: Manajemen Fitur Mutakhir
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Harden Keamanan (ROMON & Port Service)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Services Block */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Menutup Pintu Layanan Bahaya (IP Services)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Cara pertama meretas mikrotik perusahaan sebelah bukanlah dengan magic sulap film-film, namun cukup dengan menscan kelalaian pintunya (<em>Port Scanning nmap</em>). 
                        Secara otomatis pabrik, RouterOS dengan bodoh nge-buka enable lebar-lebar akses lubang FTP (port 21), SSH (Port 22), Telnet Jadul (23) dll.
                    </p>
                    <MateriImage 
                        src="/images/manajemen/keamanan_router/keamanan_router.png" 
                        alt="Screenshot jendela IP > Services di mikrotik. Semua tulisan selain port Winbox (8291) disentuh tombol silang disable warna abu pucat / mati. Serta ada tambahan port winbox di geser ke port ngawur 59918." 
                        caption="Pemotongan lubang pintu intip yang rentan dari tangan hacker script-kiddie internet." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>Hardening 1:</strong> Segera melipir kunjungi <code>IP &gt; Services</code>. Beri tanda palang Silang disable Merah (Silang) seluruh FTP, Telnet jadul dan port WWW API kecuali hanya menyisakan Winbox berdiri tegak sendirian nyala!</li>
                        <li><strong>Hardening 2 (Port Obfuscation):</strong> Edit klik rubah nomer lubang Winbox yang sakral itu (dari <code>8291</code> mutlak ganti disulap pakai angka acak kesukaanmu misal Thematic <code>60601</code>). Bocah bocah smk diluar sana pasti mentok garuk kepala ngeping masuk nyari jalan akses adminnya ga nemu port common alias pintu depan kosong ngilang.</li>
                    </ul>
                </div>

                {/* 2. RoMON Kasta Dewa Winbox */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Sakti Remoting Ajaib via RoMON</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Jika kalian menjadi Site Manager memantau ratusan rantai router perbatasan pegunungan.. apakah harus nyolokin IP VPN / nge-klik NAT nembus ke titik terdalam 100 lapis cabang NAT router paling ujung timur yang ketutup private sub IP? <br/>
                        Di sini MikroTik menyimpan fitur rahasia eksklusif Layer 2 super bernama <strong>RoMON (Router Management Overlay Network)</strong>.
                    </p>
                    <p className="text-[15px] leading-relaxed p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <strong>Cara kerja Gila nya:</strong> Aktifkan tombol `Enable RoMON` di Tools {">"} Romon semua cabang router. Dan ajaib.. saat Anda buka aplikasi PC Winbox utama, Anda cukup klik Login nempel ke 1 buah Core Router Induk Pusat Utama, seketika di jendelan bawah Neighbors Romon List akan bermunculan menjalar mekar nembus Tampil MAC Address SEMUA cabang puluhan router mikrotik lapis bawahnya tanpa harus setting IP rumit apapun! Anda ngeremote numpang gerbong dari dalam punggung gerbong. Gila!
                    </p>
                </div>

            </div>
        </div>  
    );
};

export default KeamananRouterManajemen;
