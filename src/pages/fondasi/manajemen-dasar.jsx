import MateriImage from "../../components/atoms/MateriImage";

const ManajemenDasarFondasi = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 1: Fondasi
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Manajemen Dasar OS
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">
                <p className="text-[15px] mb-6">
                    Mengenal manajemen dasar sistem operasi RouterOS merupakan kewajiban bagi Administrator Jaringan. Di bab ini, kita akan membahas cara merawat router dengan memperbarui rutin sistem (upgrade), mengamankan device name, hingga mengatur akses tiap pengguna.
                </p>

                {/* 1. Packages / Upgrade OS */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Arsitektur "Packages" dan Upgrade OS</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Sistem OS MikroTik beroperasi seperti "lego" yang bisa dilepas-pasang di dalam sebuah fitur menu bernama <strong>Packages</strong>. Fitur utama (seperti routing, ppp, dhcp) umumnya dibundel dalam satu induk besar bernama paket <code>routeros</code> atau <code>system</code>.
                    </p>
                    <MateriImage 
                        src="/images/fondasi/manajemen_dasar/version.png" 
                        alt="Screenshot daftar list 'Package List' pada MikroTik yang menunjukkan versi firmware." 
                        caption="Daftar Packages yang mendasari berbagai fungsi di router MikroTik." 
                    />
                    <ul className="list-disc pl-5 space-y-2 text-[15px] mt-4">
                        <li>
                            <strong>Arsitektur Wajib Sama:</strong> Saat Anda mendownload firmware NPK (ekstensi file update mikroTik `.npk`), pastikan arsitektur prosesor di web download (misal: `mipsbe`) sama dengan tipe router Anda.
                        </li>
                        <li>
                            <strong>Cara Upgrade (Manual):</strong> Anda tinggal seret-tahan (drag & drop) file ekstensi NPK tersebut pada jendela `Files` di winbox, lalu nyalakan ulang (Reboot) routernya. Router akan otomatis me-replace sistem lamanya saat booting.
                        </li>
                    </ul>
                </div>

                {/* 2. Netinstall */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Netinstall (Format Pabrik / Flash Ulang)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Ada kondisi fatal di mana bahkan fitur Hardware Reset gagal dilakukan, router gagal booting (hanya bunyi pinging), atau kita butuh cara menghapus password yang tidak bisa ditembus. Alat penyelamatnya adalah <strong>Netinstall</strong>.
                    </p>
                    <MateriImage 
                        src="/images/fondasi/manajemen_dasar/netinstall.png" 
                        alt="Screenshot aplikasi Netinstall MikroTik berjalan, mendeteksi port komputer." 
                        caption="Aplikasi Netinstall menghidupkan RouterOS lewat media BOOTP (Kabel LAN)." 
                    />
                    <p className="text-[15px] mb-3 leading-relaxed mt-4">
                        Aplikasi berbasis Windows ini ibarat sebuah flashdisk Windows Installer baru untuk instal ulang total PC Anda yang kena virus, tapi perantaranya murni fisik memakai seutas Kabel UTP yang menancap dari Komputer ke Ether1 Router. Fitur ini sangat powerful (sengaja meng-hilangkan MAC adress dan memintas pertahanan OS, makanya Windows Firewall harus dimatikan saat menjalankannya).
                    </p>
                </div>

                {/* 3. Identity */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Mengganti Nama Perangkat (Identity)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Bayangkan jika ada 5 router di rack server Anda, dengan IP berdekatan, lalu di Winbox nama semuanya tertulis `MikroTik`. Tentan rentan membuat kita salah klik hingga me-reset mesin.
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-2 mb-4">
                        <strong>Perintah Cepat CLI:</strong> <code className="bg-gray-200 px-2 py-0.5 rounded text-gray-800">system identity set name="Router-GedungA"</code>
                    </div>
                </div>

                {/* 4. User Management */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Membagi Hak Akses Pengguna (User Management)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Pada perusahaan aslinya, sebuah core router tidak akan login-nya dioper masuk dengan username <strong>admin</strong> kepada anak magang secara sembarangan. Kita membentuk Group Access.
                    </p>
                    <MateriImage 
                        src="/images/fondasi/manajemen_dasar/akses.png" 
                        alt="Tangkapan layar User List MikroTik dan tab Groups yang berisi full, read, write." 
                        caption="Memasukkan spesifik user ke grup level hak yang sesuai." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px]">
                        <li><strong>Full:</strong> Punya akses super admin yang setara dewa, bahkan bisa sampai me-reset paksa hingga buat user baru.</li>
                        <li><strong>Write:</strong> Boleh mengutak atik/menambah route, mengedit nama interface, dan setting DHCP, tapi Tidak bisa baca password user lain (atau nambah user grup akun).</li>
                        <li><strong>Read:</strong> Level satpam pemantau (Monitoring). Hanya bisa melihat trafik ping, membaca tulisan, tidak bisa klik Save/Apply di Winbox sedikitpun. Cocok untuk staff tiket pengaduan atau anak magang tahap awal observasi.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ManajemenDasarFondasi;
