import SEO from "../../components/atoms/SEO";

const TentangKami = () => {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <SEO title="Tentang Kami" description="Ketahui lebih lanjut tentang pengembang dan misi di balik platform Mikrotik Web PLP." path="/tentang-kami" />
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[60vh]">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Tentang Kami</h1>
                <div className="prose max-w-none text-gray-800">
                    <p className="text-[15px] leading-relaxed mb-4">
                        Platform <strong>Mikrotik Web PLP</strong> ini didedikasikan untuk membantu siswa-siswi dan masyarakat umum yang sedang mendalami kerasulan teknologi jaringan komputer, khususnya menggunakan produk <strong>MikroTik RouterOS</strong>.
                    </p>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-8 my-8 shadow-sm">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">Dikembangkan Secara Mandiri Oleh:</h2>
                        <h3 className="text-4xl font-extrabold text-blue-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 mb-4 tracking-tight">
                            Jaka Perdana
                        </h3>
                        <p className="text-blue-800/80 leading-relaxed text-[15px]">
                            Proyek web edukasi ini dirancang dan dikembangkan penuh secara dedikatif. Tujuan utamanya adalah untuk membumikan materi router keras berbahasa inggris dan menjelmakannya menjadi bacaan renyah, seru dan berbobot dalam kiasan bahasa Indonesia. 
                            <br/><br/>
                            Harapannya, ilmu jaringan yang disajikan di sini mampu menjadi pondasi pijakan kuat bagi para calon Engineer dan Network Administrator berbakat tanah air di masa depan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TentangKami;
