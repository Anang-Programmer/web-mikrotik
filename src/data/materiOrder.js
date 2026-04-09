/**
 * materiOrder.js — Sumber kebenaran tunggal untuk urutan navigasi materi.
 * Digunakan oleh MateriLayout (prev/next) dan SEO.
 */
const materiOrder = [
    // Bab 1: Fondasi
    { path: "/fondasi/pengenalan-routeros", title: "Pengenalan RouterOS & RouterBoard", bab: "Bab 1: Fondasi" },
    { path: "/fondasi/metode-akses", title: "Metode Akses Perangkat", bab: "Bab 1: Fondasi" },
    { path: "/fondasi/manajemen-dasar", title: "Manajemen Dasar OS", bab: "Bab 1: Fondasi" },
    { path: "/fondasi/ip-address", title: "Pemahaman Dasar IP Address", bab: "Bab 1: Fondasi" },
    { path: "/fondasi/layer2-vs-layer3", title: "Konsep Layer 2 vs Layer 3", bab: "Bab 1: Fondasi" },
    { path: "/fondasi/manajemen-interface", title: "Manajemen Interfaces", bab: "Bab 1: Fondasi" },

    // Bab 2: Routing
    { path: "/routing/konsep-dasar", title: "Konsep Dasar Routing", bab: "Bab 2: Routing" },
    { path: "/routing/routing-table", title: "Anatomi Routing Table", bab: "Bab 2: Routing" },
    { path: "/routing/default-route", title: "Konfigurasi Default Route", bab: "Bab 2: Routing" },
    { path: "/routing/static-routing", title: "Static Routing", bab: "Bab 2: Routing" },
    { path: "/routing/metric-distance", title: "Routing Metric & Distance", bab: "Bab 2: Routing" },
    { path: "/routing/check-gateway", title: "Check Gateway Options", bab: "Bab 2: Routing" },

    // Bab 3: NAT
    { path: "/nat/konsep-dasar", title: "Konsep Dasar NAT", bab: "Bab 3: NAT" },
    { path: "/nat/source-nat", title: "Source NAT (srcnat)", bab: "Bab 3: NAT" },
    { path: "/nat/destination-nat", title: "Destination NAT (dstnat)", bab: "Bab 3: NAT" },
    { path: "/nat/connection-tracking", title: "Logika Connection Tracking", bab: "Bab 3: NAT" },

    // Bab 4: Packet Flow
    { path: "/packet-flow/pengenalan", title: "Pengenalan Packet Flow", bab: "Bab 4: Packet Flow" },
    { path: "/packet-flow/input-output", title: "Chain Input vs Output", bab: "Bab 4: Packet Flow" },
    { path: "/packet-flow/forward", title: "Chain Forward", bab: "Bab 4: Packet Flow" },
    { path: "/packet-flow/prerouting-postrouting", title: "Prerouting & Postrouting", bab: "Bab 4: Packet Flow" },
    { path: "/packet-flow/analisa-masalah", title: "Analisa Masalah", bab: "Bab 4: Packet Flow" },

    // Bab 5: Manajemen
    { path: "/manajemen/konfigurasi", title: "Manajemen Konfigurasi", bab: "Bab 5: Manajemen" },
    { path: "/manajemen/firewall-filter", title: "Layer Dasar Firewall Filter", bab: "Bab 5: Manajemen" },
    { path: "/manajemen/keamanan-router", title: "Mengamankan Akses Router", bab: "Bab 5: Manajemen" },
    { path: "/manajemen/manajemen-bandwidth", title: "Manajemen Bandwidth Dasar", bab: "Bab 5: Manajemen" },
    { path: "/manajemen/layanan-jaringan", title: "Layanan Jaringan Dasar", bab: "Bab 5: Manajemen" },
    { path: "/manajemen/ntp", title: "Manajemen Waktu (NTP)", bab: "Bab 5: Manajemen" },

    // Bab 6: Troubleshooting
    { path: "/troubleshooting/tool-diagnosa", title: "Tool Diagnosa Jaringan", bab: "Bab 6: Troubleshooting" },
    { path: "/troubleshooting/monitoring-trafik", title: "Monitoring Trafik Riil", bab: "Bab 6: Troubleshooting" },
    { path: "/troubleshooting/system-logging", title: "Penggunaan System Logging", bab: "Bab 6: Troubleshooting" },
    { path: "/troubleshooting/skenario-umum", title: "Skenario Umum", bab: "Bab 6: Troubleshooting" },
];

export default materiOrder;
