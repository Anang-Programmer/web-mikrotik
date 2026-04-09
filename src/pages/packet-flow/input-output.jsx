import MateriImage from "../../components/atoms/MateriImage";

const InputOutputPacketFlow = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 4: Packet Flow
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Chain Input & Output
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Chain Input */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Lorong Input (Target ke Router)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Dalam Packet Flow, jalur lalai <strong>Input</strong> adalah lorong maut nan sibuk ke arah pintu ruang kantor pribadi CPU si MikroTik itu sendiri.
                    </p>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Jika paket surat memiliki alamat tujuan (Dst. Address) yang <strong>PERSIS SAMA (Matching) dengan IP si MikroTik</strong>, paket tersebut tidak akan nyasar ke PC anak-anak, melainkan dibelokkan ke pelukan mesin Router itu sendiri (Locals Process).
                    </p>
                    <MateriImage 
                        src="/images/packet_flow/input_output/chain_input.png" 
                        alt="Gambar dua orang. Satu melempar panah, dan panahnya menancap menabrak tubuh si target (Router)." 
                        caption="Chain Input: Semua paket yang niatnya menemui MikroTik." 
                    />
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4">
                        <strong className="block mb-1">Contoh Skenario Chain Input Bekerja:</strong>
                        <ul className="list-none space-y-1 mb-0">
                            <li>- Teknisi membuka aplikasi Winbox dan memasukkan IP router.</li>
                            <li>- Hacker Rusia melakukan serangan Brute-Force SSH ke IP Publik Router Anda.</li>
                            <li>- Mesin server ping ngetest sambungan ping mentah ke arah IP Router lokal.</li>
                        </ul>
                    </div>
                </div>

                {/* 2. Chain Output */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Lorong Output (Lahir dari Router)</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Kebalikan dari Input tadi. Lorong lalu lintas <strong>Output</strong> adalah lorong khusus bagi barang paket kiriman yang justru diciptakan dan lahir murni dari meja CPU MikroTik itu sendiri untuk dikabarkan ke dunia liar.
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4">
                        <strong className="block mb-1">Contoh Skenario Chain Output Bekerja:</strong>
                        <ul className="list-none space-y-1 mb-0">
                            <li>- MikroTik sedang menembakkan balasan sinyal NTP (Sinkronisasi Jam) ke server NTP luar.</li>
                            <li>- Admin membuka terminal New Terminal di atas Winbox lalu mengetikan `ping 8.8.8.8` dari routernya langsung.</li>
                            <li>- Router mengirim tembakan email notifikasi status Warning Log ke Gmail bosnya.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InputOutputPacketFlow;
