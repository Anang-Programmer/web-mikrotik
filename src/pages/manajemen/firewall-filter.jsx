import MateriImage from "../../components/atoms/MateriImage";

const FirewallFilterManajemen = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 5: Manajemen Fitur Mutakhir
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Firewall Filter & Pos Satpam Digital
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Logika Kejam Reject vs Drop */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Ilmu Kejam Sang Algojo Rule (Drop vs Reject)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Jika Anda kesal dengan karyawan main Facebook, atau Hacker Cina pingin men-jajah port IP Publik router Anda, Anda memakai menu <strong>IP &gt; Firewall &gt; Filter Rules</strong>. <br/>
                        Kunci dari ilmu algojo filter Rule (Sama seperti Simple queue tadi), adalah dibaca dari Urutan Nomor Indeks terkecil paling teratas atap ke arah bawah! Saat paket Anda terkena hantam pedang larangan blokir di Baris 1, rule baris nomor 2 di bawahnya yang berusaha membebaskannya gak bakalan pernah di-baca gubris mesin router (Paket udah hangus)!
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>Action=Drop (Silent Killer):</strong> Paket Hacker / Klien dicampakkan buang hancur di lubang tong sampah rahasia diam-diam tanpa kasih pesangon basa basi konfirmasi balasan apapun ke pengirimnya (Tampilan ping: RTO murni). CPU Enteng awet stabil dingin.</li>
                        <li><strong>Action=Reject (Killer Punya Adab):</strong> Paket pengirim ditolak nyangkut, namun Router masih baik hati merelakan sisa nyawa memori nguras CPU buat ngirim balik balesan amplop pelipur lara sopan "Maaf gan, akses port-mu kami larang blokir masuk dengan hormat" (Tampilan layar: <em>Destination Port Unreachable</em>).</li>
                    </ul>
                </div>

                {/* 2. L7 Protocol */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Meretas Ekstrem: Layer 7 Protocols (L7)</h2>
                    <MateriImage 
                        src="/images/manajemen/firewall_filter/firewall_filter.png" 
                        alt="Tangkapan layar RegEx code sintaks tumpukan aneh kayak gabungan koma titip caret dolar bintang masuk ke kotak jendela Layer 7 Protocol Regex string." 
                        caption="Memasukkan rumus ajaib Regular Expression (RegEx) untuk meretas isi lambung Header Data paket." 
                    />
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Filter biasa (L3/L4) lumrahnya cuma main larang blokir tembak menebak pake IP Addres / nomer buntut protocol TCP/UDP Port secara membosankan jadul. Tapi hari ini YouTube/TikTok punya triliunan ganti ganti nomer IP Dinamis misterius (Anycast), gak mungkin ngetik IP port blokir satu per satu.
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Solusinya menancapkan ilmu <strong>Layer 7 Protocol</strong>. L7 ini bekerja meretas masuk mendongkrak bagasi badan data dalam sebuah paket yang sedang jalan via Regex. <br/>
                        <em>"Cari kalau di dalam string teks Payload body ada unsur URL tulisan huruf `.net/api/tiktok`, sikat Drop hantam mati buang!"</em> (Tapi ingat, Regex ini beban prosesor CPU nya Mengerikan hingga ngelag, jangan buat sembarangan buat traffic bergiga-giga gede).
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FirewallFilterManajemen;
