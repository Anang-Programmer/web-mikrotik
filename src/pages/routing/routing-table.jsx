import MateriImage from "../../components/atoms/MateriImage";

const RoutingTableRouting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 2: Routing (Layer 3)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Membaca Tabel Routing (IP Routes)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">
                <p className="text-[15px] mb-6 leading-relaxed">
                    Seluruh intisari kehidupan fungsi router ada di satu tempat ini: jendela <strong>IP &gt; Routes</strong> di Winbox. Komputer pengguna hanyalah turis, sedangkan Tabel Routing ini adalah buku peta navigasi absolut yang memegang kendali semesta network.
                </p>

                {/* 1. Parameter Penting */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Parameter Komponen Tabel Routing</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Saat membuka jendela tersebut, kita langsung disuguhkan banyak kolom angka IP. Fokuslah menatap dua arsitekturnya:
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-[15px] leading-relaxed">
                        <li><strong>Dst. Address:</strong> Papan nama alamat tujuan (selalu diakhiri dengan kombinasi subnet block jaringan, misal <code>10.5.5.0/24</code>).</li>
                        <li><strong>Gateway:</strong> Kendaraan/Gerbang loncatan paket untuk menuju ke tujuan tersebut. Bisa berbentuk IP address port tetangga terdekat, atau menggunakan antarmuka keluar langsung seperti <code>ether1</code>.</li>
                    </ul>
                </div>

                {/* 2. Flag Status */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Membaca Status Bendera (Routing Flags)</h2>
                    <MateriImage 
                        src="/images/routing/routing_table/route_list.png" 
                        alt="Screenshot penuh jendela 'Route List' MikroTik. Berfokus di kolom paling kiri dengan huruf-huruf DAC, AS, DS yang warna font listnya antara biru, abu abu, dan hitam tebal." 
                        caption="Inisial huruf (flags) menjelaskan asal usul terciptanya suatu rute." 
                    />
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Anda mungkin kebingungan melihat kumpulan huruf (singkatan) aneh di ujung kiri baris tabel routing. Tabel ini bisa memiliki satu bendera atau langsung tiga berjejer:
                    </p>
                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                        <ul className="list-none space-y-4 mb-0 text-[15px]">
                            <li>
                                <div className="flex gap-2">
                                    <span className="font-extrabold text-blue-700 min-w-[30px]">A</span>
                                    <div><strong>(Active):</strong> Artinya rute tersebut masuk dan sah diotorisasi jadi panduan. Kalau lampunya padam warna biru pucat, biasanya IP gatewaynya ngambek tiada, listriknya putus, atau reachable=no.</div>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-2">
                                    <span className="font-extrabold text-green-700 min-w-[30px]">C</span>
                                    <div><strong>(Connected):</strong> Artinya bukan manusia yang ngetik di command line. Rute ajaib ini mendadak otomatis tercipta begitu Anda selesai menyetel IP Address di sebuah port fisik langsung (karena dia tetangga nempel badan / Layer 2 Lungsuran).</div>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-2">
                                    <span className="font-extrabold text-purple-700 min-w-[30px]">D</span>
                                    <div><strong>(Dynamic):</strong> Rute turunan hantu ciptaan robot protokol routing seperti OSPF, BGP, atau VPN dial-in. Anda tidak sakti bisa menekan tombol (-) (Hapus) secara manual pada IP tipe ini.</div>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-2">
                                    <span className="font-extrabold text-amber-700 min-w-[30px]">S</span>
                                    <div><strong>(Static):</strong> Rute keras kepala murni hasil goresan tangan Anda sendiri yang ditulis secara manual di router.</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. Logika Longest Prefix Match */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Hukum Mutlak: Longest Prefix Match</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Hukum yang wajib diingat waktu skripsi atau praktikum di lapangan: Jika MikroTik memegang dua lembar peta mengarah ke target yang sama/beririsan, ia tidak peduli siapa yang bikin peta duluan, tapi akan memprioritaskan peta yang memiliki pengunci gembok spesifikasi prefix (/XX) paling sempit atau spesifik.
                    </p>
                    
                    <MateriImage 
                        src="/images/routing/routing_table/longest.png" 
                        alt="Grafis piramida terbalik yang mengurutkan /0 (Semesta luas - Internet) turun ke /16 ke /24 (Blok Kantor) sampai pucuknya target /32 (Tunggal satu buah device IP)." 
                        caption="Semakin besar angka slash (/xx), semakin sempit radiusnya, dan semakin MikroTik memilihnya." 
                    />

                    <p className="text-[15px] mb-3 mt-4 font-semibold text-gray-800">Contoh Konflik Rute (Longest Prefix):</p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px] leading-relaxed">
                        <li>(Rute A): Menuju Semesta <strong>0.0.0.0/0</strong> (Global Paling Lebar) &rarr; Buangan lewat ISP Biznet.</li>
                        <li>(Rute B): Menuju Benua YouTube <strong>142.0.0.0/8</strong> (Sangat Luas) &rarr; Buangan lewat Ether 2.</li>
                        <li>(Rute C): Menuju Rumah Sakit <strong>142.250.70.0/24</strong> (Lumayan Sempit) &rarr; Buangan lewat VPN kantor cabang.</li>
                    </ul>
                    <p className="text-[15px] mt-4 leading-relaxed p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <strong>Kejadian:</strong> Klien mengetik IP spesifik <code>142.250.70.14</code>. Ke manakah MikroTik akan membuang paket klien tersbut? <br/>
                        <strong>Jawaban:</strong> MikroTik akan mencampakkan (Rute A) dan mengabaikan (Rute B) meskipun semuanya adalah benar arah ke YouTube. Ia hanya mengambil (Rute C) yang memiliki pelindung /24 karena radius gang-nya paling akurat (mendekati 32 bit).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RoutingTableRouting;
