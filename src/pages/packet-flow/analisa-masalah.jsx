import MateriImage from "../../components/atoms/MateriImage";

const AnalisaMasalahPacketFlow = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 4: Packet Flow
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Analisa Arus Permasalahan (Troubleshooting)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Miskonsepsi Fatal */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Salah Tembak Filter Kesalahan Pemula</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Dengan memegang kelima kunci chain tadi (Prerouting, Input, Forward, Output, Postrouting), Anda bisa menertawakan konfigurasi kuno para Teknisi level cupu yang meletakkan baris keamannnya ngawur tak mengerti alur Flow anatomi router.
                    </p>
                </div>

                {/* 2. Uji Kasus Praktek */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Uji Analisa Kasus Network Security</h2>
                    <ul className="list-disc pl-5 space-y-4 text-[15px] leading-relaxed">
                        <li>
                            <strong className="text-gray-900">Kasus A: Pak Kades mau menutup akses Ping ICMP murni karena diusili remaja, agar Routernya diam tak menjawab kalau diping (Stealth mode).</strong><br/>
                            Jawaban Kunci: Di Firewall Filter, pak Kades wajib menembak rule blok di Lorong <strong className="text-blue-600">INPUT</strong>. Kalau dia milih blokirnya ditembak dari Forward.. tetep aja PC si anak bisa ngeping memanggil paksaan ke IP tubuh router.
                        </li>
                        <li>
                            <strong className="text-gray-900">Kasus B: Limit pembatasan bandwith bocil di warnetnya ternyata tak berfungsi karena bocil jago nakal memasang VPN Hotspot Shield.</strong><br/>
                            Jawaban Kunci: Perhatikan, VPN akan merubah bungkus amplop header koneksinya di titik tengah proses (melengkung berbelok/tunnel). Kita harus tangkap cekik dia di posko <strong className="text-blue-600">PREROUTING</strong> menggunakan tool sakti fitur IP &gt; Firewall &gt; Mangle sebelum paket itu dikunci bungkusnya di pasca rute.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default AnalisaMasalahPacketFlow;
