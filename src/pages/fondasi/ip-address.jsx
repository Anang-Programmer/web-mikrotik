import MateriImage from "../../components/atoms/MateriImage";

const IpAddressFondasi = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 1: Fondasi
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Pemahaman Dasar IP Address
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">
                <p className="text-[15px] mb-6">
                    Akar dari dunia jaringan (Networking) adalah pengurutan dan pengalamatan numerik. Ibarat kantor pos yang memerlukan kode pos dan nomor rumah untuk mengantar surat, router tidak bisa jalan tanpa aturan peng-alamatan numerik yang kita sebut Internet Protocol (IP). 
                </p>

                {/* 1. Anatomi IPv4 */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Anatomi Alamat IPv4 (32-Bit)</h2>
                    <MateriImage 
                        src="/images/fondasi/ip_address/ip_add.png" 
                        alt="Ilustrasi angka desimal 192.168.1.1 yang dipecah jadi 4 kolom kotak biner 8-bit (total 32 bit)." 
                        caption="Pembagian 4 segmen (oktet) biner pada anatomi penulisan IP Address." 
                    />
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Internet Protocol versi 4 (IPv4) adalah alamat berupa deretan angka panjang logika numerik komputer (Biner antara 1 dan 0). Berkat kesepakatan internasional, biner yang pusing tadi diparsing (dipecah) menjadi bentuk tulisan angka desimal yang ramah manusia (Contoh: `192.168.10.1`).
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li>Panjang total bilangan aslinya ada <strong>32 bit</strong>.</li>
                        <li>Dipecah menggunakan tanda titik (.) menjadi 4 petak ruangan yang disebut <em>Oktet</em>. Di mana 1 oktet bernilai 8 bit.</li>
                    </ul>
                </div>

                {/* 2. Subnetting & Prefix */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Subnetting & Prefix (/24 dkk)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Jika kantor pos melabeli "Kode Pos" untuk menandakan Area Provinsi (Network ID), dan melabeli "Nomor Rumah" untuk menandakan bangunan (Host ID), lantas bagaimana router MikroTik membedakan mana area provinsi dan mana bangunanya? 
                        <br/><br/>Disinilah turun peran <strong>Subnet Mask (CIDR Prefix)</strong>, yang disimbolkan dengan logo <strong>Garis Miring atau Slash (/)</strong>.
                    </p>
                    <MateriImage 
                        src="/images/fondasi/ip_address/subnetting.png" 
                        alt="Tabel jumlah Host atau daftar urutan prefix /24 sampai /30." 
                        caption="Tabel umum jumlah client yang ditampung berdasar irisan subnet (Prefix)." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px]">
                        <li>
                            Contoh <code>/24</code>: Memandatkan bahwa 24 bit awal biner nya itu dikunci sebagai label Area Provinsi (Cakupannya besar). Maka sisa lahan bangunannya yang boleh dipakai komputer (Host / Laptop / HP) yang terhubung dalam satu nama wifi itu jumlahnya akan berkisar di <strong>254 batas host</strong> .
                        </li>
                        <li>
                            Contoh <code>/30</code>: Digunakan spesifik cuma di dunia ISP (Point-to-Point dua satelit parabola), karena sisanya hanya muat untuk <strong>2 perangkat</strong> absolut tanpa boleh ada penyusup.
                        </li>
                    </ul>
                </div>

                {/* 3. Aturan Buangan (Network dan Broadcast) */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Aturan Absolut: Network & Broadcast IP</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Ada aturan kaku jika Anda mendesain subnet. Komputer/Laptop manapun tidak bisa disetting mendapatkan IP titik awalnya (paling mentok depan) maupun IP ujung akhirnya (paling mentok pantat) dari sebuah subnet. Ini karena:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li><strong>Network ID:</strong> Angka pertama dari sebuah blok IP. Fungsinya murni sebagai identitas nama blok. (Misal `192.168.1.0/24`). IP angka `0` di ujung sini tak satupun manusia dibolehkan memakainya.</li>
                        <li><strong>Broadcast IP:</strong> Angka paling terakhir dari sebuah subnet. Fungsinya adalah kanal pelantang suara (Toa) untuk memanggil pengumuman massal jika ada paket data baru. (Misal di contoh yang sama, titik `192.168.1.255` tidak bisa dipakai).</li>
                    </ul>
                </div>

                {/* 4. Private Vs Public */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">4. Private vs Public IP</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Kenapa di kantor A alamat wifi-nya tertulis IP <code>192.168.1.5</code>, dan pas jalan ke kantor sebelah IP wifi gedungnya juga persis tertulis <code>192.168.1.5</code>? Kan harusnya sistem alamat dunia tidak boleh tabrakan kembar? 
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Disinilah hukum RFC 1918 berlaku (terciptalah <strong>Private IP Address</strong> kelas A, B, C). IP Privat itu "Bebas dan Gratis" digunakan dan direplika berkali-kali ulang tanpa perlu izin kominfo, asalkan sifatnya dipakai untuk jaringan LAN Lokal gedung mereka sendiri, dan sama sekali <strong>tidak bisa mengakses jalan tol Internet publik di luar</strong> secara langsung. 
                        Nantinya router akan menolong merubah IP Privat ini jadi IP Publik melalui sihir yang dinamakan NAT (diajarkan di bab berikutnya).
                    </p>
                </div>

            </div>
        </div>
    );
};

export default IpAddressFondasi;
