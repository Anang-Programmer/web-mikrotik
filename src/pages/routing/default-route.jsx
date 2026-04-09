import MateriImage from "../../components/atoms/MateriImage";

const DefaultRouteRouting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 2: Routing (Layer 3)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Route 0.0.0.0/0 (Default Route Keselamatan)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Gateway of last Resort */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Apa Itu Gateway of Last Resort?</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Internet publik (Alam Raya di luar) berisikan miliaran kombinasi IP rumit milik server Amazon, server Netflix, TikTok, Google, dll. 
                        Tidak akan mungkin bagi kita apalagi memori kecil MikroTik RAM 64MB sanggup disumpeli Static Route mendaftarkan jutaan blok alamat benua satu satu pakai tangan manusia! 
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Solusi absolutnya adalah menggunakan fitur pembuangan sapu jagat: <strong>Default Route</strong>, yang disimbolkan dengan notasi nol mutlak <code>0.0.0.0/0</code>.
                    </p>
                    <MateriImage 
                        src="/images/routing/default_route/global.png" 
                        alt="Screenshot jendela setelan rule Default IP Route di winbox. Dst-Address di set persis ke 0.0.0.0/0 menuju sebuah IP modem gateway publik misalnya 192.168.1.1 (IP IndiHome/ISP Induk)." 
                        caption="0.0.0.0/0 mewakili seluruh semesta nomor tak terbatas." 
                    />
                </div>

                {/* 2. Cara Kerjanya */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Logika Sapu Buangan Route Bekerja</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Anggaplah pelanggan Warnet ngeklik tautan bermain game ke IP Address server Valorant di Singapura (misal: <code>142.250.70.0</code>). Router saat menerima permohonan itu pasti <em>menggeledah saku catetan bukunya</em> mencari alamat itu, dan panik karena catatannya kosong. 
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Ketika ketiadaan rute spesifik itu melanda, alih alih memblokir (Drop and Reject) pelanggan, MikroTik akan membanting pandangannya ke Loncatan Terakhir (Last Resort Route). <br/>
                        Mirip orang bilang: <em>"Wah pusing, pokok-nya selain IP dalam area LAN ruangan gue doang, lempar buta saja lah kotak ini keluar dari pintu Gateway ISP provider! Silakan si Indihome modem pusat raksasa sana saja yang mikir mau dibuang ke Singapurnya pakai rute under water laut mana."</em>
                    </p>
                </div>

                {/* 3. Cara Menambahkan */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Bagaimana Router Mendapatkan Route Sapu Jagat Ini?</h2>
                    <ul className="list-disc pl-5 space-y-3 text-[15px] leading-relaxed">
                        <li>
                            <strong>Secara Magis / Otomatis:</strong> Di tab menu IP &gt; DHCP Client. Saat MikroTik kita menancap numpang nempel nyedot (meminta) jaringan dari modem utama (ZTE/Huawei dari Telkom/PLN), pastikan saja kotak centang <strong className="bg-gray-100 px-2 py-1 rounded">Add Default Route</strong> menyala/yes. (Fitur magis akan berwujud inisial tulisan <span className="font-bold text-blue-700">D</span> <span className="font-bold text-amber-700">A</span> <span className="font-bold text-green-700">S</span> di tabel IP Routes menempel).
                        </li>
                        <li>
                            <strong>Secara Nyangkul Fisik (Statis):</strong> Anda menulis rutenya di IP &gt; Routes dan menge-klik tanda tombol (+). Dst Address nya biarkan tulis aslinya <code>0.0.0.0/0</code> lalu untuk kolom Gatewaynya anda cantumkan manual ip provider langganan bayaran anda (WAN Point).
                        </li>
                    </ul>
                </div>

                {/* 4. Miskonsepsi Lupa Gateway */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Musibah Lupa Pintu Keluar</h2>
                    <div className="p-5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-[15px]">
                        <div>
                            <strong className="block text-red-800 font-bold mb-1">Diagnosa "No Route To Host"</strong>
                            <p className="text-red-900/80 leading-relaxed mb-0">
                                Ini adalah keluhan pemula paling legendaris seumur hidup: <em>"Bangkai lah, IP client sudah oke nyambung, Ping antar laptop sukses full, setting NAT Masquerade nya centang beres, tapi pas PC buka browser Chrome kok lumpuh dan gak konek Internet! Muncul No Route!"</em>. <br/><br/>
                                Jika ini terjadi, hampir 98% dipastikan disebabkan kelupaan fatal memasang settingan jurus sapu jagat <strong>Default Route <code>0.0.0.0/0</code></strong> di otak tabel si router untuk mengarah pelabuhan keluar!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DefaultRouteRouting;
