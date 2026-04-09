import MateriImage from "../../components/atoms/MateriImage";

const KonsepDasarRouting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 2: Routing (Layer 3)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Konsep Dasar Peta Routing
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">
                <p className="text-[15px] mb-6 leading-relaxed">
                    Materi di bab sebelumnya lebih banyak membahas tentang area seputar Switch dan jembatan Layer 2 (seperti MAC Address, Bridge, Switch port). Sekarang, kita melompat ke <strong>Layer 3</strong>, dimensi di mana sebuah perangkat wajib "berpikir dan menganalisa" ke wilayah mana paket data harus diberangkatkan jika tujuannya berada jauh di luar gedung. Proses kalkulasi jalur ini disebut <em>Routing</em>.
                </p>

                {/* 1. Definisi Routing */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Definisi Routing dan Analogi</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Bayangkan Komputer A (IP <code>192.168.1.10</code>) mencoba menghubungi Komputer B (IP <code>10.1.0.0</code>). Secara hitungan matematis <em>subnet</em>, kedua IP ini sangat berbeda dan berada di dua "komplek jaringan" yang terpisah jauh secara logis.
                    </p>
                    <MateriImage 
                        src="/images/routing/konsep_dasar/routing.png" 
                        alt="Ilustrasi dua kelompok rumah (Satu biru IP awalan 192, satu merah awalan 10). Ada petugas pengatur jalan di tengah pos persimpangannya." 
                        caption="Proses menyeberangkan paket data antar belahan network yang berbeda." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] leading-relaxed">
                        <li>
                            Komputer Anda tidak dirancang untuk bisa memikirkan rute pengiriman ke perumahan sebelah. Ia hanya paham mengirim paketnya mentah-mentah ke pintu gerbang desa (<strong>Gateway</strong> / port router).
                        </li>
                        <li>
                            Selanjutnya, tugas sang Router-lah yang mencegat kargo paket tersebut, membaca alamat IP tujuannya (<i>"Oh, ini buat desa sebelah 10.0.0.x"</i>), dan menyesuaikan dengan memori peta navigasinya (Routing Table).
                        </li>
                    </ul>
                </div>

                {/* 2. Mengapa Butuh Router */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Mengapa Jaringan Sangat Bergantung pada Router?</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Kenapa tidak menghubungkan seluruh komputer dunia pakai satu jenis kabel saja, menggunakan <em>Switch</em> raksasa? Memang bisa, tetapi jaringan akan segera hancur lebur karena berteriaknya paket <strong>Broadcast</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px] leading-relaxed">
                        <li>Komputer secara rutin mengirim sinyal buta untuk mencari siapa teman sekitarnya (Broadcast). Di Switch, suara ini dilantangkan ke seluruh gedung. Jika ribuan komputer berteriak, terjadilah <em>Broadcast Storm</em> dan jaringan akan lumpuh total.</li>
                        <li>Router memiliki kehebatan bawaan pabrik: <strong>Selalu memblokir/memutuskan jembatan sinyal Broadcast</strong>. Router hanya meneruskan sinyal yang alamat destinasinya spesifik jelas tercatat di peta logikanya.</li>
                    </ul>
                </div>

                {/* 3. Syarat Wajib Kejadiaanya Routing */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Syarat Mutlak Berhasilnya Routing</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Jangan marah pada Mikrotik jika ping internet Anda terus-terusan <em>Request Timed Out (RTO)</em>. Sebuah skenario routing cuma akan berjalan apabila memenuhi dua persayaratan absolut berikut:
                    </p>
                    <MateriImage 
                        src="/images/routing/konsep_dasar/route.png" 
                        alt="Grafis infografik yang membenturkan 2 konsep: 'Tujuan (Destination)' dan 'Pintu Keluar (Gateway)'. Kalau salah satu bilang No, koneksi gagal." 
                        caption="Dua pilar syarat berhasilnya forwarding table Layer 3." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] leading-relaxed">
                        <li>
                            <strong>Destination Address (dst-address):</strong> Router HARUS tahu pasti area yang ingin dituju. Router hanya tau tujuan dari apa yang tertulis di otaknya (Tabel Routing). Jika tujuan tak dikenal, paket akan masuk ke tempat sampah (Drop).
                        </li>
                        <li>
                            <strong>Gateway:</strong> Kalau router tahu tujuannya, dia tetap tidak akan mengantar sendiri secara fisik. Ia akan melempar paket ke <em>kurir/loncatan selanjutnya</em> (disebut Next-Hop IP atau Gateway).
                        </li>
                    </ul>
                </div>

                {/* 4. Tipe Protokol */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Memahami Klasifikasi Tipe Routing</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Di dunia nyata, rute ini dirancang lewat salah satu dari dua kubu aliran besar komputasi:
                    </p>
                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg text-[15px]">
                        <ul className="list-none space-y-3 mb-0">
                            <li><strong className="text-gray-900 block mb-1">Static Routing (Manual Manusia):</strong> Rute ditancap mati menggunakan ketikan admin satu persatu. Paling hemat CPU, tapi paling bahaya jika ada kabel putus di luar sepengetahuan admin (tidak adaptif).</li>
                            <li><strong className="text-gray-900 block mb-1">Dynamic Routing (Kecerdasan Buatan):</strong> Router A ngobrol sendiri dengan Router B menggunakan bahasa khusus (Misal: OSPF, BGP, RIP). Otomatis bikin peta kalkulasi harian, dan kalau kabel A putus, ia langsung bikin peta darurat ke kabel B secara mandiri. Sangat canggih namun menuntut CPU Mikrotik tingkat atas.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KonsepDasarRouting;
