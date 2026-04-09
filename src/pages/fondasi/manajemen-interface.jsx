import MateriImage from "../../components/atoms/MateriImage";

const ManajemenInterfaceFondasi = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 1: Fondasi
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Manajemen Antarmuka (Interface)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">
                <p className="text-[15px] mb-6">
                    Sehebat apapun otak pemrosesan sebuah router, apabila gerbang pelabuhannya ditutup mati, maka tidak akan ada gunanya. Menu <strong>Interfaces</strong> pada MikroTik merupakan tempat berkumpulnya daftar nyawa penghubung sistem jaringan.
                </p>

                {/* 1. Interface Fisik */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Interface Fisik (Physical Interfaces)</h2>
                    <MateriImage 
                        src="/images/fondasi/manajemen_interface/interface.png" 
                        alt="Screenshot jendela 'Interface List' di Winbox MikroTik, memperlihatkan logo colokan ethernet yang nyala (ada logo 'R') dan mati gelap." 
                        caption="Daftar pelabuhan (port) fisik tempat di mana kabel LAN tembaga dicolokkan." 
                    />
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Interface fisik merujuk pada benda keras yang benar-benar bisa kita raba dengan tangan dan colok menggunakan kabel.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li><strong>Ethernet (ether1, ether2, dll):</strong> Port colokan LAN/UTP pada umumnya. Pastikan sering menamai port, misal <code>ether1-ISP-Indihome</code> dan <code>ether2-Lokal-Gedung</code> agar Anda tidak bingung di kemudian hari.</li>
                        <li><strong>Wireless LAN (wlan1):</strong> Antena radio tak kasat mata bawaan router.</li>
                        <li><strong>Status 'R' / Running:</strong> Dalam winbox, port fisik yang berhasil mendeteksi setrum di kabel tembaga ujung satunya, akan ditandai dengan alfabet kecil <em>R (Running)</em> yang artinya port siap perang bekerja.</li>
                    </ul>
                </div>

                {/* 2. Konsep Bridge Logika L2 */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Bridge (Antarmuka Logikal Penggabung)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Setiap lobang port router pada kondisi pabrik aslinya itu bersifat saling bermusuhan (independen) satu sama lainnya. Port ether2 dan port ether3 jalan masing-masing tidak saling campur tangan (Berbeda dengan alat Switch). 
                        <br/><br/>
                        Namun bagaimana jika perusahaan sedang pelit anggaran tak mampu beli Hub/Switch cabang dan memaksa semua port pada slot sisa milik router difungsikan mirip Switch? Solusinya adalah fitur sihir tak berwujud bernama <strong>Bridge</strong>.
                    </p>
                    <MateriImage 
                        src="/images/fondasi/manajemen_interface/bridge.png" 
                        alt="Screenshot menu 'Bridge' bertuliskan sub-menu Ports (menggabungkan ether2, ether3, dan wlan1 menjadi sebuah switch logis tunggal bridge1)." 
                        caption="Fitur Bridge seolah mengikat banyak port ke dalam satu karung jaring virtual agar bertingkah jadi port switch Layer 2 bersamaan." 
                    />
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px]">
                        <li><strong>Logika Layer 2:</strong> Bridge itu cuma jembatan lalu lalang MAC Address kosong murni layaknya Switch. Jembatan bodoh ini tugas aslinya bukan untuk berurusan dengan <em>routing</em>. </li>
                        <li><strong>Proses Kerja:</strong> Kita tinggal bikin bungkus antarmuka bayangan/fiksi bernama (misal `bridge-lokal`), trus kita masukin `ether2`, `ether3`, dan sinyal radio wifi `wlan1` barengan ke karung menu "Ports" nya Bridge itu. Alhasil semuanya langsung tersambung se-network!</li>
                    </ul>
                </div>

                {/* 3. Pengenalan VLAN Awal */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Konsep Singkat VLAN (Virtual LAN)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Kalau Bridge tadi sifatnya "Mempersatukan port pecah belah jadi 1 rumah", maka <strong>VLAN</strong> kebalikannya ekstrim: "Memecah-belah 1 port fisik jadi berpuluh-puluh gang anak jaringan kecil yang saling asing dengan Tag ID KTP".
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[15px]">
                        <li>Berguna untuk mentransmisikan departemen perusahaan HRD, IT, dan Tamu cuma ngelewatin lewat 1 lorong kabel murah tembaga (disebut mode <em>Trunk</em>), lalu dipecah megar lagi di ujung switchnya.</li>
                        <li>MikroTik mensimulasikan VLAN layaknya membuat anak port palsu/Virtual Interface (seperti <code>vlan-HRD</code> yang nebeng/menggantung menempel ke induk port fisik <code>ether2</code>).</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ManajemenInterfaceFondasi;
