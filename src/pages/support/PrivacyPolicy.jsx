import SEO from "../../components/atoms/SEO";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <SEO title="Kebijakan Privasi" description="Bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda." path="/privacy-policy" />
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[60vh]">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Kebijakan Privasi (Privacy Policy)</h1>
                <div className="prose max-w-none text-gray-800 space-y-6">
                    <p className="text-[15px] leading-relaxed">
                        Perlindungan data Anda adalah prioritas kami. Di situs edukasi <strong>Mikrotik Web PLP</strong>, kami hanya menginformasikan dan mengumpulkan informasi seminimal mungkin semata-mata untuk keperluan operasional fungsionalitas riwayat simulasi ujian kelas saja.
                    </p>
                    
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">1. Data yang Dikumpulkan</h2>
                        <ul className="list-disc pl-5 text-[15px] space-y-2">
                            <li><strong>Informasi Akun:</strong> Ketika Anda mendaftar, kami mengumpulkan dan menyimpan nama panggilan umum, email, dan mendefinisikan peran/role (Siswa/Guru).</li>
                            <li><strong>Data Aktivitas Ujian:</strong> Seluruh histori pilihan jawaban simulasi tes opsi, nilai skor hasil (points submission), serta jejak waktu start-submit Anda akan terekam teguh ke database kami guna tujuan transparansi laporan di panel dasbor buku nilai Guru.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">2. Penggunaan Data</h2>
                        <p className="text-[15px] leading-relaxed">
                            Jejak lalu lintas data Anda digunakan mutlak secara lokal hanya untuk kepengurusan di dalam platform akademik daring ini. Kami pengembang sistem sama sekali <strong>tidak</strong> membocorkan, men-sniffing diam-diam, atau menjual jejak kebiasaan navigasi belajar Anda kepada pihak ketiga rahasia.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">3. Keamanan Login</h2>
                        <p className="text-[15px] leading-relaxed">
                            Sandi masuk pengguna anda dibungkus proteksi hash kriptografi satu arah (hashing). Engineer kami bahkan tidak dapat membongkar/membaca "plain text" murni dari kata sandi asli Anda dalam pangkalan database.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
