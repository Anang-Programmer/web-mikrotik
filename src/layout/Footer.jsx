import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand & Description */}
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                M
                            </div>
                            <h2 className="font-extrabold text-xl text-white">
                                Mikrotik<span className="text-cyan-400 font-semibold text-lg ml-1">Web PLP</span>
                            </h2>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Platform pembelajaran interaktif berbasis web untuk mempermudah memahami konsep jaringan dasar, routing, NAT, hingga troubleshooting pada perangkat MikroTik RouterOS.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Materi Utama</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/fondasi/pengenalan-routeros" className="hover:text-cyan-400 transition-colors">Fondasi & IP Logic</Link></li>
                            <li><Link to="/routing/konsep-dasar" className="hover:text-cyan-400 transition-colors">Jalur Data (Routing)</Link></li>
                            <li><Link to="/nat/konsep-dasar" className="hover:text-cyan-400 transition-colors">Logika NAT</Link></li>
                            <li><Link to="/packet-flow/pengenalan" className="hover:text-cyan-400 transition-colors">Packet Flow Diagram</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Bantuan</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/tentang-kami" className="hover:text-cyan-400 transition-colors">Tentang Kami</Link></li>
                            <li><Link to="/faq" className="hover:text-cyan-400 transition-colors">FAQ & Diskusi</Link></li>
                            <li><Link to="/laporkan-masalah" className="hover:text-cyan-400 transition-colors">Laporkan Masalah</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Mikrotik Web PLP. Dibuat oleh Jaka Perdana.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
