import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, User, LogOut, LayoutDashboard, Menu, X, Users, FileText, BookOpen, GraduationCap } from "lucide-react";
import { useAuth } from "../context/AuthContext";

// =============================================
// NavItem — Elemen navigasi individual (Desktop)
// Mendukung dropdown untuk menu bertingkat
// =============================================
const NavItem = ({ title, to, items, icon: Icon }) => {
    return (
        <div className="relative group cursor-pointer">
            <Link to={to} className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 py-4 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300">
                {Icon && <Icon className="w-4 h-4" />}
                {title}
                {items && items.length > 0 && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
            </Link>
            
            {/* Dropdown Menu */}
            {items && items.length > 0 && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 p-2 overflow-hidden">
                    <div className="flex flex-col gap-1">
                        {items.map((item, index) => (
                            <Link 
                                key={index} 
                                to={item.path} 
                                className="text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2.5 rounded-lg transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// =============================================
// MobileNavItem — Elemen navigasi individual (Mobile)
// Dengan accordion untuk sub-menu
// =============================================
const MobileNavItem = ({ title, to, items, icon: Icon, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (items && items.length > 0) {
        return (
            <div>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                    <span className="flex items-center gap-2">
                        {Icon && <Icon className="w-4 h-4" />}
                        {title}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                    <div className="ml-4 pl-4 border-l-2 border-blue-100 flex flex-col gap-0.5 mt-1 mb-2">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={onClose}
                                className="text-xs font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link 
            to={to} 
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
        >
            {Icon && <Icon className="w-4 h-4" />}
            {title}
        </Link>
    );
};


const Header = () => {
    const { user, profile, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    // Tutup mobile menu saat pindah halaman
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Tutup mobile menu saat klik di luar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };
        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuOpen]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }

    // ======================================================
    // MENU SISWA — Daftar materi pelajaran dengan dropdown
    // ======================================================
    const studentMenus = [
        {
            title: "Fondasi",
            to: "/fondasi",
            items: [
                { label: "Pengenalan RouterOS & RouterBoard", path: "/fondasi/pengenalan-routeros" },
                { label: "Metode Akses Perangkat", path: "/fondasi/metode-akses" },
                { label: "Manajemen Dasar OS", path: "/fondasi/manajemen-dasar" },
                { label: "Pemahaman Dasar IP Address", path: "/fondasi/ip-address" },
                { label: "Konsep Layer 2 vs Layer 3", path: "/fondasi/layer2-vs-layer3" },
                { label: "Manajemen Interfaces", path: "/fondasi/manajemen-interface" }
            ]
        },
        {
            title: "Routing",
            to: "/routing",
            items: [
                { label: "Konsep Dasar Routing", path: "/routing/konsep-dasar" },
                { label: "Anatomi Routing Table", path: "/routing/routing-table" },
                { label: "Konfigurasi Default Route", path: "/routing/default-route" },
                { label: "Static Routing", path: "/routing/static-routing" },
                { label: "Routing Metric & Distance", path: "/routing/metric-distance" },
                { label: "Check Gateway Options", path: "/routing/check-gateway" }
            ]
        },
        {
            title: "NAT",
            to: "/nat",
            items: [
                { label: "Konsep Dasar NAT", path: "/nat/konsep-dasar" },
                { label: "Source NAT (srcnat)", path: "/nat/source-nat" },
                { label: "Destination NAT (dstnat)", path: "/nat/destination-nat" },
                { label: "Logika Connection Tracking", path: "/nat/connection-tracking" }
            ]
        },
        {
            title: "Packet Flow",
            to: "/packet-flow",
            items: [
                { label: "Pengenalan Packet Flow", path: "/packet-flow/pengenalan" },
                { label: "Chain Input vs Output", path: "/packet-flow/input-output" },
                { label: "Chain Forward", path: "/packet-flow/forward" },
                { label: "Prerouting & Postrouting", path: "/packet-flow/prerouting-postrouting" },
                { label: "Analisa Masalah", path: "/packet-flow/analisa-masalah" }
            ]
        },
        {
            title: "Manajemen",
            to: "/manajemen",
            items: [
                { label: "Manajemen Konfigurasi", path: "/manajemen/konfigurasi" },
                { label: "Layer Dasar Firewall Filter", path: "/manajemen/firewall-filter" },
                { label: "Mengamankan Akses Router", path: "/manajemen/keamanan-router" },
                { label: "Manajemen Bandwidth Dasar", path: "/manajemen/manajemen-bandwidth" },
                { label: "Layanan Jaringan Dasar", path: "/manajemen/layanan-jaringan" },
                { label: "Manajemen Waktu (NTP)", path: "/manajemen/ntp" }
            ]
        },
        {
            title: "Troubleshooting",
            to: "/troubleshooting",
            items: [
                { label: "Tool Diagnosa Jaringan", path: "/troubleshooting/tool-diagnosa" },
                { label: "Monitoring Trafik Riil", path: "/troubleshooting/monitoring-trafik" },
                { label: "Penggunaan System Logging", path: "/troubleshooting/system-logging" },
                { label: "Skenario Umum", path: "/troubleshooting/skenario-umum" }
            ]
        }
    ];

    // ======================================================
    // MENU GURU — Panel administrasi eksklusif guru
    // Mengganti SELURUH navigasi materi dengan menu admin
    // ======================================================
    const teacherMenus = [
        // { title: "Halaman Materi", to: "/", items: [], icon: BookOpen },
        { title: "Kelola Siswa", to: "/dashboard-guru/siswa", items: [], icon: Users },
        { title: "Bank Ujian", to: "/dashboard-guru/ujian", items: [], icon: FileText },
        { title: "Buku Rekap Nilai", to: "/dashboard-guru/nilai", items: [], icon: GraduationCap }
    ];

    // ======================================================
    // LOGIKA UTAMA: Tentukan menu mana yang ditampilkan
    // Guru -> teacherMenus (admin panel)
    // Siswa / Belum login -> studentMenus (materi pelajaran)
    // ======================================================
    const isGuru = profile?.role === 'guru';
    const activeMenus = user ? (isGuru ? teacherMenus : studentMenus) : [];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                
                {/* Logo & Brand */}
                <Link to={isGuru ? "/dashboard-guru/siswa" : "/"} className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 duration-200 shrink-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md ${isGuru ? 'bg-gradient-to-br from-indigo-600 to-purple-500' : 'bg-gradient-to-br from-blue-600 to-cyan-500'}`}>
                        M
                    </div>
                    <h1 className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                        Mikrotik <span className="text-gray-800 font-semibold text-lg ml-1">{isGuru ? 'Admin' : 'Web PLP'}</span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-5">
                    {activeMenus.map((menu, idx) => (
                        <NavItem key={idx} title={menu.title} to={menu.to} items={menu.items} icon={menu.icon} />
                    ))}
                </nav>

                {/* Right Side: User area + Mobile Hamburger */}
                <div className="flex items-center gap-3">
                    
                    {/* User Dropdown / Auth Buttons */}
                    {user ? (
                        <div className="relative group cursor-pointer">
                            <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-colors">
                                <User className="w-4 h-4 text-blue-600" />
                                <span className="max-w-[120px] truncate hidden sm:inline">{profile?.full_name || 'User'}</span>
                            </div>
                            
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 p-2">
                                <div className="px-3 py-2 border-b border-gray-100 mb-1">
                                    <p className="text-xs text-gray-500">Masuk sebagai</p>
                                    <p className="text-sm font-bold text-gray-800 capitalize">{profile?.role || 'Siswa'}</p>
                                </div>
                                {isGuru && (
                                    <Link to="/dashboard-guru/siswa" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2.5 rounded-lg transition-colors w-full text-left">
                                        <Users className="w-4 h-4" />
                                        Kelola Siswa
                                    </Link>
                                )}
                                <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-medium text-red-600 hover:bg-red-50 px-3 py-2.5 rounded-lg transition-colors w-full text-left mt-1">
                                    <LogOut className="w-4 h-4" />
                                    Keluar (Logout)
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer hidden sm:inline-flex">
                                Sign in
                            </Link>
                            <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
                                Register
                            </Link>
                        </>
                    )}

                    {/* Hamburger Button (Mobile/Tablet) */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* ================================================ */}
            {/* Mobile Menu — Slide-down panel                    */}
            {/* Menampilkan menu yang sama sesuai role aktif       */}
            {/* ================================================ */}
            {mobileMenuOpen && (
                <div 
                    ref={mobileMenuRef}
                    className="lg:hidden border-t border-gray-100 bg-white shadow-lg animate-slideDown"
                    style={{ animation: 'slideDown 0.2s ease-out' }}
                >
                    <div className="container mx-auto px-4 py-3 max-h-[70vh] overflow-y-auto">
                        
                        {/* Role Indicator (Mobile) */}
                        {user && (
                            <div className={`mb-3 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider ${isGuru ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                                {isGuru ? '🛡️ Mode Administrasi Guru' : '📚 Mode Belajar Siswa'}
                            </div>
                        )}

                        {/* Menu Items */}
                        <div className="flex flex-col gap-0.5">
                            {activeMenus.map((menu, idx) => (
                                <MobileNavItem 
                                    key={idx} 
                                    title={menu.title} 
                                    to={menu.to} 
                                    items={menu.items} 
                                    icon={menu.icon}
                                    onClose={() => setMobileMenuOpen(false)} 
                                />
                            ))}
                        </div>

                        {/* Mobile-only Auth Links */}
                        {!user && (
                            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
                                <Link 
                                    to="/login" 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full text-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                                >
                                    Sign in
                                </Link>
                                <Link 
                                    to="/register" 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-md"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* CSS Animation for slide-down */}
            <style>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </header>
    )
}

export default Header;
