import SEO from "../../components/atoms/SEO";

const Faq = () => {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <SEO title="FAQ & Diskusi" description="Pertanyaan yang sering ditanyakan seputar penggunaan platform Mikrotik Web PLP." path="/faq" />
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[60vh]">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">FAQ & Diskusi</h1>
                <p className="text-gray-600 mb-6">Pertanyaan yang paling sering ditanyakan (Frequently Asked Questions) seputar penggunaan platform Mikrotik Web PLP.</p>
                <div className="space-y-4">
                    <div className="bg-gray-50 border border-gray-100 p-5 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Apakah materi di web ini gratis seutuhnya?</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">Ya, seluruh modul kurikulum jaringan Mikrotik di sini bebas dan gratis diakses oleh pelajar, asalkan Anda sudah mendaftarkan akun (Register) dan sukses Login.</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-5 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Kenapa menu navigasi materi saya mendadak hilang?</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">Itu tandanya sesi login Anda habis (expired). Silahkan tekan tombol <strong>Sign in</strong> di pojok kanan atas untuk memuat ulang daftar materinya.</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-5 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Bisakah menggunakan Winbox di MacBook / Linux?</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">Aplikasi resmi Winbox berformat `.exe` khusus OS Windows. Namun tenang saja, Anda tetap bisa menjalankannya di MacOS dan Linux lewat bantuan emulator seperti <em>Wine</em>, <em>Crossover</em>, atau <em>PlayOnMac</em>.</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-5 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Kapan ujian bisa saya mulai?</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">Ujian hanya bisa diakses menggunakan 6 digit Kode Ujian rahasia yang di-generate sendiri dan dibagikan oleh Guru. Jika guru Anda belum membagikan kode, Anda belum bisa memulainya.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
