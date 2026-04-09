import { Helmet } from "react-helmet-async";

/**
 * SEO — Komponen reusable untuk mengatur <title>, <meta description>,
 * dan Open Graph tags per halaman.
 * 
 * CATATAN PENTING UNTUK DEVELOPER:
 * React SPA (Vite) di-render di sisi client (CSR), artinya:
 * - Google Bot BISA membaca meta tag ini (Google sudah support JS rendering)
 * - Tapi crawler lain (Facebook, Twitter, WhatsApp preview) TIDAK bisa
 *   karena mereka tidak mengeksekusi JavaScript.
 * 
 * Jika SEO menjadi kebutuhan prioritas tinggi di masa depan,
 * pertimbangkan migrasi ke Next.js (SSR/SSG) agar meta tag
 * sudah tersedia di HTML mentah sebelum JavaScript dijalankan.
 * 
 * Untuk saat ini, komponen ini sudah cukup optimal untuk:
 * ✅ Google Search indexing
 * ✅ Browser tab title per halaman
 * ✅ Aksesibilitas & UX
 */
const SEO = ({ 
    title, 
    description = "Platform edukasi interaktif untuk memahami fundamental jaringan komputer menggunakan MikroTik RouterOS.", 
    path = "" 
}) => {
    const siteName = "Mikrotik Web PLP";
    const fullTitle = title ? `${title} — ${siteName}` : siteName;
    const siteUrl = "https://mikrotik-web-plp.vercel.app"; // Ganti sesuai domain deployment

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook (terbatas di SPA, tapi tetap berguna) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            {path && <meta property="og:url" content={`${siteUrl}${path}`} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
