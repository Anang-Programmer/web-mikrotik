import MateriImage from "../../components/atoms/MateriImage";

const NtpManajemen = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 5: Manajemen Fitur Mutakhir
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Sinkronisasi Alam Semesta (NTP/SNTP)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Miskonsepsi Baterai CMOS */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Tak Ada Nyala Baterai di Tubuh Router</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Kalau Anda buka cangkang PC motherboard Windows di rumah, Anda melihat nyempil baterai bunder kecil CMOS nyelip yang membakar fungsi menyimpan memori jarum BIOS detak Jam (Clock). 
                        Sedangkan di mayoritas Hardware kelas Middle-low MikroTik Routerboards, <strong>Tidak ada baterai sakral semacam itu!</strong>.
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Setiap kali RouterOS di-Reboot lepas cabut listrik colok, tahunnya pasti langsung terulang mundur ke bawaan settingan asalnya kembali <em>Tahun 1970</em> (System Epoch asli).
                        Jika Anda menggunakan Script Log Auto Delete Hari Jumat, namun jam router Anda kacau bertahun mundurnya gara-gara abis colok mati lampu semalam.. kiamat skrip jalanan Anda akan ngawur ngacau jalan menabrak hancur!
                    </p>
                </div>

                {/* 2. Pelindung SNTP */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Tarik Paksa Waktu Otomatis (SNTP Client)</h2>
                    <MateriImage 
                        src="/images/manajemen/ntp/ntp.png" 
                        alt="Tangkapan layar Jendela SNTP Client Mikrotik di system > SNTP Client, dengan centang enabled dan ip address server id.pool.ntp.org dimasukkan sana sukses." 
                        caption="Meminjam memori detak jantung server pool dunia milik indonesia via menu SNTP Client." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li>
                            Menutupi kecatatan baterai kosongnya, Router dibekali fitur <strong>System &gt; SNTP Client</strong>. 
                        </li>
                        <li>
                            Begitu colokan listrik kembali masuk di-start dan router ngeraba internet sedetik pertama nyala, Router akan mengemis narik data jarum penunjuk sinkron kronometer jam atom dari server Global Dunia seperti `id.pool.ntp.org`.
                        </li>
                        <li>
                            <strong>Awas Kesalahan Fatal Setingan:</strong> Pastikan sinkronisasi Time Zone Autodetect di menu <code>System &gt; Clock</code> Anda mengunci tulisan <em>Asia/Jakarta</em> (WIB), agar ditarikan NTP-nya tidak digeser maju jadi jam Tokyo!
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NtpManajemen;
