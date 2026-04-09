import MateriImage from "../../components/atoms/MateriImage";

const ForwardPacketFlow = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 4: Packet Flow
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Chain Forward (Sang Transit)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Pengenalan Forward */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Apa Lorong Jalur Transit (Forward)?</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Lorong <strong>Forward</strong> merupakan lorong paling gemuk sibuk dan paling capek lelah bekerja dalam mesin lalu lintas jaringan (Network). Rute ini khusus didedikasikan bagi paket-paket pelintas yang sama sekali <strong>tidak dilahirkan</strong> oleh router, dan <strong>tidak ditujukan</strong> buat menemui router.
                    </p>
                    <MateriImage 
                        src="/images/packet_flow/forward/chain_forward.png" 
                        alt="Ilustrasi paket data panah melesak cepat melewati terowongan di dalam badan punggung router MikroTik dan tembus keluar ke PC internet." 
                        caption="Chain Forward: Hanya menumpang lewat jembatan badan router, masuk lalu bablas keluar." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li>Paket di-lintasankan dan akan dicegat untuk menjalani razia blokir situs/filter bandwidth.</li>
                        <li>Contoh klasik: Anak PC Lokal ngetik instagram di laptopnya. Paket masuk colokan Ether2 dalam router, merayap lewat lorong transit jembatan (Forward) tanpa bertamu ke ruang pak bos router, lalu wush nyangkut kedorong keluar dipompa via Ether1 ke modem telkom.</li>
                    </ul>
                </div>

                {/* 2. Esensi Keamanan Firewall Filter */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Pos Keamanan Tembok (Firewall Filter Bekerja)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Di bab selanjutnya, kita akan banyak menuliskan baris kode Filter IP untuk melakukan blokir anak nakal yang main Netflix, membatasi bocil ngedownload game warnet, dsb.
                    </p>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-[15px] mt-4">
                        <strong className="text-yellow-800 mb-1 block">Logika Berfikir Admin Tembok (Firewall):</strong> 
                        Jika bos bertanya: <em>"Tolong blok anak warnet di PC 1 biar tak bisa nge-ping Youtube dong!"</em>. 
                        Pastikan Anda menyeting aturan Firewall di Lorong <strong>Forward</strong>! 
                        <br/><br/>
                        Jika Anda salah setting menempatkan pemblokiran itu di rantai tabel Input, Youtube tersebut tetap jebol los jalan terakses karena larangan Input itu untuk pengunjung yang mau nabrak mukanya sang Router, bukan nabrak numpang jembatan lalu lintas untuk turun ke arah pintu tol luar negeri!
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ForwardPacketFlow;
