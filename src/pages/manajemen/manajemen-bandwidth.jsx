import MateriImage from "../../components/atoms/MateriImage";

const ManajemenBandwidthManajemen = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 5: Manajemen Fitur Mutakhir
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Limitasi Penguasa: Manajemen Bandwidth
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Kiamat Torrent */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Hakikat Pembagian Roti Quotas (QoS)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Runtuhnya kestabilan Warnet sering dipicu oleh 1 manusia biadab yang menggunakan IDM / mendownload torrent raksasa hingga menyedot 99% jatah lalu lintas pipa data bulanan (Bandwidth Hogging). Pemilik Mikrotik wajib menguasai ilmu <strong>Quality of Service (QoS) - Queues</strong>.
                    </p>
                    <MateriImage 
                        src="/images/manajemen/manajemen_bandwidth/bandwidth.png" 
                        alt="Tangkapan layar Jendela 'Simple Queues' MikroTik yang warnanya berjejer ada yang ijo kuning merah nyala terang pas lagi full load di-test speed." 
                        caption="Traffic Light ala MikroTik (Hijau: Sepi, Kuning: 75% Sesak, Merah: Modar Kecekek Limit Penuh)." 
                    />
                </div>

                {/* 2. Simple Queue */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Jurus Pukul Rata: Simple Queue</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Seperti namanya, <em>Simple</em> berarti instan, gampang, buat orang males yang anti ribet mbulet belajar Mangle. Setting ini mencekik berdasar Identitas KTP <strong>Target IP</strong> pengirim secara kasar.
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>Max Limit (MIR):</strong> Ini adalah batasan mentok atap suci plafon absolut plafon yang gak bakalan bisa ditembus. Misalnya dikasih `Max Limit 2M / 2M` (Limit max 2 Megabit aja), mau nangis berdarah pun klien lu nge-scroll IG gabakal dapet lebih dari 2 Mega kalau dipatok.</li>
                        <li><strong>Prioritas Urutan Paksaan:</strong> Simple Queue dibaca router secara mengintip berdasar Urutan baris nomor indeks (Dari nomor <code>0</code> teratas sampe mentok bawah). Kalau klien IP lu ada di list baris no #55 bawah, trus di baris No #1 paling atas ada limitasi ngawur nabrak memblokir keseluruhan subnetnya IP mu, lu bakal di-cekik duluan oleh baris si No 1 di atas tadi! Hati-hati jangan salah urutan lempar atas bawah nge-drag pake Mouse Windows!</li>
                    </ul>
                </div>

                {/* 3. Queue Tree */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Jurus Mistik Canggih Pecah Belah: Queue Tree</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Buat operator ISP yang dewa beneran, Simple Queue itu ditelantarkan haram haram dipakai, mereka beralih ke <strong>Queue Tree Mangle Parent</strong>. Ini skenario pohon keluarga hierarkial ajaib di mana anak bawang bisa mengais sisa kuota bandwith milik kakaknya secara gotong royong!
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4">
                        <strong className="block mb-2 text-gray-800">Kehebatan Fitur BURST dan Limit at (CIR):</strong>
                        Anda bisa menyetel trik bisnis "Jualan Bohong" jeli dengan fitur <code>Burst</code>. Saat si klien pertamakali ngebuka video Youtube di 5 detik pertama (Hitungan Burst Time).. tiba-tiba bandwidth dia jebol roket speed `10 Mbps` sekilas sejenak (biar loading awalnya ngacir dan tak merana!). Tapi detik ke-enam pelan-pelan kecekik nyusut jatoh ke batas sadis `Limit-at / Max limit 1 Mbps` aslinya dia. User tak sadar, perusahaannya ngirit kuota banyak. Cadas!
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManajemenBandwidthManajemen;
