import MateriImage from "../../components/atoms/MateriImage";

const LayananJaringanManajemen = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 5: Manajemen Fitur Mutakhir
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Layanan Jaringan Pendukung Utama
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. DHCP Server */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Dinamisasi IP: DHCP Server & Client</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Bayangkan kiamat di kantor Anda kalau di pagi hari harus ngetikin manual IP Addres statis buat 200 hp karyawan pakai jari satu persatu. RouterOS dibekali sistem <strong>DHCP (Dynamic Host Configuration Protocol)</strong> yang bertugas menjadi panitia logistik peminjaman "IP Sakti Gratis".
                    </p>
                    <MateriImage 
                        src="/images/manajemen/layanan_jaringan/dhcp.png" 
                        alt="Tangkapan layar urutan pemencetan tombol 'DHCP Setup' yang sakti di dalam menu IP > DHCP Server winbox, merubah segalanya dari merah jadi sukses." 
                        caption="Tombol DHCP Setup adalah alat pemicu otomatis termudah yang diciptakan MikroTik." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>DHCP Client:</strong> Digunakan kalau kita (si Router) butuh "minta mengemis sumbangan IP" ke arah port internet dari ISP Telkom di atas agar cepat dapet internet otomatis (seperti HP minta Wifi).</li>
                        <li><strong>DHCP Server:</strong> Digunakan kalau kita (Router) sok kaya bertugas menjadi "rentenir bos IP" yang membagi-bagikan semprotan jatah IP ke anak-anak komputer LAN rumah kita di bawah. Paling gampang di-set lewat klik tombol instan <code>DHCP Setup</code> lalu klik Next-Next-Next hingga kelar.</li>
                    </ul>
                </div>

                {/* 2. DNS Caching */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Jasa Tukang Buku Telpon (DNS Static & Cache)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Manusia itu makhluk payah yang gampang amnesia menghafalkan nomor deret IP yang jutaan jumlahnya, makanya Diciptakan <strong>DNS (Domain Name System)</strong>. Mikrotik kita bisa dipaksa jadi calo perantara pengepul DNS Cache lho!
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>Allow Remote Request:</strong> Centang saklar ini di menu DNS MikroTik. Seketika Router Anda menjadi server penengah bayangan. Kalau anak warnet ngetik Youtube, Router nyimpen cache rekaman nama IP nya di RAM mesinnya, jadi kalau anak warnet sebelahnya buka hal mrip persis.. loading nya 100x lipat lebih wush ngacir memotong jalur satelit!</li>
                        <li><strong>DNS Static (Blokir Palsu):</strong> Bisa digunakan untuk jurus tipuan menangkis website Porno. Nama `www.situsporno.com` kita patok mati nembak ke arah IP kosong 127.0.0.1, otomatis webnya muter terus tanpa koneksi (RTO buatan dewa).</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default LayananJaringanManajemen;
