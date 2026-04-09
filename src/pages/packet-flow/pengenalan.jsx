import MateriImage from "../../components/atoms/MateriImage";

const PengenalanPacketFlow = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 4: Packet Flow
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Pengenalan Logical Diagram
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">
                {/* 1. Pengertian Packet Flow */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Apa Itu Packet Flow?</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Di dalam mesin MikroTik, paket data tidak sekadar menumpang lewat secara instan. Paket itu diolah melalui serangkaian labirin dan pos satpam panjang sebelum diizinkan keluar lagi. 
                        <strong>Packet Flow</strong> adalah peta cetak biru (blueprint) urutan pos logika di dalam jeroan mesin RouterOS.
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Jika Anda ingin naik tingkat dari "Tukang Setting Rute" menjadi seorang "Pakar Security/Firewall", menghafal diagram Packet Flow adalah kewajiban mutlak agar tahu di pos mana suatu paket dicegat.
                    </p>
                    <MateriImage 
                        src="/images/packet_flow/pengenalan/packet_flow.png" 
                        alt="Diagram Packet Flow MikroTik v6 terbaru (gambar rumit dengan panah-panah dan kotak biru/merah)." 
                        caption="Diagram Alir V6 (Blueprint jeroan mesin MikroTik)." 
                    />
                </div>

                {/* 2. Anatomi Jalur */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Bedah Jalur Labirin</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Secara besar, diagram ruwet tadi bisa disederhanakan menjadi 5 lintasan (Chain) utama. Jika dianalogikan dengan bangunan kantor, chain ini adalah lorong-lorong spesifik:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-3 text-[15px] leading-relaxed">
                        <li><strong>Prerouting:</strong> Pos Satpam gerbang paling depan sebelum paket memutuskan mau kemana.</li>
                        <li><strong>Input:</strong> Antrean menuju pintu masuk ruang kerja Pak Bos (CPU Router itu sendiri). Paket yang mampir sini pasti minta dilayani oleh router.</li>
                        <li><strong>Forward:</strong> Lorong transit atau ruang tunggu bagi penumpang yang cuma mau "numpang lewat" menuju pintu keluar belakang.</li>
                        <li><strong>Output:</strong> Pintu keluar eksklusif barang paket yang diproduksi dari meja Pak Bos (Router sendiri) untuk dilempar ke luar.</li>
                        <li><strong>Postrouting:</strong> Pos Satpam gerbang belakang sebelum paket akhirnya meluncur keluar lewat kabel.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PengenalanPacketFlow;
