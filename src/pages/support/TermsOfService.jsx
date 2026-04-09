import SEO from "../../components/atoms/SEO";

const TermsOfService = () => {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <SEO title="Syarat dan Ketentuan" description="Ketentuan penggunaan layanan platform Mikrotik Web PLP." path="/terms-of-service" />
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[60vh]">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Syarat & Ketentuan (Terms of Service)</h1>
                <div className="prose max-w-none text-gray-800 space-y-6">
                    <p className="text-[15px] leading-relaxed">
                        Dengan membuka, mengakses, dan menelusuri rute materi situs web edukasi interaktif <strong>Mikrotik Web PLP</strong> ini, Anda bersedia mengikat pada serangkaian syarat dan ketentuan layanan yang ditulis di bawah.
                    </p>
                    
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">1. Penggunaan Etis Rujukan Materi</h2>
                        <p className="text-[15px] leading-relaxed">
                            Tujuan murni dari seluruh kurikulum jaringan yang dibahas pada platform ini (Routing, Firewall, eksploitasi layer 4) adalah edukasi pertahanan yang positif (White-hat). Segala bentuk tindak penyalahgunaan liar serangan brutal (malicious hacking) dengan mencatut rujukan dari halaman website kami adalah tanggung jawab mutlak perorangan secara hukum, dan di luar tanggung jawab Jaka Perdana.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">2. Integritas Kode Simulasi Ujian</h2>
                        <p className="text-[15px] leading-relaxed">
                            Pemberian hak masuk panel "Kode Ruangan Ujian" sepenuhnya atas keizinan penuh Server panel Sang Guru. Dilarang keras berusaha memanipulasi *API endpoint* untuk meretas nilai tes (skips evaluasi jawaban). Segala deteksi kecurangan intervensi akan membuat server admin otomatis melumpuhkan <em>(Suspend / Banned)</em> akses email sang pelaku itu tanpa peringatan belas kasihan.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">3. Waktu Senggang Maintenance Jaringan</h2>
                        <p className="text-[15px] leading-relaxed">
                            Kami berhak penuh sebagai superadmin sewaktu-waktu menutup sementara gerbang traffic website, melakukan <em>Downtime</em> demi upgrade database materi, atau mengubah tata layout antarmuka (UX) di sistem tanpa membutuhkan kejelasan notifikasi wajib terhadap pendaftar pelajar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
