import { Link, Outlet, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import materiOrder from "../../data/materiOrder";
import SEO from "./SEO";

/**
 * MateriLayout — Wraps ALL materi pages with:
 * 1. Breadcrumb "Back to Home" di atas
 * 2. Navigasi Prev/Next materi di bawah
 */
const MateriLayout = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Cari posisi halaman saat ini di daftar urutan materi
    const currentIndex = materiOrder.findIndex(m => m.path === currentPath);
    const prevMateri = currentIndex > 0 ? materiOrder[currentIndex - 1] : null;
    const nextMateri = currentIndex >= 0 && currentIndex < materiOrder.length - 1 ? materiOrder[currentIndex + 1] : null;

    // Derive breadcrumb text from path e.g. "/fondasi/pengenalan-routeros" → "Fondasi"
    const pathParts = currentPath.split('/').filter(Boolean);
    const chapterName = pathParts[0]
        ? pathParts[0].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : '';

    return (
        <>
            {/* Dynamic SEO Tags */}
            {currentIndex >= 0 && (
                <SEO 
                    title={materiOrder[currentIndex].title} 
                    description={`Pelajari tentang ${materiOrder[currentIndex].title} di Bab ${materiOrder[currentIndex].bab}.`} 
                    path={currentPath}
                />
            )}
            {/* Breadcrumb / Back Navigation */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-2 flex-wrap">
                <Link 
                    to="/" 
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                    <Home className="w-4 h-4" />
                    <span className="hidden sm:inline">Beranda</span>
                </Link>
                {chapterName && (
                    <>
                        <ChevronLeft className="w-4 h-4 rotate-180 text-gray-400" />
                        <span className="text-gray-700 font-medium truncate max-w-[200px]">{chapterName}</span>
                    </>
                )}
            </nav>

            {/* Page Content (rendered by child Route) */}
            <Outlet />

            {/* ============================================= */}
            {/* Navigasi Prev / Next Materi                   */}
            {/* ============================================= */}
            {currentIndex >= 0 && (
                <div className="mt-8 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Tombol Sebelumnya */}
                    {prevMateri ? (
                        <Link
                            to={prevMateri.path}
                            className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all"
                        >
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                                <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs text-gray-400 font-medium">Sebelumnya</p>
                                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 truncate transition-colors">
                                    {prevMateri.title}
                                </p>
                            </div>
                        </Link>
                    ) : (
                        <div /> /* Placeholder kosong agar grid tetap selaras */
                    )}

                    {/* Tombol Selanjutnya */}
                    {nextMateri ? (
                        <Link
                            to={nextMateri.path}
                            className="group flex items-center justify-end gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all text-right"
                        >
                            <div className="min-w-0">
                                <p className="text-xs text-gray-400 font-medium">Selanjutnya</p>
                                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 truncate transition-colors">
                                    {nextMateri.title}
                                </p>
                            </div>
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                            </div>
                        </Link>
                    ) : (
                        <Link
                            to="/"
                            className="group flex items-center justify-end gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 hover:from-blue-700 hover:to-indigo-700 transition-all text-right text-white shadow-md"
                        >
                            <div className="min-w-0">
                                <p className="text-xs text-blue-200 font-medium">Selesai! 🎉</p>
                                <p className="text-sm font-semibold">
                                    Kembali ke Beranda
                                </p>
                            </div>
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                                <Home className="w-5 h-5" />
                            </div>
                        </Link>
                    )}
                </div>
            )}
        </>
    );
};

export default MateriLayout;
