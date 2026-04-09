import MateriImage from "../../components/atoms/MateriImage";

const CheckGatewayRouting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 2: Routing (Layer 3)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Check Gateway (Denyut Jantung Ping)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Tragedi Rute Ngambang */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Tragedi Bencana Rute Ngambang Lebay (RTO Diam-diam)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Desain pertarungan kasta kedudukan angka Distance Failover Backup yang barusan Anda hafal di bab selumnya, aslinya menyembunyikan lubang maut kerentanan kelemahan alam.
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        <strong>Kronologinya begini:</strong> Bayangkan kabel colokan Ethernet1 MikroTik Anda terhubung nyala hijau utuh bersinar menyolok masuk ke ke pantat kabel Switch Modem ZTE ISP di tetangga. TAPI kebetulan kabel panjang tiang Telkom yang menjulur di atas jalan aspal jalan tol luar sana putus disambar petir.
                    </p>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-[15px] text-red-900 leading-relaxed">
                        MikroTik Anda sangatlah idiot mentah, ia merasa bangga <em>"Lampu kedipan colokan port Ether1 ku bersinar kok! Berarti lalu lintas ke arah ISP 1 ku utuh aman dan Rute Distance Peringkat 1 ku tetap Aktif mendominasi tahta dong!"</em>. 
                        Hal inilah yang mencegah cadangan kuota modem HP (Peringkat Distance 2) menyingkir naik aktif! MikroTik nge-yel memaksa memuntahkan trafik klien hantu ke arah tiang kosong ghaib tersebut tanpa terselesaikan ke server internet. (Orang-orang sering menyebutnya sindrom paket data jatuh mati ke laut <em>Black Hole / Silent Connection Dump</em>).
                    </div>
                </div>

                {/* 2. Solusi Check Gateway */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Penyelamat Detik Kematian: Check Gateway = PING</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Menghindari musibah mesin router membuang data omong kosong di jalur Ether yang hampa koneksi logis internetnya (karena terkecoh lampu fisik nyala), kita tinggal menyalakan sebuah tombol sensor pengawas internal berwujud opsi fitur pada IP Routes yakni: <strong>Check Gateway = Ping</strong>.
                    </p>
                    <MateriImage 
                        src="/images/routing/check_gateway/gateway.png" 
                        alt="Tangkapan layar properti detil jedela pembuat IP Route Statis. Kursor panah disorot ke menu opsi dropdown list bernama 'check-gateway' dan di situ kita ubah jadi pilihan ping (Satu lagi opsi ARP biasanya dibiarkan saja)." 
                        caption="Parameter detak jantung kecil tapi khasiat kekuatanya mengamankan stabilitas peredaran." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>Cara Kerja (Ping Laten)</strong> Pemasangan saklar deteksi ping latensi ini mewajibkan / memaksa diam dlam sepi mesin MikroTik untuk wajib menghembuskan tembakan roket mini Ping ICMP secara paksa ke tubuh IP gerbang depan (Si <code>Gateway</code> ISP itu) pada hitungan <strong>interval konstan setiap 10 detik repetitif (berulang terus menerus)</strong>.</li>
                        <li><strong>Kondisi Amputasi:</strong> Jika MiktoTik memanggil tembakan dan tidak dibalas balik hembusa echo-ping target Gateway itu selama <strong>dua kali hitungan nyawa meleset berturut-turut (total 20-30 dtk time out)</strong>, barulah mikroTik terbangun tidak peduli sedikpun lampu kelip kabel ethernetnya sedang menari ria ijo kuning. IA LANGSUNG MEN-COPOT/MENGGUGURKAN rute tersebut alias menjatuhkannya sebagai rute terlarang cacat (Mati suri unreachable).</li>
                        <li>Dan keajaiban pun muncul, begitu ranking ke-1 tumbang diskualifikasi di depan matanya seketika otomatis memecut cambukan pada mesin rute Distance ke-2 cadangan terbangun Aktif menggendong trafik klien perusahaan via internet back-up tiada jeda RTO massal berkelanjutan.</li>
                    </ul>
                </div>

                {/* 3. Masalah Keterbatasan Fitur */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Titik Lemah Keakuratan Cek (Limited Hop Span)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Namun ingat, kemampuan tembak sasar radar Ping ICMP si Check Gateway ini <strong>Radius tebaran tarikan penglihatannya cuma sanggup mengintip tembus sedalam "Hop 1" doang!</strong> (Artinya ia jago mendeteksi putus bila itu cuma keblokiran mati sambungan modem kabel ISP ke kotak tiang ONU pinggir jalan aspal luar kampung Anda).
                    </p>
                    <p className="text-[15px] leading-relaxed">
                        Bila ternyata musibah mautnya jauh di bawah aspal benua lautan ikan paus (Serat optik antar samudra ISP patah tengah lintas negara), maka Hop Modem ISP 1 (di gang luar gang anda) pastinya masih hidup menyala membalas "Ping Reply". Jelas MikroTik Check Gateway kita akan kecolongan mangut tertipu tertawan mati di "Silent Black Hole Error". 
                        <br/><br/>
                        (Di tingkatan ekstrim ISP lanjutan untuk mengatasi False Positive ping hop 1 memanipulasi Netwatch / Script Recursive Routing Lanjutan, tapi ini bahasan untuk level pakar tingkat dewa).
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CheckGatewayRouting;
