import { useState } from "react";
import SEO from "../../components/atoms/SEO";

const LaporkanMasalah = () => {
    const [topic, setTopic] = useState("Kesalahan Teks Materi / Typo Parah");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const email = "jakamicrosoftlearn@gmail.com";
        const subject = encodeURIComponent(`Laporan Masalah web PLP: ${topic}`);
        const body = encodeURIComponent(`Halo Mas Jaka,\n\nSaya menemukan masalah di web Mikrotik PLP dengan detail berikut:\n\nTopik: ${topic}\nKronologi:\n${description}\n\nTerima kasih.`);
        
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <SEO title="Laporkan Masalah" description="Bantu kami memperbaiki platform dengan melaporkan bug atau kesalahan materi." path="/laporkan-masalah" />
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[60vh]">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Laporkan Masalah</h1>
                <div className="prose max-w-none text-gray-800 mb-8 border-b border-gray-100 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                        Menemukan <em>bug</em> di sistem kami? Ada bagian materi yang salah tik, kalimatnya sulit dipahami, atau tombol login tidak bisa diklik? Kami sangat menghargai laporan Anda agar aplikasi edukasi ini semakin stabil.
                    </p>
                </div>
                
                <form className="max-w-xl" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Masalah / Keluhan</label>
                        <select 
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-gray-700"
                        >
                            <option>Kesalahan Teks Materi / Typo Parah</option>
                            <option>Sistem Login & Register Bermasalah</option>
                            <option>Bug Ujian Server</option>
                            <option>Usulan Penambahan Materi Baru</option>
                            <option>Lainnya...</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ceritakan Kronologinya</label>
                        <textarea 
                            rows="5" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-gray-700 resize-none" 
                            placeholder="Jelaskan secara mendetail (Contoh: Bang, di bab routing tombol next nya nggak mau gerak di HP layar semprul...)"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform active:scale-[0.98] shadow-md flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        Kirim Laporan via Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LaporkanMasalah;
