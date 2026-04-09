const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

const routes = [
  { folder: "fondasi", chapter: "Fondasi", files: [
      { name: "pengenalan-routeros", title: "Pengenalan RouterOS & RouterBoard" },
      { name: "metode-akses", title: "Metode Akses Perangkat" },
      { name: "manajemen-dasar", title: "Manajemen Dasar OS" },
      { name: "ip-address", title: "Pemahaman Dasar IP Address" },
      { name: "layer2-vs-layer3", title: "Konsep Layer 2 vs Layer 3" },
      { name: "manajemen-interface", title: "Manajemen Interfaces" }
  ]},
  { folder: "routing", chapter: "Routing", files: [
      { name: "konsep-dasar", title: "Konsep Dasar Routing" },
      { name: "routing-table", title: "Anatomi Routing Table" },
      { name: "default-route", title: "Konfigurasi Default Route" },
      { name: "static-routing", title: "Static Routing" },
      { name: "metric-distance", title: "Routing Metric & Distance" },
      { name: "check-gateway", title: "Check Gateway Options" }
  ]},
  { folder: "nat", chapter: "NAT", files: [
      { name: "konsep-dasar", title: "Konsep Dasar NAT" },
      { name: "source-nat", title: "Source NAT (srcnat)" },
      { name: "destination-nat", title: "Destination NAT (dstnat)" },
      { name: "connection-tracking", title: "Logika Connection Tracking" }
  ]},
  { folder: "packet-flow", chapter: "Packet Flow", files: [
      { name: "pengenalan", title: "Pengenalan Packet Flow" },
      { name: "input-output", title: "Chain Input vs Output" },
      { name: "forward", title: "Chain Forward" },
      { name: "prerouting-postrouting", title: "Prerouting & Postrouting" },
      { name: "analisa-masalah", title: "Analisa Masalah" }
  ]},
  { folder: "manajemen", chapter: "Manajemen", files: [
      { name: "konfigurasi", title: "Manajemen Konfigurasi" },
      { name: "firewall-filter", title: "Layer Dasar Firewall Filter" },
      { name: "keamanan-router", title: "Mengamankan Akses Router" },
      { name: "manajemen-bandwidth", title: "Manajemen Bandwidth Dasar" },
      { name: "layanan-jaringan", title: "Layanan Jaringan Dasar" },
      { name: "ntp", title: "Manajemen Waktu (NTP)" }
  ]},
  { folder: "troubleshooting", chapter: "Troubleshooting", files: [
      { name: "tool-diagnosa", title: "Tool Diagnosa Jaringan" },
      { name: "monitoring-trafik", title: "Monitoring Trafik Riil" },
      { name: "system-logging", title: "Penggunaan System Logging" },
      { name: "skenario-umum", title: "Skenario Umum" }
  ]}
];

let appRoutesStr = '';
let appImportsStr = '';

routes.forEach(route => {
    const dirPath = path.join(srcDir, route.folder);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    route.files.forEach(file => {
        const filePath = path.join(dirPath, `${file.name}.jsx`);
        const componentName = file.name.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + route.folder.charAt(0).toUpperCase() + route.folder.slice(1);
        
        const template = `const ${componentName} = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[60vh] mt-6">
            <div className="mb-8 border-b border-gray-100 pb-6">
                <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">
                    Bab: ${route.chapter}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">
                    ${file.title}
                </h1>
            </div>
            <div className="prose max-w-none text-gray-600">
                <p>Halaman ini berisi materi mendalam tentang <strong>${file.title}</strong>.</p>
                <p className="mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-lg mb-2">Catatan Penting:</h3>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>Poin-poin spesifik mengenai materi ini akan dibahas secara terperinci.</li>
                        <li>Pastikan Anda memahami konsep dasar sebelum melanjutkan.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ${componentName};
`;
        fs.writeFileSync(filePath, template);
        
        // Add to App.jsx imports & routes mapping string
        appImportsStr += `import ${componentName} from "./pages/${route.folder}/${file.name}";\n`;
        appRoutesStr += `          <Route path="/${route.folder}/${file.name}" element={<${componentName} />} />\n`;
    });
});

console.log("=== IMPORTS TO COPY ===");
console.log(appImportsStr);
console.log("=== ROUTES TO COPY ===");
console.log(appRoutesStr);

console.log("Pages generation complete!");
