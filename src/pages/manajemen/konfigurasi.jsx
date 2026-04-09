import MateriImage from "../../components/atoms/MateriImage";

const KonfigurasiManajemen = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-8 min-h-[60vh] mt-6">
            <div className="mb-6 border-b border-gray-200 pb-4">
                <span className="text-blue-600 font-medium text-sm">
                    Bab 5: Manajemen Fitur Mutakhir
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    Scheduler & Otomatisasi (Scripts)
                </h1>
            </div>
            
            <div className="prose max-w-none text-gray-800">

                {/* 1. Miskonsepsi Baterai CMOS */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">1. Scripting: Sihir Bahasa Dewa MikroTik</h2>
                    <p className="text-[15px] mb-3 leading-relaxed">
                        Di puncak hirarki RouterOS Administrator, manusia sudah tidak lagi memakai tangan gerak klik mouse-nya secara manual di Winbox pelan-pelan. Manusia mengontrol lalu lintas traffic besar cukup dengan perintah kode program teks sebaris sintaks Loop kondisional otomatis (Disebut <strong>RouterOS Scripting</strong>).
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] mt-4 font-mono">
                        <span className="text-gray-500 block mb-2 text-sm font-sans italic">// Contoh sintaks skrip dewa logika mencari client mac address curang</span>
                        <div className="flex bg-slate-900 border border-slate-700 text-slate-300 p-3 rounded overflow-x-auto text-[14px]">
                            {`:foreach i in=[/ip dhcp-server lease find where dynamic=yes] do={ /ip dhcp-server lease make-static $i }`}
                        </div>
                    </div>
                </div>

                {/* 2. Scheduler Waktu */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">2. Mengawinkan dengan Alarm (Scheduler)</h2>
                    <MateriImage 
                        src="/images/manajemen/konfigurasi/konfigurasi.png" 
                        alt="Tangkapan layar window System > Scheduler yang isinya setelan waktu alarm dan nempelin barisan skrip buat dimuntahkan eksekusi otomatis." 
                        caption="Sistem Timer Jam weker ala MikroTik." 
                    />
                    <p className="text-[15px] mb-3 leading-relaxed mt-4">
                        Skrip program tadi hanyalah teks mati kaku naskah tulisan (Meskipun Anda taruh di System &gt; Scripts) sebelum si sutradara System &gt; Scheduler dipanggil beraksi!. Si Scheduler itu mesin Jam wekernya. 
                        <br/><br/>
                        <strong>Praktik Kasus Umum:</strong> Anda men-set alarm scheduler bernama "Bersih bersih" dikunci menyala eksekusi tiap jam `23:59:00 Midnight`. Ketika detik itu nyentuh, alarm teriak nendang membangunkan Naskah Skrip berisi sintaks tulisan perintah `/system reboot`! Jadilah router Anda sehat ngereset beban RAM Cache diam-diam sewaktu bos kalian pada tidur lelap harian.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default KonfigurasiManajemen;
