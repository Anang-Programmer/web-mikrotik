import MateriImage from "../../components/atoms/MateriImage";

const PengenalanRouterosFondasi = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 1: Fondasi
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Pengenalan RouterOS & RouterBoard
                </h1>
            </div>

            <div className="prose max-w-none text-gray-800">

                {/* 1. Filosofi dan Sejarah */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Filosofi dan Sejarah MikroTik</h2>
                    <MateriImage 
                        src="/images/fondasi/pengenalan-router/filosofi_dan_sejarah.png" 
                        alt="Gambar Perusahaan Teknologi dari Latvia - Mikrotik" 
                        caption="MikroTik: Perusahaan teknologi dari Latvia yang mendunia." 
                    />
                    <p className="text-[15px] leading-relaxed">
                        MikroTik merupakan produsen perangkat lunak (software) dan perangkat keras (hardware) jaringan yang berbasis di Riga, Latvia. Didirikan pada tahun 1996 oleh John Trully dan Arnis Reikstins, perusahaan ini membawa misi untuk menjadikan teknologi internet lebih murah, cepat, handal, dan terjangkau secara luas melalui motto <strong>"Routing the World"</strong>. Di Indonesia, MikroTik telah menjadi standar <em>de facto</em> dan tulang punggung infrastruktur jaringan bagi Small Medium Enterprise (SME) serta Internet Service Provider (ISP) lokal.
                    </p>
                </div>

                {/* 2. Distingsi RouterOS vs RouterBOARD */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Distingsi RouterOS vs RouterBOARD</h2>
                    <p className="mb-3 text-[15px]">Memahami perbedaan antara sistem operasi dan perangkat keras adalah langkah awal untuk menghindari pemahaman yang dangkal:</p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li>
                            <strong>MikroTik RouterOS:</strong> Ini adalah sistem operasi berbasis Linux yang dirancang khusus untuk fungsi routing. RouterOS dapat diinstal pada komputer standar (PC) atau mesin virtual (VM) untuk mengubahnya menjadi router yang handal.
                        </li>
                    </ul>
                    <MateriImage 
                        src="/images/fondasi/pengenalan-router/routerOS.png" 
                        alt="RouterOS" 
                        caption="RouterOS dapat di-install pada mesin komputer standar mengubahnya menjadi sebuah router handal." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px]">
                        <li>
                            <strong>MikroTik RouterBOARD:</strong> Merupakan unit perangkat keras (hardware) fisik buatan MikroTik. Perangkat ini menyerupai mini PC yang sudah terintegrasi (prosesor, RAM, ROM, flash memori) dengan RouterOS bawaan.
                        </li>
                    </ul>
                    <MateriImage 
                        src="/images/fondasi/pengenalan-router/router-mikrotik.png" 
                        alt="Router Mikrotik" 
                        caption="RouterBOARD: Perangkat keras siap pakai buatan MikroTik." 
                    />
                </div>

                {/* 3. Kapabilitas Sistem */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Kapabilitas Sistem: Fitur dan Lisensi</h2>
                    <p className="mb-3 text-[15px]">RouterOS memiliki fitur yang melebihi router standar, seperti manajemen pengguna (DHCP, Hotspot), routing dinamis (RIP, OSPF, BGP), hingga firewall. Fungsionalitas ini diatur melalui sistem lisensi berbayar yang dikenal dengan istilah <strong>"Level"</strong>:</p>
                    <MateriImage 
                        src="/images/fondasi/pengenalan-router/level-mikrotik.png" 
                        alt="Tabel perbandingan fitur lisensi Level 0, 1, 3, 4, 5, dan 6 pada MikroTik." 
                        caption="Diagram tabel perbedaan batasan fitur antar tiap Level lisensi RouterOS." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px]">
                        <li><strong>Level 0 & 1:</strong> Digunakan untuk tujuan trial atau demo gratis dengan keterbatasan waktu dan fitur.</li>
                        <li><strong>Level 3 - 6:</strong> Digunakan untuk kebutuhan industri. Semakin tinggi level lisensinya (Level 6 adalah yang tertinggi), semakin banyak jumlah tunnel (PPPoE, L2TP, OVPN) dan pengguna aktif hotspot yang didukung.</li>
                        <li><strong>Software ID:</strong> Setiap perangkat memiliki ID unik yang digunakan sebagai identitas saat membeli lisensi.</li>
                    </ul>
                </div>

                {/* 4. Dekonstruksi Arsitektur */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Dekonstruksi Arsitektur dan Penamaan Perangkat</h2>
                    <p className="mb-4 text-[15px]">Agar tidak sekadar menghafal, pahami kode produk yang menunjukkan spesifikasi perangkat. Sebagai contoh, kode <strong>RB951Ui-2HND</strong> dapat dibedah sebagai berikut:</p>
                    <MateriImage 
                        src="/images/fondasi/pengenalan-router/rb95.png" 
                        alt="infografis yang membedah tulisan 'RB951Ui-2HND', ada garis/panah yang menjelaskan per hurufnya dari dokumentasi Wiki MikroTik." 
                        caption="Penamaan kode perangkat keras MikroTik memiliki arti spesifik." 
                    />
                    <div className="overflow-hidden border border-gray-200 rounded-lg mt-4">
                        <table className="min-w-full text-left text-[15px] bg-white">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-4 py-3 font-semibold text-gray-700 w-1/4">Komponen</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Penjelasan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-4 py-3 font-medium">Seri Utama (RB951)</td>
                                    <td className="px-4 py-3 text-gray-600">Angka <strong>9</strong> menunjukkan kelas produk, <strong>5</strong> menunjukkan jumlah port Ethernet, dan <strong>1</strong> menunjukkan jumlah slot wireless.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Fitur Tambahan (Ui)</td>
                                    <td className="px-4 py-3 text-gray-600">Huruf <strong>U</strong> menandakan adanya port USB, sedangkan <strong>i</strong> berarti perangkat mendukung PoE input.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Spesifikasi Radio (2HND)</td>
                                    <td className="px-4 py-3 text-gray-600"><strong>2HND</strong> = frekuensi 2.4Ghz dengan performa tinggi (High Performance), mendukung protokol 802.11n, dual chain wireless card.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Arsitektur Prosesor</td>
                                    <td className="px-4 py-3 text-gray-600">Software dibedakan berdasar prosesor, misal <code>mipsbe</code> untuk seri RB7xx/RB9xx atau <code>tile</code> untuk seri CCR.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 5. Akses Manajemen */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">5. Akses Manajemen dan Konfigurasi Dasar</h2>
                    <p className="mb-3 text-[15px]">Terdapat berbagai metode untuk berinteraksi dengan RouterOS:</p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li><strong>Winbox:</strong> Aplikasi berbasis Windows yang menawarkan GUI paling populer. Menggunakan port standar <code>8291/tcp</code>.</li>
                        <li><strong>Webfig:</strong> Akses melalui web browser (mirip dengan Winbox).</li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <MateriImage 
                        src="/images/fondasi/pengenalan-router/winbox.png" 
                        alt="screenshot perbandingan antara jendela aplikasi Winbox (kiri) versus Webfig dari Browser (kanan)." 
                        caption="Tampilan antarmuka Winbox (aplikasi desktop)" 
                    />
                    <MateriImage 
                        src="/images/fondasi/pengenalan-router/webfig.png" 
                        alt="screenshot perbandingan antara jendela aplikasi Winbox (kiri) versus Webfig dari Browser (kanan)." 
                        caption="Tampilan antarmuka Webfig (browser)" 
                    />
                    </div>
                    
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px]">
                        <li><strong>CLI:</strong> Command Line Interface via Telnet (port <code>23</code>) atau SSH (port <code>22</code>).</li>
                        <li><strong>Default Setting:</strong> Router baru/reset otomatis memiliki IP <strong>192.168.88.1</strong> pada port ether2. Username: <strong>admin</strong> dan password kosong.</li>
                    </ul>
                </div>

                {/* 6. Pemeliharaan Sistem */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">6. Pemeliharaan Sistem: Backup, Restore, dan Reset</h2>
                    <p className="mb-3 text-[15px]">Terdapat dua jenis pencadangan file konfigurasi:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4 text-[15px]">
                        <li>
                            <strong>Binary Backup (.backup):</strong> Format biner yang tidak bisa dibaca teks. Sangat efektif memulihkan perangkat ke tipe tipe yang 100% sama.
                        </li>
                        <li>
                            <strong>Script Export (.rsc):</strong> Disimpan dalam bentuk script teks yang dapat diedit. Bisa dipulihkan sebagian atau pada perangkat dengan tipe berbeda.
                        </li>
                    </ul>
                    <MateriImage 
                        src="/images/fondasi/pengenalan-router/files_backup.png" 
                        alt="tangkapan layar (screenshot) jendela 'Files' di dalam Winbox yang ada tombol tulisan 'Backup' dan 'Restore'-nya." 
                        caption="Proses mencadangkan pengaturan bisa dilakukan melalui menu Files di Winbox." 
                    />
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4">
                        <strong className="text-red-600">Catatan Reset:</strong> Jika terjadi kesalahan fatal atau lupa kata sandi admin, router dapat dikembalikan ke setelan pabrik melalui <strong>Soft Reset</strong> (via menu System) atau <strong>Hard Reset</strong> (menekan tombol fisik RES/RESET selama 5 detik saat booting).
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PengenalanRouterosFondasi;
