import MateriImage from "../../components/atoms/MateriImage";

const ToolDiagnosaTroubleshooting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 6: Troubleshooting & Analisa
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Tools Diagnosa Senjata Radar
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Traceroute */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Melacak Jejak Putus via Traceroute</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Ping cuma ngasih tau "Oh lawannya hidup atau RTO". Kalau jalan aspal rute internet ke Singapura ada 15 simpang lampu merah (Hop ISP / Negara), dan ternyata Ping Anda gagal.. Lantas gimana cara Anda tau putusnya itu pas di simpang lampu merah ke 5 (tiang ISP Biznet Anda putus) vs putusnya ada di simpang 15 di server singapuranya yang lagi gangguan mati lampu gedung?
                    </p>
                    <MateriImage 
                        src="/images/troubleshooting/tool_diagnosa/traceroute.png" 
                        alt="Tangkapan layar Tools > Traceroute ke 8.8.8.8. Menampilkan daftar angka berjejer ke bawah HOP 1 (192.168.1.1), HOP 2 (36.45.66.1) dst." 
                        caption="Traceroute melacak setiap hentakan jantung server yang dilewati." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>Traceroute:</strong> Menggunakan teknik Time To Live (TTL) yang sengaja dirusak berkala, tool ini memaksa setiap Pos ISP Polisi yang dilewati paket kalian untuk ngirim balasan pelaporan identitas IP mereka ke muka kalian.</li>
                        <li>Kalau hasil layarnya mentok RTO pada daftar IP urutan Baris Nomor 2... selamat, kalian maki-maki lah CS langganan provider antum karena masalah nyata berada di gardu batas tiang lampu merah pertama ISP.</li>
                    </ul>
                </div>

                {/* 2. Profiler CPU */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Mikrotik Ngelag? Tanya Sang Dokter Profiler</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Pernah mengalami Winbox mendadak sering bengong diskonek sendiri, kecepatan speed test parah ancur macet, lalu kalian lihat meteran tulisan CPU pojok kanan atas mentok tulisan merah menyala 100% Core limit!
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4 font-mono">
                        <span className="text-gray-500 block mb-2 text-sm font-sans italic">// Perintah pamungkas mengecheck biang kerok parasit CPU Usage</span>
                        <div className="flex bg-slate-900 border border-slate-700 text-slate-300 p-3 rounded overflow-x-auto text-[14px]">
                            [admin@MikroTik] {'>'}  <span className="text-blue-400">tool</span> profile
                        </div>
                    </div>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li>Fungsi alat <code>Tools &gt; Profile</code> adalah rontgen sinar-X. Ia akan membongkar seluruh tabel daftar tugas mana yang lagi kerja rodi menguras nafas jantung router!</li>
                        <li>Biasanya tersangka terbesarnya akan muncul di urutan atas yakni tulisan <em>firewall</em> (gara2 ada rule salah L7 regex memancing overload), atau proses networking biasa karena bandwitdh pipe L2  emang kelewat jumbonya ngelebihin spek router cerek lu yang seharga 300rb itu.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ToolDiagnosaTroubleshooting;
