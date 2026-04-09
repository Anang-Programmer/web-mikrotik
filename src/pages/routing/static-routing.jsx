import MateriImage from "../../components/atoms/MateriImage";

const StaticRoutingRouting = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 2: Routing (Layer 3)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Static Routing (Memahat Peta Manual)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Pengenalan Static Route */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Konsep Rute Tulisan Tangan</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Apabila Anda memiliki gedung A dan baru saja menyewa sambungan fiber optik ke gedung B (yang beda jaringan IP), mikroTik di gedung A tak bisa mendadak menjadi paranormal lalu tahu-tahu mengenal denah rumah jaringan gedung B secara mistis.
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Anda wajib menuliskan Static Route, yakni memberikan perintah mutlak dengan format kaku: <em>"Hai routerku, pokoknya jika ditanya jalan menuju seisi blok komplek 192.168.99.0/24, paksa lewatkan saja ke tetangga IP 10.10.10.2."</em>
                    </p>
                    <MateriImage 
                        src="/images/routing/static_routing/static_route.png" 
                        alt="Jendela tambah IP Route klik tanda tambah biru di MikroTik. Menunjukkan kotak isian wajib Dst-Address dan kolom Gateway kosong yang perlu ditipping." 
                        caption="Winbox: Jendela pembuatan IP Route manual (Statis)." 
                    />
                </div>

                {/* 2. Skenario Cocok / Tidak Cocok */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Kelebihan Fatal Vs Resiko</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Walaupun jadul dan kaku karena butuh penulisan fisik manual manusia, routing statis dipercaya karena bersih, murah, dan pasti tidak ada paket intelijen siluman dari router lain (Seperti kasus di routing dinamis OSPF dimana bisa saja di-spoof).
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] leading-relaxed">
                        <li>
                            <strong>Paling Cocok Diimplementasikan Pada:</strong> Gedung Warnet atau UMKM kecil, konfigurasi gerbang modem point-to-point, dimana rutenya sangat ringkas tidak banyak tikungan. Keuntungan terbesarnya, CPU MikroTik anteng duduk santai karena tidak usah merumus algoritma rumit Dijkstra secara <em>looping</em> terus terusan.
                        </li>
                        <li>
                            <strong>Kelemahan Dan Resiko Buruknya:</strong> Static Routing sepenuhnya Buta (blind forwarding). Jika terjadi musibah di jalanan (contoh: tiang tengah kabelnya putus), router MikroTik akan 100% mati akal, keras kepala mentok menyalurkan data terus-terusan lewat pelabuhan tersebut hingga timbul kiamat koneksi <em>Time Out / RTO</em> ke klien.
                        </li>
                    </ul>
                </div>

                {/* 3. Konfigurasi Via IP / Terminal */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Aturan Main Konfigurasi (IP Gateway)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Ketika menentukan <strong>Gateway</strong> (lompatan selanjutnya) dalam setelan IPv4, usahakan memasukkan alamat spesifik IP teman tetangga (lawan bicaranya). Jangan masukkan nama antarmukanya (`ether2`).
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4 font-mono">
                        <span className="text-gray-500 block mb-2 text-sm font-sans italic">// Menambahkan list Route ke network 192.168.5.0/24 melalui alamat terminal lawan 10.0.0.1</span>
                        <div className="flex bg-slate-900 border border-slate-700 text-slate-300 p-3 rounded overflow-x-auto text-[14px]">
                            [admin@MikroTik] {'>'}  <span className="text-blue-400 ml-2">ip route</span> add dst-address=<span className="text-green-400">192.168.5.0/24</span> gateway=<span className="text-orange-400">10.0.0.1</span>
                        </div>
                    </div>
                    <p className="text-[15px] mt-4 leading-relaxed bg-yellow-50 p-4 border border-yellow-200 rounded-lg">
                        <strong>Peringatan Serius:</strong> Secara teori memang Gateway bisa diisi dengan identitas antarmuka fisik lokal Anda sendiri, misalnya <code>gateway=ether3</code> (Point to Point link kosong tampa switch tambahan). Namun di dunia kabel Ethernet multiaksess yang ditengah jalan diselingin Switch cerdas, cara tersebut rentan membuat paket "keilangan jejak logis alamat MAC" di lautan broadcast L2 dan membuat beban RAM ngawur memanggil fungsi ARP terus terusan.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default StaticRoutingRouting;
