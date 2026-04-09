import MateriImage from "../../components/atoms/MateriImage";

const DestinationNatNat = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 3: NAT (Network Address Translation)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Destination NAT (Port Forwarding)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Pengenalan DNAT */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Konsep Pembolongan Target: Destination NAT (dstnat)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Kalau Source NAT tadi dipakai rombongan anak kita yang mau rekreasi ke luar internet. Maka Destination NAT (dstnat) berfungsi kebalikan murni: Ini adalah prosedur di mana tamu luar dari antah berantah dunia Internet Public secara spesifik bisa berkunjung masuk ke dalam menembus kamar lokal (LAN Private).
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        MikroTik di sini akan membajak amplop kedatangan surat (yang dari luar itu tertuju rapi menuju `Destination Public IP` router), dan disulap diputar balik (Translate / Forwarding) tembus untuk dibelokkan ke <code>IP Privat Belakang</code> alias anak kost Anda.
                    </p>
                    <MateriImage 
                        src="/images/nat/destination_nat/dstnat.png" 
                        alt="Tangkapan layar form isian menu IP > Firewall > NAT (chain=dstnat). Dst Address=36.66.45.10 (IP Publik), Protocol=tcp, Dst.Port=80." 
                        caption="Memasukkan IP target dan tipe gerbang pelabuhan aplikasi (Port)." 
                    />
                </div>

                {/* 2. Skenario Kehidupan Realita (CCTV) */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Praktik Kehidupan: Remote Server DVR Web / CCTV Kamera</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Bayangkan Bos besar warnet sedang liburan di Jepang (menggunakan internet gsm luar), dan sekonyong konyong mau mengecheck aplikasi pantauan kamera mesin server NVR CCTV perusahaanya yang IP-nya <code>192.168.1.100</code> di Jakarta. <br/>
                        Secara hukum L3 hal tersebut super mustahil, karena HP Jepang Bos anda itu gak mungkin merouting masuk nyelam menembus mencari rute ke blok IP Private lokal warnet secara acak.
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-4 text-[15px] leading-relaxed">
                        <li>
                            <strong>Rumus Solusi:</strong> Di Kantor Jakarta, MikroTik dikonfigurasi fitur dst-nat (biasa disorot dengan nama keren Port Forwarding), kita kasih Action bernama <code>dst-nat</code> dan tujukan <code>To-Addresses</code> ke PC NVR 192.168.1.100.
                        </li>
                        <li>
                            <strong>Eksekusi HP di Jepang:</strong> Bos tersebut tinggal mengetikkan <strong>IP Publik Modem Telkom milik Jakarta (+ embel-embel titik dua port 80 kamera)</strong> di browser Hp Apple-nya.
                        </li>
                        <li>
                            MikroTik Jakarta tersenyum menerima paket dari Jepang tersebut mengarah ke IP dirinya. "Eh ini disuruh forward!" Langsung di sulap paket tersebut diarahkan Nge-Bypass masuk numbur ke CPU si NVR Kamera. Bos bahagia CCTV terbuka.
                        </li>
                    </ul>
                </div>

                {/* 3. Hairpin NAT Peringatan */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Fenomena Jebakan "Hairpin NAT (NAT Loopback)"</h2>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-[15px] mt-4">
                        <strong className="text-yellow-800 mb-1 block">Awas Kasus Muter Balik Mematikan!</strong> 
                        Skenari port forwarding di atas akan 100% mulus jalan, ASALKAN bos akses dari internet luar gedungnya. Namun coba bila si kasir dari dalam jaringan LAN lokal warnetnya sendiri ikutan nekat ngetik URL IP Publik untuk nonton itu CCTV!
                        <br/><br/>
                        Pastin akan mentok blank lemot error! Karena trafik muter dari LAN ke port luar router berbalik mentok LAN lagi tidak ada pelindung snatnya. Kondisi mematikan asimetris L2 lokal ini wajib diredam menggunakan aturan suntikan sekunder bernama <strong>Hairpin NAT</strong>. (Topik expert).
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DestinationNatNat;
