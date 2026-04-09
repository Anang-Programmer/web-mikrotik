import MateriImage from "../../components/atoms/MateriImage";

const MetricDistanceRouting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 2: Routing (Layer 3)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Distance & Metric (Menyingkirkan Galau Peta)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Administrative Distance */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Hak Veto Mutlak (Administrative Distance)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Di dunia nyata, tidak mungkin ada kantor yang internetnya tidak dobel langganan kabel. Bayangkan jika ISP Indihome mempromosikan peta menuju YouTube lewat kiri <em>Ether1</em>, tetapi provider kabel ISP Biznet menawarinya peta menuju YouTube lewat kanan <em>Ether2</em>. Dua duanya menuju target network prefix*/alamat tujuan yang ukurannya persis tumpang tindih sama seukuran. 
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Jika kebetulan colok ganda, Router akan dilema (galau) dan bingung parah menuruti omongan peta siapa, karena sama sama menyakinkan. Di sinilah MikroTik dibekali nilai ukuran poin tingkat kepercayaan mutlak yang disebut <strong>Administrative Distance (AD)</strong>.
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px]">
                        <li>
                            <strong className="text-red-600 font-bold">Hukum Kemutlakan Routing:</strong> 
                            Siapapun peta saksinya, semakin <strong>KECIL NOMOR PIN poin nilai distance-nya</strong>, maka gerombolan rute itulah yang akan diprorientaskan untuk digemborkan sebagai jalan aspal sang juara pialang lalu lintas! Rute lawannya di parkir beku menunggu tiada (Inactive).
                        </li>
                    </ul>
                </div>

                {/* 2. Daftar Kasta Kepercayaan Standar */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Kasta Ranking Distance Bawaan Pabrik</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        MikroTik sudah menyimpan setelan patokan dari lahir seberapa ia meletakan tingkat ketulusan percaya (trust) pada suatu jenis pembawaan perintah:
                    </p>
                    <div className="overflow-x-auto border border-gray-200 rounded-lg mt-4">
                        <table className="min-w-full bg-white text-left text-[15px]">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-5 py-3 font-semibold text-gray-700">Tipe Asal Pembuat Peta (Routing)</th>
                                    <th className="px-5 py-3 font-semibold text-gray-700 text-center">Nilai Bawaan Pintasan (AD)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-5 py-3 text-gray-800">Directly Connected (Nempel Badan Perangkat Fisik Sendiri)</td>
                                    <td className="px-5 py-3 font-bold text-center text-blue-600">0</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 text-gray-800"><span className="bg-yellow-100 px-2 py-0.5 rounded text-sm mr-2 font-medium">S (Static)</span> Ditulis paksa pakem oleh dewa jaringan (Manusia Admin)</td>
                                    <td className="px-5 py-3 font-bold text-center text-amber-600">1</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 text-gray-800">OSPF (Protokol Kecerdasan Robot standar benua)</td>
                                    <td className="px-5 py-3 font-bold text-center text-gray-600">110</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 text-gray-800">BGP (Protokol Peering Khusus Lintas Antar ISP Negara Pemasok)</td>
                                    <td className="px-5 py-3 font-bold text-center text-gray-500">20 / 200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. Failover Sederhana */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Praktik Kasus Nyata: Auto Failover Backup ISP</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Konsep sederhana <em>Failover</em> (Kondisi saat kabel wifi Telkom mati, pindah diem-diem tanpa kerasa jeda putus ke modem darurat HP Tethering GSM) bisa cuma memanfaatkan set mainan trik nakal selisih pertempuran nilai <code>Distance</code> ini.
                    </p>
                    <MateriImage 
                        src="/images/routing/metric_distance/metric.png" 
                        alt="Screenshot tabel IP Routes di Winbox menampilkan 2 buah kotak setting jalur Dst_address tujuan yang persis kembar yaitu Default Route 0.0.0.0/0. Satunya terlihat font tulisan hitam dengan kolom distance bernilai tulisan 1, sedangkan baris kembarannya di bawah bernilai biru puyeh (Inactive route distance 2)." 
                        caption="Desain dual ISP Main-Target dan Backup-Target dari selisih angka AD." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>Tahap 1:</strong> Memasukkan/Membuang jalur peta sapu jalan Default Route <code>0.0.0.0/0</code> menyebrang keluar pada Gateway milik langganan fiber ISP 1 (sebutlah Biznet, bandwidth kenceng tak terbatas limit kuota). Beri ia tahta mutlak rajanya distance bernilai <strong>1</strong> (Traffic padat merayap membalap via jalan tol primadona ini).</li>
                        <li><strong>Tahap 2:</strong> Membuat rejeksi peta cadangannya dengan cara mendaftarkan Default Route <code>0.0.0.0/0</code> kembaran pararel ke Gateway modem dari provider sim card HP Indosat cadangan (Kuota lemot cekik). Beri Ia cap nomer urutan selangkah menyingkir di angkuh nilai antrian distance <strong>2</strong> (Jalurnya stand-by tidur di bangku memancarkan warna biru Inactive membeku karena kalah dominasi urut kekuasaan antrian).</li>
                        <li><strong>Hasil Kesaktiannya:</strong> Seketika ada gempa dan traktor merobohkan tiang kabel optik dari Biznet mati pet, rute biru sang cadangan Indosat bernilai `2` sontak terbangun loncat dari mati suri (Berubah tulisan warnanya sekilas ke aktif Hitam murni) dan lalu lalang kelangsungan hidup koneksi anak warnet kantor terselamatkan.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MetricDistanceRouting;
