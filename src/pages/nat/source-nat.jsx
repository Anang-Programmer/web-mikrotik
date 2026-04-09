import MateriImage from "../../components/atoms/MateriImage";

const SourceNatNat = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 3: NAT (Network Address Translation)
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Source NAT (SNAT) & Masquerade
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Pengenalan SNAT */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Apa Itu Source NAT (srcnat)?</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Fungsi mutlak SNAT bekerja pada saat mesin MikroTik memproses paket dari Jaringan Lokal (LAN Private) hendak melangkah keluar gerbang memijakkan kaki ke Dunia Internet (Public).
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        MikroTik di sini akan "menyamarkan" identitas IP asli (<code>Source IP Address</code>) pengirim seperti `192.168.1.5` yang tidak layak huni di lalu lintas internet, dan menyulapnya alias menerjemahkannya (Translate) agar berpura-pura menjadi pelat nomor IP Public Internet milik Router itu sendiri.
                    </p>
                    <MateriImage 
                        src="/images/nat/source_nat/srcnat.png" 
                        alt="Screenshot jendela tab 'Action' pada menu IP > Firewall > NAT (yang diatur chainnya ke srcnat) dengan kursor drop down memilih aksi bertuliskan 'masquerade'." 
                        caption="Action ajaib yang membukakan pintu selimut akses internet ke dunia maya." 
                    />
                </div>

                {/* 2. Tindakan: Masquerade vs Src-Nat */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Action: Masquerade vs Src-Nat Murni</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Di lingkungan kerja jaringan Mikrotik, banyak pemula tersesat menggunakan ilmu hitam <code>Masquerade</code> pada sembarang kasus, padahal MikroTik memecah urusan terjemahan pengirim ini menjadi dua level action:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-4 text-[15px] leading-relaxed">
                        <li>
                            <strong>Masquerade (Topeng Elastis):</strong> 
                            Aksi sakti dimana router kita bisa menerjemahkan menyamar IP LAN Lokal menjadi IP Public apapun yang sedang nempel di port WAN, <strong>meskipun IP Publik modem Telkom/Provider itu berubah-ubah dinamis setiap kali modem di restart (Dynamic IP/PPPoE client).</strong>
                        </li>
                        <li>
                            <strong>Src-Nat (Topeng Terkunci/Statis):</strong> 
                            Jika kebetulan Perusahaan Anda itu sultan langganan Internet Dedicated yang mendapat "5 buah jatah IP Publik abadi yang tidak pernah berubah (Statis)". 
                            Tidak disarankan pakai Masquerade, namun pilih <code>Action=src-nat</code> lalu masukkan manual satu spesifik ip publik idaman anda di kotak form `To Addresses` agar proses memori CPU router Anda jauh lebih ringan.
                        </li>
                    </ul>
                </div>

                {/* 3. Aturan Main Menulis Rule */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">3. Parameter Aman Konfigurasi</h2>
                    <div className="p-5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-[15px]">
                        <div>
                            <strong className="block text-red-800 font-bold mb-1">Miskonsepsi Aturan (Out-Interface)</strong>
                            <p className="text-red-900/80 leading-relaxed mb-0">
                                Saat membuat rule `chain=srcnat action=masquerade`, Kunci utama adalah memasukkan nama jaringan ISP kita di kolom <strong>Out Interface</strong>. <br/>
                                <br/> Jika Out-Interface-nya dikosongkan secara ceroboh, Router MikroTik Anda akan dengan bodoh mem-masquerade membungkus seluruh jalur internal trafik jaringan dalam gedung bahkan meski bukan tujuannya ke Internet, dan merusak trafik pengenalan IP internal (Server Lintas VLAN di bawah bingung mendeteksi).
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SourceNatNat;
