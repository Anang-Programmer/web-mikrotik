import MateriImage from "../../components/atoms/MateriImage";

const Layer2VsLayer3Fondasi = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 1: Fondasi
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Konsep Layer 2 vs Layer 3
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">
                <p className="text-[15px] mb-6">
                    Materi ini adalah materi esensial (kunci) yang akan membantu Anda tidak buta arsitektur di masa depan. Anda wajib memahami garis demarkasi kapan router bekerja mengolah sinyal tembaga mentah, dan kapan ia mengolah sinyal logika.
                </p>

                {/* 1. Model OSI Sederhana */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Kerangka OSI Model (Teori Mutlak)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        International Organization for Standardization menciptakan standar komunikasi berlapis (OSI Model 7 Layer). Fokus utama administrator jaringan harian sering berkutat di dua lantai krusial: <strong>Layer 2 (Data Link)</strong> dan <strong>Layer 3 (Network)</strong>.
                    </p>
                    <MateriImage 
                        src="/images/fondasi/layer2_layer3/layer_osi.png" 
                        alt="Diagram gambar 7 lapis OSI Model dengan highlight difokuskan (warna terang) pada lapisan ke-2 Data Link dan ke-3 Network." 
                        caption="Diagram OSI Model standar referensi komunikasi di seluruh dunia." 
                    />
                </div>

                {/* 2. Layer 2: Domain MAC Address */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Karakteristik Layer 2 (Data Link)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Layer 2 berbicara mengenai <em>fisik keras yang nyata</em>. Jembatan komunikasi komunikasinya murni mengandalkan <strong>MAC Address</strong> (alamat pabrikan chip tembaga).
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li><strong>Identitas:</strong> Menggunakan pakem MAC Address yang tak pernah berubah seumur hidup. Misalnya tulisan `D4:CA:6D...` di label fisik belakang casing MikroTik.</li>
                        <li><strong>Kemampuan Lintas:</strong> Komunikasi via Layer 2 ini mentok di pagar tembok lokal rumah/gedung Anda. Tidak bisa menyebrang jalan tol / laut lautan ke negara lain mencari server Facebook. (Inilah kenapa akses internet gak bisa pakai MAC).</li>
                        <li><strong>Perangkat Utama:</strong> Switch (hanya menyambung kabel tanpa berpikir) atau mode Bridge.</li>
                        <li><strong>Fungsi Winbox:</strong> Winbox bisa akses paksa Mikrotik walau tanpa di-setting berbekal mode MAC-Telnet Protocol yang berbasis Layer 2 ini (Selama laptop Anda tercolok 1 gedung).</li>
                    </ul>
                </div>

                {/* 3. Layer 3: Domain IP Address */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Karakteristik Layer 3 (Network)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Layer 3 berbicara mengenai <em>logika pikir dan jalur peta</em>. Jembatan komunikasinya menuntut adanya tatanan <strong>IP Address</strong>.
                    </p>
                    <MateriImage 
                        src="/images/fondasi/layer2_layer3/network.png" 
                        alt="Ilustrasi perangkat Router mengarahkan (merutekan) banyak tanda panah jalur paket antar gedung pulau ke pulau layaknya Google Maps." 
                        caption="Router bertugas mencarikan jalur jalan aspal tercepat agar paket sampai ke negara tujuan." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px]">
                        <li><strong>Identitas:</strong> Alamatnya adalah IP Address (Misal `8.8.8.8`). Sifatnya cair, sementara, dipinjamkan, dan dibeli sewakan (menggunakan layanan DHCP).</li>
                        <li><strong>Kemampuan Lintas:</strong> Inilah kasta tertinggi internet. Mampu menyebarang ke luar negeri bertamu ke sistem komputer milik Google/Tiktok, mencari jalan aspal tercepat, atau menghindari kabel putus di bawah laut (Routing dinamis).</li>
                        <li><strong>Perangkat Utama:</strong> Router MikroTik (Menimbang dan berpikir rute mana).</li>
                    </ul>
                </div>

                {/* 4. Mekanisme ARP Jembatan L2 ke L3 */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Kenalan Singkat: ARP (Address Resolution Protocol)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Kalau Switch (bodoh) cuma ngerti Layer 2, dan Router (pintar) ngurusin Layer 3. Terus gimana caranya kalau mereka berdua disuruh bersalaman mentransmisikan data file barengan?
                        <br/><br/>Jawabannya di jembatani oleh <strong>ARP</strong>.
                    </p>
                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4">
                        <strong className="block text-gray-800 mb-2">Contoh Skenario ARP Bekerja:</strong>
                        Laptop Anda tau IP teman Anda itu `192.168.1.5` (Layer 3). Tapi laptop Anda belum tau kode fisik perangkatnya tembaga (MAC Address teman Anda / Layer 2)! 
                        <br/><br/>
                        Maka protokol sistem ARP akan teriak ke seluruh kabel gedung pakai Toa (disebut Proses Who Has Request Target). ARP nanya begini: "Hei Semua orang! Tolong tunjukkan identitas fisik muka MAC Address dari bocah yang punya IP .5 ini dong!". Teman Anda akan balas (ARP Reply), dan barulah transmisi data terkirim.
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Layer2VsLayer3Fondasi;
