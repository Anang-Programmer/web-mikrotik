import MateriImage from "../../components/atoms/MateriImage";

const MetodeAksesFondasi = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 1: Fondasi
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Metode Akses Perangkat
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">
                <p className="text-[15px] mb-6">
                    Salah satu keunggulan MikroTik adalah kemudahan dan fleksibilitas dalam cara kita mengakses dan melakukan konfigurasi. MikroTik menyediakan banyak opsi antarmuka (interface), mulai dari menggunakan antarmuka grafis (GUI) hingga baris perintah (CLI).
                </p>

                {/* 1. Winbox */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Winbox (Aplikasi GUI)</h2>
                    <MateriImage 
                        src="/images/fondasi/metode_akses/winbox.png" 
                        alt="Tangkapan layar jendela login aplikasi Winbox." 
                        caption="Winbox: Cara paling populer untuk mengoperasikan MikroTik." 
                    />
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Winbox adalah utility ringan kecil (standalone) buatan MikroTik khusus untuk sistem operasi Windows. Aplikasi ini adalah standar utama administrator jaringan di lapangan karena eksekusinya sangat cepat dan tampilannya yang user-friendly.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li>
                            <strong>Akses Layer 3 (IP):</strong> Kita dapat masuk dengan cara mengetik alamat IP dari port router (Secara default menggunakan port `8291`). Tipe akses ini mewajibkan PC kita berada dalam rute IP yang sama.
                        </li>
                        <li>
                            <strong>Akses Layer 2 (MAC Address):</strong> Ini adalah kehebatan Winbox. Meskipun IP router belum disetting atau berantakan, kita tetap bisa mengakses dan mengontrol router menggunakan protokol MAC-Telnet, asalkan PC dan router terhubung di switch fisik yang sama (tidak dihalangi route/NAT).
                        </li>
                    </ul>
                </div>

                {/* 2. WebFig */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. WebFig (Akses via Web Browser)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        WebFig adalah opsi jika Anda tidak menggunakan Windows (misalnya macOS atau Linux) dan tidak ingin menginstal emulator seperti Wine untuk menjalankan Winbox.
                    </p>
                    <MateriImage 
                        src="/images/fondasi/metode_akses/webfig.png" 
                        alt="Gambar halaman WebFig MikroTik diakses dari Google Chrome." 
                        caption="WebFig memiliki struktur tombol dan menu yang nyaris identik dengan Winbox." 
                    />
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li>Cukup ketik alamat IP router Anda (contoh `192.168.88.1`) di bilah alamat browser apa pun.</li>
                        <li>Menggunakan protokol HTTP (port `80`) atau HTTPS (port `443`).</li>
                        <li>Sama fungsionalnya dengan Winbox, namun tidak mendukung koneksi via MAC Address (hanya jaringan murni Layer 3 IP).</li>
                    </ul>
                </div>

                {/* 3. CLI (Command Line Interface) */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Akses Teks (CLI)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Para advanced user atau skrip otomatis umumnya lebih menyukai CLI (Command Line Interface). Akses CLI juga sangat berguna digunakan jika sambungan ke router terasa sangat lambat (bad bandwidth).
                    </p>
                    <MateriImage 
                        src="/images/fondasi/metode_akses/cli.png" 
                        alt="Screenshot tampilan layar hitam (terminal) PuTTY mengakses MikroTik via SSH." 
                        caption="Terminal CLI, ringan dan langsung tereksekusi per baris perintah." 
                    />
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li><strong>SSH:</strong> Akses terminal yang aman dengan enkripsi komando. Jalan di TCP port `22`. Disarankan dipakai kalau Anda meremote router lewat internet.</li>
                        <li><strong>Telnet:</strong> Akses terminal jadul. Jalan di TCP port `23`. Tidak dienkripsi (teks telanjang disebar di kabel), tidak disarankan dinyalakan kecuali internal lab tertutup.</li>
                        <li><strong>Fitur Tab:</strong> CLI mikrotik ramah pengguna. Anda tinggal tekan <code>Tab</code> jika lupa kelanjutan huruf perintahnya. Contoh: Ketik <code>ip add</code> lalu tab, maka tulisan akan otomatis jadi <code>ip address</code>.</li>
                    </ul>
                </div>

                {/* 4. Akses Darurat Khusus */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Kabel Konsol Khusus (Serial Console)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Beberapa router spesifikasi menengah-atas (seperi RB3011, seri CCR) dilengkapi port `Serial/Console` fisik.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li>Fungsi tertingginya digunakan jika sistem operasi router crash tak bisa dimasuki IP/MAC, namun listrik hidup.</li>
                        <li>Digunakan dengan menyambungkan kabel `RS232-to-USB` fisik langsung antara laptop ke alatnya dan menggunakan bantuan terminal seperti HyperTerminal atau PuTTY.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MetodeAksesFondasi;
