import MateriImage from "../../components/atoms/MateriImage";

const MonitoringTrafikTroubleshooting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 6: Troubleshooting & Analisa
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Senter Ajaib Malam: Torch & Graphing
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Senter Torch */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Torch Si Pembedah Gelap Arus Listrik Internet</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Warnet tiba tiba menjerit koneksi ngelag. Kalo dicek di Simple Queue.. waduh total tarikan <code>Tx/Rx Speed limit</code> nya mentok jarum merah maksimal sampe 100 Mbps tembus atap! Lalu pertanyaanya: Siapakah oknum biang kerok pelakunya di kerumanan 20 layar monitor pc warnet gelap itu?
                    </p>
                    <MateriImage 
                        src="/images/troubleshooting/monitoring_trafik/torch.png" 
                        alt="Screenshot jendela window klik kanan Tools > Torch ajaib. Barisan tabel yang naik turun liar nyenter nama IP source, port Dst port, dan gede bandwitdh Tx/Rx speed barisnya secara live per detik." 
                        caption="Torch: Melucuti topeng pelintas port per detik secara live tanpa di-filter." 
                    />
                    <p className="text-[15px] mt-4 leading-relaxed">
                        Anda tinggal membuka klik kanan pada ether 1 -&gt; pilih menu <strong>Tool Torch</strong> lalu pecent tombol 'Start'. <br/>
                        Seketika layar matrix tabel data akan bergerak liar mengurutkan secara live data anak bangsa yang menyedot koneksi. Lu tinggal urutkan sortir berdasarkan pijatan tajuk kolom panah `Rx Rate`, dan temukan nama no IP anak biadab sialan yang ditarikannya sampai 80 Mbps melolong! Oh ternyata HP bocil 192.168.1.33 lagi download torrent! Gunting tendang IP nya dari queue limit statis sekarang juga bos!
                    </p>
                </div>

                {/* 2. Graphing */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Jasa Histori Graphing Coretan Diagram Chart Web</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Torch itu senter tajam live yang hanya lu tonton detik kejadian saat di TKP doang.. Gak bisa nengok masa lalu sejarah grafik 3 hari yang lewat kan? 
                        Untungnya MikroTik nyimpen fitur MRTG klasik bernama <strong>Tools &gt; Graphing</strong>.
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li>Fungsinya nyatet pergerakan urat nadi sedotan bandwitdh dari sebuah port spesifik atau dari RAM Usage MikroTik secantik detak nyawamu.</li>
                        <li>Trus gambar statistik coretan jarum itu bakal dia sebar pamerkan dan simpan otomatis di halaman web webpage internal dia (tinggal lu ketik aja alamat IP `http://192.168.x.x/graphs` di browsermu). Nanti kebuka deh gambar lukisan gunung hijau ijo biru grafik sedotan kecepatan di jam pagi-sore-malanm harian ampe mingguannya!. Buat laporan HRD Bos / Owner keren pisan iki.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MonitoringTrafikTroubleshooting;
