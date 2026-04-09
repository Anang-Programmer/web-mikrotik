import MateriImage from "../../components/atoms/MateriImage";

const PreroutingPostroutingPacketFlow = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 4: Packet Flow
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Chain Prerouting & Postrouting
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Prerouting */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Prerouting (Pra-Rute)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Sesuai namanya (Pree = Sebelum), jalur labirin ini merupakan <strong>Gerbang Paling Pertama dan Tertinggi</strong> yang dimasuki paket begitu dia telanjang keluar dari colokan kabel fisik menuju logika mesin.
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li>
                            Paket masih berada dalam status kebingungan. Tabel Routing di otak Mikrotik <strong>belum dibaca sama sekali</strong> di titik ini.
                        </li>
                        <li>
                            Karena posisinya ada di paling depan, inilah titik di mana aksi <strong>Destination NAT (Port Forwarding)</strong> dilakukan. Sangat logis: Amplop IP diputar ganti tujuan dulu agar ketika detik selanjutnya masuk ke meja Tabel Routing, router udah tau harus ngebuang arah kemana.
                        </li>
                    </ul>
                    <MateriImage 
                        src="/images/packet_flow/pre_post_routing/pre_post.png" 
                        alt="Potongan gambar diperbesar dari area Logical Flow khusus yang menyorot kotak biru bertuliskan 'Prerouting'." 
                        caption="Prerouting: Sang pos gerbang kedatangan absolut sebelum dihakimi meja routing." 
                    />
                </div>

                {/* 2. Postrouting */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Postrouting (Pasca-Rute)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Sesuai namanya (Post = Setelah), ini adalah <strong>Gerbang Paling Terakhir mutlak</strong> sebelum paket dilontarkan dilepeh keluar via kabel menuju ISP luar atau Switch komputer lokal.
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li>
                            Keputusan belok kiri/kanan berdasarkan Tabel Routing <strong>sudah selesai dibuat bulat-bulat</strong> (makanya dinamakan pasca-rute).
                        </li>
                        <li>
                            Di titik ini lah aksi sakti <strong>Source NAT (Masquerade)</strong> dieksekusi. Sangat logis: Identitas Source IP diamputasi jadi Topeng IP Publik tepat di ujung akhir sebelum dia lepas pamit dari pekarangan router.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PreroutingPostroutingPacketFlow;
