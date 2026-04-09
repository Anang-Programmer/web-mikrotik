import MateriImage from "../../components/atoms/MateriImage";

const KonsepDasarNat = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 3: NAT (Network Address Translation)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Konsep Dasar: Sihir Penerjemah IP
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Kiamat IPv4 */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Latar Belakang Terciptanya NAT (Kiamat IPv4)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Seperti yang kita bahas di Bab Fondasi, jumlah IP Publik versi 4 di seluruh dunia itu sangat terbatas (hanya sekitar 4 miliar IP). Hal ini memicu krisis global yang disebut <em>IPv4 Exhaustion</em> karena setiap handphone dan laptop di dunia saat ini butuh IP Address untuk nyambung ke Internet.
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Penyelamat krisis tersebut adalah <strong>NAT (Network Address Translation)</strong>. NAT memungkinkan satu gedung bertingkat dengan 200 karyawan menggunakan <strong>Private IP Address</strong> (Misal: awalan <code>192.168.x.x</code> murni internal yang gratis dibikin sendiri), namun di mata internet global dunia luar, mereka semua bersembunyi menumpang pada sebuah jubah <strong>Satu Biji IP Publik Internet</strong> berlangganan.
                    </p>
                </div>

                {/* 2. Definisi NAT VS Routing */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Perbedaan Mendasar NAT vs Routing Biasa</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Jika di Bab 2 routing itu bertugas mencarikan jalan aspal menuju luar benua, nah NAT di Bab 3 ini bertugas <strong>memanipulasi KTP pengirim (Header Packet)</strong> agar tidak diusir oleh satpam di jalan tol benua YouTube tersebut.
                    </p>
                    <MateriImage 
                        src="/images/nat/konsep_dasar/nat.png" 
                        alt="Grafis infografik yang menggambarkan IP lokal 192.168.1.5 mengenakan sebuah Baju Zirah bertuliskan IP Publik 36.66.45.10 saat mencelupkan kakinya ke gumpalan awan Internet." 
                        caption="Ilustrasi paket data lokal yang sedang mengenakan topeng / baju samaran IP Publik router." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] leading-relaxed">
                        <li><strong>Tanpa NAT (Pure Routing):</strong> Ketika paket IP <code>192.168.1.5</code> berhasil nyampai ke server Google lalu Google nyoba balas surat, Google bakal muntah (Drop) karena Hukum internet absolut sedunia: <em>"Server Internet Publik DILARANG membalas/me-routing IP dari alamat Privat lokal"</em>.</li>
                        <li><strong>Dengan NAT (Topeng):</strong> Sebelum paket dilempar ke Google, Router akan men-Tip ex / menghapus stiker IP Asli si PC pada amplop paket, dan menggantinya dengan tulisan <em>"Pengirim: Router IP Publik 36.66.45.10"</em>. Giliran dikirim balik sama Google, pastinya suratnya sukses masuk ke Router MikroTik lagi!</li>
                    </ul>
                </div>

                {/* 3. Dua Jalur Besar NAT */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Dua Dimensi Rantai NAT</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Di dalam sistem cerdas Filter Firewall RouterOS MikroTik, NAT diklasifikasikan dengan ketat membelah menjadi dua arah (rantai/chain) utama, yaitu fungsi saat <em>Kita Mau Keluar Internet</em> atau saat <em>Orang luar Internet Mau masuk CCTV kita</em>.
                    </p>
                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg text-[15px]">
                        <ul className="list-none space-y-3 mb-0">
                            <li><strong className="text-blue-700 block mb-1">Source NAT (`srcnat`):</strong> Mengendalikan identitas pengirim (Source). Dipakai untuk membariskan anak anak warnet internal keluar dari 1 port modem internet tunggal. (Action terkenal: <em>Masquerade</em>).</li>
                            <li><strong className="text-purple-700 block mb-1">Destination NAT (`dstnat`):</strong> Mengendalikan identitas tujuan si penerima (Target). Digunakan untuk <em>Port Forwarding</em>, nge-hack izin ke mikrotik agar IP anak warnanya tembus dibaca dunia maya.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KonsepDasarNat;
