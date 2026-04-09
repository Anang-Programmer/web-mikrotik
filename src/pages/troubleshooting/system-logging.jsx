import MateriImage from "../../components/atoms/MateriImage";

const SystemLoggingTroubleshooting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 6: Troubleshooting & Analisa
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    System Logging & Teks Merah
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Jendela Log */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Jangan Takut Baca Kode Tulisan Merah!</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Router OS punya satu jendela buku raport super jujur bernama menu <strong>Log</strong>. Apa pun maksiat bug mesin yang sedang dialami secara sistem internal, hingga sejarah jam perdetik kapan kabel listrik kamu putus (link down), semua tercatat di sini rapi.
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Berhenti nebak-nebak dukun kalau klient sambat internetnya diskonek mati nyala dewe, Langsung tarik periksa jendelan menu Log.
                    </p>
                    <MateriImage 
                        src="/images/troubleshooting/system_logging/log.png" 
                        alt="Screenshot jendela fitur LOG dari winbox. Penuh tulisan berderet dengan pewarnaan yang beda beda (putih, biru muda terang 'info', lalu ada yang teksnya horor tebel dominan cat warna 'merah error critical')." 
                        caption="Daftar kotak hitam riwayat memori RouterOS (Buku Sakti Log)." 
                    />
                </div>

                {/* 2. Jenis jenis keparahan */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Deteksi Klasifikasi Kengerian Topik (Topics)</h2>
                    <ul className="list-none pl-0 mt-4 space-y-4 text-[15px] leading-relaxed">
                        <li className="flex gap-3 bg-blue-50 p-4 border border-blue-100 rounded-lg">
                            <span className="font-extrabold text-blue-700 min-w-[50px] uppercase">Info</span>
                            <div className="text-gray-700">Warna Putih/Biru pucat. Hanya celotehan santai harian laporan wajar "Eh, ada bocil pengguna masuk login Winbox sukses nih (admin logged in via winbox)" atau "Eh baru aja IP DHCP ini tak sewakan ke MAC Adress HP ini ya".</div>
                        </li>
                        <li className="flex gap-3 bg-yellow-50 p-4 border border-yellow-100 rounded-lg">
                            <span className="font-extrabold text-yellow-700 min-w-[50px] uppercase">Warn</span>
                            <div className="text-gray-700">Warna Kuning. Ini teguran hati-hati bahaya laten. Paling legendaris pesannya: <em>"Ether 1 link up, trus ether 1 link down"</em>. Kalau kedip-kedip ini terus muncul tiap lima menit.. Cepat ganti kabel LANKU LAN lu di atap rumah sebelum lu dicaci maki bocil main DOTA diskonek.</div>
                        </li>
                        <li className="flex gap-3 bg-red-50 p-4 border border-red-200 rounded-lg">
                            <span className="font-extrabold text-red-700 min-w-[50px] uppercase">Error</span>
                            <div className="text-gray-700">Warna Merah Horor. Ini fatal boskuh! Kalau muncul <em>"Login failure for admin from 103.xxx.yyy via ssh"</em>.. Itu fix ada Bocah Hacker Rusia / China maksa ngirim bot tebak bruteforce meretas masuk ke pertahanan IP Publik anda. Segera ganti port lu di menu services yang aku tulis bahasan kemaren!</div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SystemLoggingTroubleshooting;
