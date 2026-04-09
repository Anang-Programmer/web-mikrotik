import MateriImage from "../../components/atoms/MateriImage";

const ConntrackNat = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 3: NAT (Network Address Translation)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Connection Tracking (Buku Tamu Firewall)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Pengenalan Puncak Sihir */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Otak Jantung Sistem: Connection Tracking</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Banyak yang mengira NAT itu berjalan secara otomatis ajaib menebak pengelompokkan pengguna. Sadarkan Anda kalau Masquerade (SNAT) tadi cuma me-replace IP pengirim saat paket KELUAR internet. 
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Lalu jika dari 20 client komputer PC barengan ngakses server Instagram.com, dan Server Instagram mulai balas me-reply balik jutaan paket ke IP Router Mikrotik kita, Pertanyaannya: <strong>Kok bisa sang Router memilah & membongkar terjemahannya pas mengarah kembali (inbound), dan tahu spesifik ke arah komputer client mana foto selena gomez itu dikirim tanpa takut ketuker layar monitor PC?</strong>
                    </p>
                    <MateriImage 
                        src="/images/nat/connection_tracking/connection.png" 
                        alt="Tangkapan layar Jendela Firewall di tab menu bernama 'Connections'. Isinya banyak sekali daftar port sumber, ip sumber tujuan numpuk berjejal perdetik dengan tcp state bertuliskan established/time_wait." 
                        caption="Daftar detak jantung memori memusingkan semua riwayat koneksi aktif (Conntrack)." 
                    />
                </div>

                {/* 2. Logika buku catatan tcp */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Prinsip "Buku Tamu Security" Statefull</h2>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li>
                            Router MikroTik dibekali memori fitur sakti di dalam Firewall yang dinamakan <strong>Conntrack (Connection Tracking)</strong>. Di menu IP &gt; Firewall &gt; Connections
                        </li>
                        <li>
                            Fitur ini seperti buku tamu catatan tangan port satpam pos di pintu depan. Saat ada anak PC melintas minta dikirimkan SNAT, Satpam ini mencatat riwayat detilnya: <em>"Oh, PC nomor IP sekian, jam sekian, lagi buka alamat goggle lewat pintu protokol TCP 443 ya, oke tak bukain NAT."</em>
                        </li>
                        <li>
                            Saat di masa depan kiriman balik reply google datang membanjiri di depan wajah pintu modem, Si router hanya tinggal "Liat nyontek ulang daftar buku tamunya" untuk dicocokan nama kembalinya, dan topengnya dibuka dikembalikan sempurna dengan akurat.
                        </li>
                    </ul>
                </div>

                {/* 3. Masalah Overhead Resiko Beban */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Senjata Makan Tuan (CPU Overhead Server)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Di balik kejeniusannya, Fitur Tracker ini adalah tersangka pertama pemakan memakan serakus-rakusnya nyawa sumber daya CPU prosesor si MikroTik (Overhead CPU Mentok 100% dan membuat nge-hang Router).
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4">
                        <strong className="text-red-600 block mb-2">Kenapa Bisa Makan Core Memori Begitu Sadis?</strong> 
                        Karena fitur ini mengharuskan otak Router "Membongkar Inspeksi" status hubungan tcp setiap 1 gigabit juta pecahan data torrents per detiknya buat me-nyorot memori tabelnya.
                        <br/><br/>
                        Jika Anda bermain ISP core/sultan kelas atas men-handle lalu lintas murni skala BGP internasional, tidak ada ceritanya Anda menyalakan Masquerade NAT! Connection Tracking wajib Di-Disable/Dimatikan Fiturnya total, sehingga router tidak bertingkah lambat jadi dewa penjaga tameng, namun beraksi lari bebas pure sebagai kuda pelanting Forwarding Paket Tembaga.
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ConntrackNat;
