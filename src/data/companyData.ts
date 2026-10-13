import { 
  ServiceItem, 
  ServicePackage, 
  ProjectCaseStudy, 
  TeamMember, 
  JobOpening, 
  BlogPost, 
  Milestone, 
  Testimonial, 
  Certification, 
  FAQItem 
} from '../types';

export const COMPANY_INFO = {
  name: "PT Anonim",
  shortName: "Anonim Group",
  tagline: "Akselerasi Solusi Digital Berkelanjutan untuk Kemajuan Nusantara",
  headline: "Membangun Fondasi Digital & Keunggulan Bisnis Masa Depan",
  subheadline: "Kami menggabungkan rekayasa teknologi mutakhir, strategi transformasi digital terukur, dan keahlian industri lokal untuk memberdayakan korporasi, BUMN, dan institusi terdepan di Indonesia.",
  foundedYear: 2012,
  legalName: "PT Anonim",
  nib: "0220108920138 (OSS-RBA Berizin Lengkap)",
  skKemenkumham: "AHU-0038921.AH.01.01.TAHUN 2012",
  npwp: "31.482.910.4-019.000",
  email: "chaerulusman166@gmail.com",
  emailCareers: "chaerulusman166@gmail.com",
  phone: "+62895393190234",
  whatsapp: "+62895393190234",
  whatsappDisplay: "+62 895-3931-90234",
  addressMain: "Treasury Tower Lantai 28, District 8 SCBD, Jl. Jend. Sudirman Kav. 52-53, Senayan, Jakarta Selatan 12190",
  addressBranch: "Pakuwon Tower Lt. 16, Jl. Embong Malang No. 21-31, Tegalsari, Kota Surabaya, Jawa Timur 60261",
  operationalHours: "Senin – Jumat: 08:30 – 17:30 WIB (Layanan Siaga Insiden: 24/7 untuk Enterprise)",
  socials: {
    linkedin: "https://linkedin.com/company/pt-anonim",
    instagram: "https://instagram.com/anonim.id",
    youtube: "https://youtube.com/@anonim",
    x: "https://x.com/anonim",
    facebook: "https://facebook.com/anonim.id"
  },
  stats: [
    { value: "14+", label: "Tahun Pengalaman Industri", sub: "Berdiri sejak 2012" },
    { value: "480+", label: "Proyek Skala Enterprise Selesai", sub: "99.2% on-time delivery" },
    { value: "98.7%", label: "Tingkat Kepuasan Klien (CSAT)", sub: "Berdasarkan audit tahunan" },
    { value: "120+", label: "Talenta Digital Bersertifikasi", sub: "Scrum, AWS, GCP, CISSP" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "enterprise-software",
    title: "Pengembangan Perangkat Lunak Enterprise",
    shortDesc: "Pembangunan web, mobile application (iOS/Android), dan sistem ERP/Core system kustom dengan arsitektur modular tahan uji.",
    fullDesc: "Kami merancang dan membangun ekosistem perangkat lunak skala korporat yang kokoh, cepat, dan terukur. Menggunakan arsitektur microservices modern, continuous integration (CI/CD), serta standar keamanan perbankan, aplikasi Anda dirancang untuk menangani jutaan transaksi simultan tanpa hambatan.",
    iconName: "Code2",
    category: "Software Engineering",
    benefits: [
      "Mengurangi biaya operasional redundansi hingga 40%",
      "Skalabilitas instan dengan arsitektur cloud-native",
      "Perlindungan data end-to-end sesuai regulasi UU PDP",
      "Kepemilikan source code 100% tanpa vendor lock-in"
    ],
    deliverables: [
      "Dokumen System Architecture & SRS",
      "Aplikasi Web & Mobile Multi-platform",
      "Dokumentasi API Terbuka (OpenAPI/Swagger)",
      "Garansi bug-free 12 bulan & pelatihan staf"
    ],
    timeline: "8 - 20 Minggu (Tergantung Ruang Lingkup)",
    startingPrice: "Mulai Rp 85.000.000"
  },
  {
    id: "digital-transformation",
    title: "Konsultansi Transformasi Digital & Tata Kelola IT",
    shortDesc: "Penyusunan blueprint roadmap digital, modernisasi sistem warisan (legacy), dan audit arsitektur teknologi bisnis.",
    fullDesc: "Bukan sekadar mengganti kertas dengan komputer, transformasi digital kami menyelaraskan visi bisnis dengan kapabilitas teknologi. Kami melakukan re-engineering alur kerja, mendesain target arsitektur enterprise, serta mendampingi manajemen perubahan budaya organisasi.",
    iconName: "Sparkles",
    category: "Strategy & Advisory",
    benefits: [
      "Visibilitas metrik operasional secara real-time",
      "Mencegah pemborosan investasi IT yang tidak terarah",
      "Peningkatan kecepatan time-to-market produk baru",
      "Kepatuhan regulasi OJK, Kominfo, dan Bank Indonesia"
    ],
    deliverables: [
      "Comprehensive Digital Maturity Assessment",
      "Enterprise Architecture 3-Year Blueprint",
      "Change Management & Standard Operating Procedures",
      "Executive Dashboard Reporting & KPI Matrix"
    ],
    timeline: "6 - 12 Minggu",
    startingPrice: "Mulai Rp 60.000.000"
  },
  {
    id: "cloud-cybersecurity",
    title: "Infrastruktur Cloud & Keamanan Siber",
    shortDesc: "Migrasi cloud terkelola (AWS, Google Cloud, Azure), implementasi Zero-Trust Security, dan audit uji penetrasi (Pentest).",
    fullDesc: "Mengamankan aset data strategis perusahaan dari ancaman siber yang kian canggih. Kami menghadirkan solusi arsitektur multi-cloud dengan optimasi biaya (FinOps), audit penetrasi kepatuhan ISO 27001, serta pusat operasi keamanan (SOC) siaga 24/7.",
    iconName: "ShieldCheck",
    category: "Cloud & Security",
    benefits: [
      "SLA Uptime infrastruktur hingga 99.95%",
      "Efisiensi tagihan cloud bulanan hingga 35% melalui FinOps",
      "Pencegahan kebocoran data dan serangan Ransomware",
      "Audit kepatuhan komprehensif ISO 27001 & BSSN"
    ],
    deliverables: [
      "Infrastruktur Cloud-as-Code (Terraform)",
      "Laporan Vulnerability Assessment & Pentest Lengkap",
      "Disaster Recovery & Business Continuity Plan (DRP/BCP)",
      "Konfigurasi WAF, SIEM, & Pemantauan Real-time"
    ],
    timeline: "4 - 10 Minggu",
    startingPrice: "Mulai Rp 45.000.000"
  },
  {
    id: "ai-data-intelligence",
    title: "Solusi AI & Rekayasa Big Data Analytics",
    shortDesc: "Implementasi data warehouse terpusat, analitik prediktif bisnis, automated AI chatbot, dan model machine learning kustom.",
    fullDesc: "Ubah tumpukan data pasif menjadi keuntungan kompetitif yang menghasilkan profit. Kami membangun data pipeline modern, visualisasi business intelligence (BI), hingga penerapan otomasi kecerdasan buatan untuk efisiensi operasional dan personalisasi pelanggan.",
    iconName: "BrainCircuit",
    category: "AI & Data Science",
    benefits: [
      "Pengambilan keputusan berbasis data akurat (data-driven)",
      "Prediksi churn pelanggan dan tren penjualan 6 bulan ke depan",
      "Otomatisasi 70% pertanyaan repetitif layanan pelanggan",
      "Integrasi satu data antar divisi tanpa silo"
    ],
    deliverables: [
      "Central Data Lakehouse & ETL Pipeline",
      "Interactive Executive BI Dashboard (PowerBI/Looker)",
      "Model Prediktif / LLM AI Assistant Khusus Perusahaan",
      "Dokumentasi Model Training & Keamanan Data"
    ],
    timeline: "6 - 14 Minggu",
    startingPrice: "Mulai Rp 75.000.000"
  },
  {
    id: "uiux-brand-experience",
    title: "Desain Pengalaman Pengguna (UI/UX) & Riset",
    shortDesc: "Riset pengguna mendalam, pembuatan sistem desain (Design System), wireframing, dan pengujian kegunaan prototipe.",
    fullDesc: "Produk hebat diawali oleh pengalaman pengguna yang intuitif dan memikat. Tim desainer kami memadukan psikologi perilaku pengguna Indonesia, pengujian kegunaan langsung (usability testing), dan design token siap koding untuk melipatgandakan konversi produk digital Anda.",
    iconName: "Palette",
    category: "Product Design",
    benefits: [
      "Meningkatkan tingkat konversi funnel transaksi hingga 85%",
      "Mempercepat waktu pengembangan developer hingga 2x lipat",
      "Identitas visual konsisten di semua touchpoint produk",
      "Mengurangi komplain pengguna berkat navigasi yang ramah"
    ],
    deliverables: [
      "User Persona & Empathy Journey Map",
      "Interactive High-Fidelity Prototype (Figma)",
      "Design System Komprehensif (Komponen & Variabel)",
      "Laporan Usability Testing & Analisis SUS Score"
    ],
    timeline: "4 - 8 Minggu",
    startingPrice: "Mulai Rp 35.000.000"
  },
  {
    id: "managed-it-support",
    title: "Managed IT Services & Dukungan SLA 24/7",
    shortDesc: "Pemeliharaan preventif berkala, monitoring kesehatan server 24/7, devOps terkelola, dan tim insinyur siaga on-demand.",
    fullDesc: "Bebaskan tim inti Anda dari urusan teknis rutin yang menguras waktu. Dengan kontrak tingkat layanan (SLA) terjamin hingga respons 15 menit, kami memastikan seluruh aplikasi dan sistem pendukung operasional bisnis Anda selalu berjalan mulus tanpa henti.",
    iconName: "Headphones",
    category: "Managed Operations",
    benefits: [
      "Jaminan respons insiden kritis di bawah 15 menit",
      "Biaya jauh lebih hemat dibanding mempekerjakan tim internal 24/7",
      "Patch keamanan rutin dan backup otomatis multi-zona",
      "Laporan kesehatan sistem bulanan yang transparan"
    ],
    deliverables: [
      "Dedicated Technical Account Manager",
      "Portal Ticketing Khusus dengan Tracking SLA",
      "Otomatisasi Backup & Simulasi Recovery Terjadwal",
      "Meeting Evaluasi Berkala & Rekomendasi Optimasi"
    ],
    timeline: "Kontrak Tahunan (Annual SLA)",
    startingPrice: "Mulai Rp 15.000.000 / bulan"
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-starter",
    name: "Akselerasi UMKM & Startup",
    badge: "Startup Ready",
    priceEstimate: "Rp 35 - 75 Juta",
    description: "Cocok untuk rintisan usaha atau perusahaan menengah yang ingin meluncurkan MVP produk digital atau modernisasi sistem awal.",
    features: [
      "Desain UI/UX Khusus & Riset Pengguna Cepat",
      "Aplikasi Web Responsif / PWA Modern",
      "Setup Database & Cloud Hosting Aman",
      "Integrasi Payment Gateway Indonesia",
      "Garansi & Pemeliharaan Teknis 3 Bulan",
      "Dukungan Jam Kerja (Senin - Jumat)"
    ],
    recommendedFor: "Startup tahap awal, UMKM naik kelas, & Bisnis retail menengah",
    popular: false
  },
  {
    id: "pkg-pro",
    name: "Transformasi Pertumbuhan (Scale-Up)",
    badge: "Paling Populer",
    priceEstimate: "Rp 85 - 190 Juta",
    description: "Solusi lengkap bagi perusahaan berkembang yang memerlukan sistem terintegrasi, aplikasi mobile ganda, dan performa tinggi.",
    features: [
      "Aplikasi Mobile Android & iOS (Native / Flutter)",
      "Arsitektur Backend Microservices Skalabel",
      "Panel Admin Enterprise & Dashboard Analytics",
      "Integrasi Multi-API (ERP, CRM, Logistik, Finansial)",
      "Uji Penetrasi Keamanan & Uji Beban (Load Test)",
      "Garansi & SLA Pemeliharaan Prioritas 6 Bulan",
      "Pelatihan Staf Onsite / Online Intensif"
    ],
    recommendedFor: "Perusahaan skala menengah-besar, Fintech, Logistik, & E-commerce",
    popular: true
  },
  {
    id: "pkg-enterprise",
    name: "Enterprise & Solusi Kustom",
    badge: "Skala Korporasi",
    priceEstimate: "Kustom / Sesuai RFP",
    description: "Perancangan arsitektur tingkat lanjut dengan SLA ketat, tata kelola kepatuhan regulasi finansial, dan tim dedikasi penuh.",
    features: [
      "Dedicated Squad (Product Lead, Architect, 6+ Engineers)",
      "Arsitektur Cloud Hybrid / On-Premise Multi-Region",
      "Kepatuhan Penuh ISO 27001, OJK, & Standar BI",
      "AI Machine Learning & Enterprise Data Lakehouse",
      "Penetration Testing Eksternal Bersertifikasi BSSN",
      "Dukungan SLA Insiden 24/7/365 (<15 Menit Respon)",
      "Penyelarasan Tata Kelola IT (COBIT / TOGAF)"
    ],
    recommendedFor: "BUMN, Bank & Lembaga Keuangan, Konglomerasi, & Rumah Sakit",
    popular: false
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Discovery & Analisis Kebutuhan",
    duration: "1 - 2 Minggu",
    desc: "Kami menggali tantangan mendasar, mewawancarai stakeholder, memetakan proses bisnis, dan menetapkan KPI keberhasilan yang jelas."
  },
  {
    step: "02",
    title: "Arsitektur & Desain Solusi",
    duration: "2 - 3 Minggu",
    desc: "Pembuatan prototipe interaktif UI/UX, spesifikasi arsitektur data, pemilihan teknologi, dan persetujuan wireframe sebelum koding."
  },
  {
    step: "03",
    title: "Pengembangan Agil & QA Ketat",
    duration: "4 - 10 Minggu",
    desc: "Pengerjaan sprint 2-mingguan dengan demo berkala. Pengujian otomatis (Unit, Integration, Security, UAT) untuk kualitas tanpa celah."
  },
  {
    step: "04",
    title: "Deployment, Training & Garansi SLA",
    duration: "Berkelanjutan",
    desc: "Peluncuran tanpa downtime, pelatihan menyeluruh staf operasional, transfer knowledge, dan pendampingan pasca-rilis dengan SLA siaga."
  }
];

export const PROJECT_PORTFOLIO: ProjectCaseStudy[] = [
  {
    id: "bank-jatim-core-mobile",
    title: "Modernisasi Ekosistem Mobile Banking & Omnichannel",
    client: "Lembaga Perbankan Daerah Terkemuka",
    category: "Finansial & Perbankan",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    duration: "6 Bulan",
    overview: "Pembaruan menyeluruh aplikasi perbankan digital untuk 1,8 juta nasabah aktif dengan integrasi BI-FAST, QRIS Cross-Border, dan keamanan biometrik berlapis.",
    challenge: "Sistem mobile banking lama lambat pada jam sibuk (awal bulan), sering mengalami downtime transaksi hingga 4 jam per bulan, dan rating aplikasi di toko aplikasi hanya 2.4/5.0 karena antarmuka yang membingungkan bagi nasabah lintas generasi.",
    solution: "Merombak arsitektur backend menjadi microservices terdistribusi dengan auto-scaling di private cloud, mengimplementasikan enkripsi end-to-end hardware-level, serta merancang ulang UI/UX dengan standar aksesibilitas tinggi dan alur transaksi 3-ketukan (3-tap transfer).",
    results: [
      { label: "Peningkatan Kecepatan Transaksi", value: "+320%", subtext: "Rata-rata waktu eksekusi dari 4.2s menjadi 0.8s" },
      { label: "Lonjakan Rating Aplikasi", value: "4.8 / 5.0", subtext: "Dari sebelumnya 2.4 di Google Play & App Store" },
      { label: "Uptime Ketersediaan Sistem", value: "99.98%", subtext: "Nol downtime tak terjadwal selama 12 bulan terakhir" }
    ],
    beforeAfter: {
      beforeText: "Sistem monolitik lambat, downtime rata-rata 4 jam/bulan pada tanggal gajian, transaksi gagal mencapai 6.5%.",
      afterText: "Arsitektur cloud-native microservices berkapasitas 25.000 TPS simultan, transaksi gagal turun di bawah 0.05%.",
      beforeMetric: "Downtime: 4 Jam / Bulan",
      afterMetric: "Downtime: 0 Menit (99.98% SLA)"
    },
    techStack: ["Kotlin", "Swift", "Golang", "Apache Kafka", "PostgreSQL", "Kubernetes", "Redis", "Vault Enkripsi"],
    testimonial: {
      quote: "PT Anonim tidak hanya memahami teknologi mutakhir, namun juga sangat disiplin terhadap kepatuhan regulasi BI dan OJK. Proyek selesai tepat waktu dengan hasil melebihi ekspektasi dewan direksi.",
      author: "Hendra Gunawan, SE., MM.",
      role: "Chief Technology Officer - Mitra Perbankan Daerah"
    }
  },
  {
    id: "pertamina-iot-logistics",
    title: "Platform Manajemen Armada Logistik Terdistribusi & IoT",
    client: "Anak Perusahaan BUMN Energi Nasional",
    category: "Manufaktur & Logistik",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    duration: "5 Bulan",
    overview: "Sistem telematika cerdas pelacak 1.400+ unit truk tangki distribusi dengan sensor suhu, deteksi kelelahan pengemudi (AI dashcam), dan optimasi rute bahan bakar.",
    challenge: "Tingginya angka keterlambatan pengiriman bahan bakar di wilayah Jawa-Sumatera akibat rute manual, risiko pencurian/deviasi muatan yang sulit dilacak secara real-time, serta biaya bahan bakar armada yang membengkak tanpa transparansi data.",
    solution: "Membangun sistem pemantauan terpusat (War Room Dashboard) yang terhubung dengan sensor IoT onboard, algoritma optimasi rute dinamis berbasis cuaca & lalu lintas, serta peringatan anomali muatan instan ke pusat komando.",
    results: [
      { label: "Efisiensi Konsumsi BBM", value: "-22%", subtext: "Penghematan operasional mencapai miliaran rupiah per kuartal" },
      { label: "Ketepatan Jadwal Pengiriman", value: "98.4%", subtext: "Meningkat signifikan dari sebelumnya 76.1%" },
      { label: "Insiden Deviasi Muatan", value: "0 Insiden", subtext: "Transparansi audit digital 100% terekam sensor" }
    ],
    beforeAfter: {
      beforeText: "Pencatatan rute manual via radio & lembar kertas, keterlambatan armada 23.9%, tidak ada sensor deviasi muatan.",
      afterText: "Peta pelacakan real-time 1.400 truk dengan update tiap 3 detik, peringatan cerdas otomatis, dan efisiensi rute AI.",
      beforeMetric: "Keterlambatan: 23.9%",
      afterMetric: "Ketepatan: 98.4% (Terkontrol)"
    },
    techStack: ["React.js", "Python FastApi", "MQTT Broker", "TimescaleDB", "Google Maps Platform", "TensorFlow Lite"],
    testimonial: {
      quote: "Platform pemantauan ini mentransformasi seluruh rantai pasok distribusi darat kami. Tim manajemen sekarang memiliki visibilitas mutlak atas setiap liter muatan di jalan raya.",
      author: "Ir. Bambang Trihatmojo",
      role: "Head of Fleet Operations & Supply Chain"
    }
  },
  {
    id: "smart-city-command-center",
    title: "Sistem Satu Data Terpadu & Smart City Dashboard",
    client: "Pemerintah Provinsi & Dinas Kominfo Daerah",
    category: "BUMN & Smart City",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    year: "2023",
    duration: "7 Bulan",
    overview: "Integrasi data lintas 34 Organisasi Perangkat Daerah (OPD) menjadi dashboard visual eksekutif satu pintu untuk pengambilan kebijakan publik berbasis analitik.",
    challenge: "Setiap dinas memiliki server dan format data terisolasi (silo), menyulitkan pimpinan daerah saat bencana darurat atau pengambilan keputusan cepat karena membutuhkan waktu hingga 2 minggu hanya untuk mengumpulkan laporan Excel manual.",
    solution: "Merancang data lakehouse terpadu dengan automated pipeline ETL, standarisasi metadata Satu Data Indonesia, dan sistem Command Center 4K dengan visualisasi spasial kependudukan, kesehatan, perizinan, dan lalu lintas.",
    results: [
      { label: "Kecepatan Pengambilan Keputusan", value: "10x Lebih Cepat", subtext: "Dari 14 hari menjadi laporan otomatis real-time" },
      { label: "Sinkronisasi Data Dinas", value: "34 OPD", subtext: "100% dinas terhubung via secure data bridge" },
      { label: "Penghematan Anggaran Server", value: "40%", subtext: "Konsolidasi data center daerah menjadi cloud aman" }
    ],
    beforeAfter: {
      beforeText: "Data terpisah di puluhan database usang, rekonsiliasi manual 14 hari kerja, data kerap tidak sinkron antar instansi.",
      afterText: "Pusat komando digital interaktif, integrasi real-time 34 OPD dengan sistem verifikasi data otomatis.",
      beforeMetric: "Kompilasi Data: 14 Hari",
      afterMetric: "Kompilasi Data: Real-time (<5 Detik)"
    },
    techStack: ["Next.js", "Node.js", "ClickHouse", "Elasticsearch", "Mapbox GL", "Docker", "Apache NiFi"]
  },
  {
    id: "medika-telehealth-his",
    title: "Hospital Information System (HIS) & Rekam Medis Elektronik (RME)",
    client: "Jaringan Rumah Sakit Swasta Nasional (12 Cabang)",
    category: "Kesehatan & Medis",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    duration: "8 Bulan",
    overview: "Sistem tata kelola rumah sakit terintegrasi dari pendaftaran online, rekam medis elektronik (RME) kepatuhan SatuSehat Kemenkes, hingga farmasi dan klaim BPJS.",
    challenge: "Antrean pasien rawat jalan menumpuk hingga 3 jam, berkas rekam medis kertas rawan terselip atau rusak, dan proses verifikasi klaim BPJS memakan waktu mingguan dengan tingkat penolakan klaim (dispute) 12%.",
    solution: "Implementasi RME berbasis cloud terakreditasi dengan tanda tangan digital tersertifikasi, integrasi API SatuSehat Kemenkes RI, modul bridging vClaim BPJS otomatis, serta aplikasi mandiri pasien untuk pendaftaran dan resep dokter.",
    results: [
      { label: "Pemangkasan Waktu Tunggu Pasien", value: "-68%", subtext: "Waktu rata-rata antre dari 180 menit menjadi 35 menit" },
      { label: "Penurunan Dispute Klaim BPJS", value: "Turun ke 1.1%", subtext: "Verifikasi berkas otomatis meminimalisir kesalahan koding ICD-10" },
      { label: "Kepatuhan RME Kemenkes", value: "100% Terintegrasi", subtext: "Lulus sertifikasi kelayakan SatuSehat Kemenkes RI" }
    ],
    beforeAfter: {
      beforeText: "Rekam medis fisik di lemari arsip 5 lantai, antrean manual berdesakan di loket sejak pukul 05:00 pagi.",
      afterText: "Pendaftaran via WhatsApp bot & Mobile App, RME digital instan diakses dokter dalam 1 detik dengan enkripsi biometric.",
      beforeMetric: "Waktu Antrean: 180 Menit",
      afterMetric: "Waktu Antrean: 35 Menit (Efisiensi 68%)"
    },
    techStack: ["Vue.js", "Django REST Framework", "PostgreSQL", "FHIR / HL7 Standard", "Redis", "MinIO"]
  },
  {
    id: "retail-omnichannel-pos",
    title: "Platform E-Commerce B2B & Omnichannel POS Terintegrasi",
    client: "Distributor FMCG & Retail Terbesar di Indonesia Timur",
    category: "E-Commerce & Retail",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    year: "2023",
    duration: "5 Bulan",
    overview: "Ekosistem pemesanan grosir digital untuk 18.000 toko kelontong mitra dengan manajemen stok terpusat di 14 gudang regional.",
    challenge: "Salesman mencatat pesanan toko menggunakan nota fisik yang baru diproses ke gudang malam hari, menyebabkan keterlambatan pengiriman hingga 3 hari dan risiko kehabisan stok (stockout) tanpa peringatan dini.",
    solution: "Aplikasi seluler pemesanan toko mandiri (self-order), aplikasi salesman dengan rute cerdas GPS, manajemen gudang (WMS) barcode berbasis cloud, serta integrasi pembiayaan invoice financing terpercaya.",
    results: [
      { label: "Kenaikan Omzet Penjualan", value: "+44%", subtext: "Frekuensi pemesanan toko meningkat dari 1x/minggu menjadi 3x/minggu" },
      { label: "Kecepatan Pengiriman Barang", value: "Same-Day Delivery", subtext: "Pesanan sebelum jam 11:00 terkirim pada hari yang sama" },
      { label: "Akurasi Inventori Gudang", value: "99.8%", subtext: "Hampir nol selisih stok fisik vs catatan sistem" }
    ],
    beforeAfter: {
      beforeText: "Proses order manual 3 hari kerja, stok fisik sering tidak cocok dengan pembukuan akuntansi.",
      afterText: "Pesanan masuk detik itu juga langsung dialokasikan ke rak gudang terdekat via barcode scanner mobile.",
      beforeMetric: "Waktu Proses Order: 3 Hari",
      afterMetric: "Waktu Proses: Real-time (Instant Fulfillment)"
    },
    techStack: ["React Native", "NestJS", "MongoDB", "RabbitMQ", "Elasticsearch", "AWS ECS"]
  },
  {
    id: "heavy-equipment-telematics",
    title: "Sistem Pemeliharaan Prediktif Alat Berat & Tambang",
    client: "Kontraktor Pertambangan Terkemuka",
    category: "Manufaktur & Logistik",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    duration: "6 Bulan",
    overview: "Analitik sensor getaran dan suhu mesin alat berat excavator dan dump truck raksasa untuk memprediksi kerusakan mekanis 72 jam sebelum kegagalan fungsi.",
    challenge: "Kerusakan mendadak pada unit alat berat tambang menimbulkan kerugian ratusan juta rupiah per jam downtime, sementara penggantian suku cadang sering terlambat dipesan dari luar negeri.",
    solution: "Memasang perangkat gateway telemetri edge-computing di unit tambang, algoritma machine learning pendeteksi anomali getaran mesin, dan integrasi pengadaan suku cadang otomatis ke sistem ERP.",
    results: [
      { label: "Penurunan Downtime Tak Terduga", value: "-52%", subtext: "Pencegahan kegagalan mesin fatal melalui deteksi dini 3 hari sebelumnya" },
      { label: "Penghematan Biaya Suku Cadang", value: "Rp 3.8 Miliar", subtext: "Pencegahan kerusakan berantai komponen utama mesin" },
      { label: "Usia Pakai Unit Meningkat", value: "+28%", subtext: "Siklus perawatan preventif tepat waktu sesuai beban kerja aktual" }
    ],
    beforeAfter: {
      beforeText: "Perawatan reaktif hanya saat mesin mogok di area tambang terpencil, unit terhenti hingga 2 minggu menunggu sparepart.",
      afterText: "Peringatan prediktif 72 jam sebelum komponen aus, jadwal mekanik terencana sebelum kerusakan terjadi.",
      beforeMetric: "Downtime Bulanan: 86 Jam/Unit",
      afterMetric: "Downtime Bulanan: 18 Jam/Unit"
    },
    techStack: ["Rust", "Python PyTorch", "InfluxDB", "Grafana", "Docker Edge", "Satellite IoT Link"]
  }
];

export const CLIENT_LOGOS = [
  { name: "Bank Central Asia (BCA)", category: "Perbankan", logoText: "BCA" },
  { name: "Telkom Indonesia", category: "Telekomunikasi", logoText: "Telkom" },
  { name: "Pertamina Retail", category: "Energi & Retail", logoText: "Pertamina" },
  { name: "Bank Mandiri", category: "Perbankan", logoText: "Mandiri" },
  { name: "BPJS Kesehatan", category: "Publik & Asuransi", logoText: "BPJS" },
  { name: "Astra International", category: "Otomotif & Industri", logoText: "Astra" },
  { name: "Kalbe Farma", category: "Kesehatan & Farmasi", logoText: "Kalbe" },
  { name: "Kementerian Kominfo", category: "Institusi Pemerintah", logoText: "Kominfo" }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-raden-wirawan",
    name: "Ir. Raden Wirawan, M.Sc., Ph.D.",
    role: "Founder & Chief Executive Officer (CEO)",
    division: "Eksekutif",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Berpengalaman lebih dari 20 tahun di industri teknologi informasi global dan nasional. Pernah menjabat sebagai Senior Solutions Architect di Silicon Valley sebelum kembali ke Indonesia untuk mendirikan PT Anonim.",
    expertise: ["Strategi Enterprise IT", "Venture Building", "Tata Kelola Korporat", "Kecerdasan Buatan"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "anindya-prasetyo",
    name: "Anindya Prasetyo, S.Kom., M.T.",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    division: "Eksekutif",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Pakar arsitektur komputasi awan dan sistem terdistribusi bersertifikasi AWS Solutions Architect Professional & CISA. Memimpin riset teknologi mendalam dan tim 80+ insinyur perangkat lunak di PT Anonim.",
    expertise: ["Cloud Native Architecture", "High-Throughput Systems", "Cybersecurity", "Zero-Trust"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "faisal-syahputra",
    name: "Faisal Syahputra, S.T., PMP®",
    role: "Chief Operating Officer (COO)",
    division: "Eksekutif",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Praktisi manajemen proyek bersertifikasi PMP dan Scrum Master yang telah mengawal ratusan proyek digital berskala nasional di sektor BUMN, perbankan, dan telekomunikasi.",
    expertise: ["Agile Delivery", "Operational Excellence", "SLA Governance", "Vendor Management"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "clara-mariska",
    name: "Clara Mariska, S.Ds., M.Des.",
    role: "Head of Product Design & Research",
    division: "Produk & Desain",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Lulusan desain interaksi dengan pengalaman 9 tahun menciptakan produk digital yang dicintai jutaan pengguna di Indonesia, dengan fokus pada psikologi konsumen lokal dan sistem desain enterprise.",
    expertise: ["Design System", "User Research", "Interaction Architecture", "Usability Heuristics"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "bayu-ramadhan",
    name: "Bayu Ramadhan, S.Kom., CISSP®",
    role: "Principal Security & Cloud Architect",
    division: "Teknologi & Engineering",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "Spesialis keamanan siber dengan sertifikasi CISSP dan CEH. Memimpin audit keamanan pertahanan, pengujian penetrasi, dan kepatuhan ISO 27001 untuk seluruh portofolio klien PT Anonim.",
    expertise: ["Penetration Testing", "Threat Modeling", "DevSecOps", "Cloud Security"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "dewi-sartika",
    name: "Dewi Sartika, S.E., MBA",
    role: "Head of Digital Transformation & Client Success",
    division: "Konsultansi & Bisnis",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    bio: "Konsultan strategi manajemen dengan rekam jejak mendampingi jajaran C-Level korporasi dalam menyusun roadmap digital terukur dan proses rekayasa ulang bisnis yang bernilai tambah.",
    expertise: ["Strategic Roadmapping", "Business Re-engineering", "Stakeholder Alignment", "Value Realization"],
    linkedin: "https://linkedin.com"
  }
];

export const WORK_CULTURE = [
  {
    title: "Budaya Inovasi & Eksperimen Cepat",
    desc: "Kami mendedikasikan 10% waktu kerja (Innovation Fridays) bagi setiap tim untuk bereksperimen dengan teknologi baru, open-source, dan riset AI terapan.",
    icon: "Lightbulb"
  },
  {
    title: "Kerja Hibrida Fleksibel (Hybrid & Remote)",
    desc: "Keseimbangan kehidupan kerja nyata. Anda dapat bekerja dari kantor SCBD kami yang modern atau secara terdistribusi dari kota domisili Anda di seluruh Indonesia.",
    icon: "Laptop"
  },
  {
    title: "Tunjangan Belajar & Sertifikasi Global",
    desc: "Dana tahunan khusus hingga puluhan juta rupiah bagi setiap talenta untuk mengambil sertifikasi internasional resmi (AWS, GCP, Scrum, CISSP, PMP) dan menghadiri konferensi tech.",
    icon: "GraduationCap"
  },
  {
    title: "Kesehatan Komprehensif Keluarga",
    desc: "Asuransi kesehatan swasta rawat jalan, rawat inap, gigi, dan kacamata untuk karyawan beserta keluarga inti, di luar fasilitas BPJS Ketenagakerjaan.",
    icon: "HeartHandshake"
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "job-lead-fullstack",
    title: "Lead Fullstack Engineer (Golang & Next.js)",
    department: "Engineering",
    type: "Hybrid",
    location: "Jakarta Selatan (SCBD) / Hybrid",
    experience: "5+ Tahun Pengalaman",
    summary: "Memimpin squad rekayasa perangkat lunak dalam merancang arsitektur microservices berskala tinggi untuk klien sektor perbankan dan enterprise.",
    responsibilities: [
      "Merancang arsitektur backend Golang berkinerja tinggi dan frontend Next.js/React yang modular",
      "Melakukan code review berkala dan menetapkan standar pengujian otomatis (TDD/BDD)",
      "Bekerja sama dengan Cloud Architect dalam orkestrasi container Kubernetes dan pipeline CI/CD",
      "Mementori engineer junior dan menengah dalam tim"
    ],
    requirements: [
      "Pengalaman kuat dengan Golang, TypeScript, PostgreSQL, Redis, dan Kafka",
      "Memahami konsep Microservices, Event-Driven Architecture, dan Domain-Driven Design (DDD)",
      "Familiar dengan Docker, Kubernetes, dan cloud provider (AWS/GCP)",
      "Kemampuan komunikasi dan kepemimpinan tim yang baik"
    ],
    perks: [
      "Gaji kompetitif + Bonus performa tahunan",
      "Asuransi kesehatan swasta keluarga",
      "Tunjangan sertifikasi internasional tahunan",
      "Laptop kerja MacBook Pro M-Series"
    ],
    postedDate: "Aktif Dibuka (Update Oktober 2026)"
  },
  {
    id: "job-sr-uiux-designer",
    title: "Senior Product Designer (UI/UX & Design System)",
    department: "Product Design",
    type: "Remote",
    location: "Seluruh Indonesia (Remote OK)",
    experience: "4+ Tahun Pengalaman",
    summary: "Bertanggung jawab merancang antarmuka produk digital berkelas dunia, memimpin riset kualitatif/kuantitatif, serta mengembangkan Design System multi-platform.",
    responsibilities: [
      "Mengubah kebutuhan bisnis kompleks menjadi alur kerja pengguna yang intuitif dan elegan",
      "Membuat design system dengan token, autolayout, dan komponen interaktif di Figma",
      "Memimpin sesi riset pengguna, wawancara mendalam, dan usability testing langsung",
      "Berkolaborasi erat dengan developer untuk memastikan akurasi implementasi desain (design QA)"
    ],
    requirements: [
      "Portofolio desain produk digital nyata yang mendemonstrasikan proses problem-solving",
      "Keahlian mendalam dalam Figma, prototyping tingkat lanjut, dan design token",
      "Kemampuan menerjemahkan data analitik produk ke dalam iterasi desain UX",
      "Pengalaman di sektor fintech atau e-commerce bernilai tambah besar"
    ],
    perks: [
      "Work-from-anywhere (Remote fleksibel)",
      "Tunjangan setup home office",
      "Budget langganan software & kursus desain",
      "Asuransi kesehatan lengkap"
    ],
    postedDate: "Aktif Dibuka"
  },
  {
    id: "job-cloud-devsecops",
    title: "Senior Cloud & DevSecOps Engineer",
    department: "Cloud Infrastructure",
    type: "Hybrid",
    location: "Jakarta / Surabaya",
    experience: "4+ Tahun Pengalaman",
    summary: "Mengelola infrastruktur cloud enterprise, mengotomatiskan provisioning via Terraform, dan memastikan kepatuhan standar keamanan siber tertinggi.",
    responsibilities: [
      "Mendesain dan memelihara cluster Kubernetes multi-region di AWS/GCP/Private Cloud",
      "Membangun pipeline CI/CD aman dengan scanner otomatis SAST/DAST dan audit dependensi",
      "Mengoptimalkan biaya infrastruktur (FinOps) dan memantau SLA uptime 99.95%",
      "Menyusun prosedur Disaster Recovery dan simulasi failover berkala"
    ],
    requirements: [
      "Sertifikasi AWS/GCP/Kubernetes (CKA) sangat diutamakan",
      "Keahlian dalam Terraform, Ansible, GitOps (ArgoCD), dan Helm",
      "Pengalaman dengan tool monitoring: Prometheus, Grafana, ELK Stack, Datadog",
      "Pemahaman mendalam mengenai standar keamanan ISO 27001 dan CIS Benchmark"
    ],
    perks: [
      "Paket remunerasi menarik + On-call allowance",
      "Dukungan penuh sertifikasi lanjutan",
      "Lingkungan kerja kolaboratif tanpa birokrasi kaku"
    ],
    postedDate: "Aktif Dibuka"
  },
  {
    id: "job-solution-architect",
    title: "Enterprise Solutions Architect (B2B & Public Sector)",
    department: "Advisory & Solutions",
    type: "Full-time",
    location: "Jakarta Selatan (SCBD)",
    experience: "7+ Tahun Pengalaman",
    summary: "Menjadi jembatan strategis antara pimpinan bisnis klien dan tim teknologi dalam merumuskan arsitektur solusi bernilai tinggi.",
    responsibilities: [
      "Menghadiri sesi konsultasi tingkat eksekutif dengan calon mitra korporasi dan BUMN",
      "Menulis proposal teknis, estimasi scope-of-work (SOW), dan arsitektur cetak biru sistem",
      "Memberikan arahan teknis strategis kepada engineering squads selama fase inisiasi proyek",
      "Menjadi representasi thought-leadership perusahaan di forum dan seminar industri"
    ],
    requirements: [
      "Rekam jejak terbukti merancang arsitektur sistem skala jutaan pengguna",
      "Pemahaman kuat atas regulasi perbankan BI/OJK dan arsitektur SPBE pemerintahan",
      "Keahlian komunikasi presentasi yang meyakinkan di depan dewan direksi / C-Level",
      "Gelar Sarjana/Master di bidang Teknik Informatika atau serumpun"
    ],
    perks: [
      "Executive compensation package + Performance profit sharing",
      "Mobil operasional / Tunjangan transportasi representatif",
      "Jejaring profesional eksekutif tingkat nasional"
    ],
    postedDate: "Aktif Dibuka"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "ai-enterprise-transformation-2026",
    title: "Panduan Eksekutif Mengadopsi AI Generatif di Sektor Korporasi Indonesia Tanpa Melanggar Regulasi PDP",
    slug: "panduan-eksekutif-adopsi-ai-korporasi-indonesia-pdp",
    summary: "Bagaimana perusahaan papan atas memanfaatkan AI untuk efisiensi operasional sambil memastikan kepatuhan mutlak terhadap UU Pelindungan Data Pribadi (UU PDP).",
    content: [
      "Kemajuan pesat model kecerdasan buatan telah mengubah lanskap kompetisi bisnis di Asia Tenggara. Namun bagi para eksekutif korporasi di Indonesia, pertanyaan terbesarnya bukanlah lagi 'Apakah AI bisa membantu kita?', melainkan 'Bagaimana kita menerapkan AI tanpa mempertaruhkan data rahasia nasabah dan melanggar UU PDP?'.",
      "1. Pendekatan Private LLM & On-Premise Data Shielding: Mengirimkan data sensitif pelanggan ke server publik di luar yurisdiksi Republik Indonesia membawa risiko hukum yang masif. Di PT Anonim, kami mengimplementasikan arsitektur 'Enclave AI' di mana model di-deploy di cloud lokal berizin dengan teknik RAG (Retrieval-Augmented Generation) yang terenkripsi.",
      "2. Tata Kelola Data & Audit Jejak Rekam: Setiap interaksi data harus terekam secara immutable. Perusahaan harus memisahkan PII (Personally Identifiable Information) sebelum dimasukkan ke dalam pipeline inferensi AI melalui algoritma pseudonimisasi otomatis.",
      "3. Mengukur ROI Nyata, Bukan Sekadar Hype: Implementasi AI yang sukses selalu dimulai dari permasalahan operasional bernilai tinggi—seperti otomatisasi pemrosesan klaim asuransi, deteksi fraud transaksi keuangan real-time, atau asisten pencarian knowledge-base teknis ribuan halaman bagi staf lapangan.",
      "Kesimpulan: Inovasi kecerdasan buatan bukan tentang menggantikan manusia, melainkan melipatgandakan kapabilitas talenta terbaik Anda. Dengan fondasi tata kelola yang tepat, korporasi Indonesia siap memimpin era ekonomi digital masa depan."
    ],
    category: "Kecerdasan Buatan",
    author: {
      name: "Ir. Raden Wirawan, Ph.D.",
      role: "Founder & CEO, PT Anonim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    publishedAt: "8 Oktober 2026",
    readTimeMinutes: 5,
    tags: ["Artificial Intelligence", "UU PDP", "Enterprise Architecture", "Governance"],
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "migrasi-microservices-perbankan",
    title: "Strategi Dekomposisi Sistem Monolitik Perbankan Menuju Microservices Tanpa Downtime Transaksi",
    slug: "dekomposisi-monolitik-ke-microservices-perbankan",
    summary: "Studi praktis pola Strangling Fig Pattern dalam memperbarui core banking tradisional agar mampu memproses 20.000+ TPS saat kampanye gajian.",
    content: [
      "Banyak institusi finansial dan retail besar di Indonesia masih mengandalkan sistem lama (legacy monolith) yang dibangun belasan tahun silam. Ketika lonjakan transaksi digital terjadi pada tanggal 25 dan 1 setiap bulan, sistem ini kerap menjadi 'bottleneck' yang melumpuhkan layanan.",
      "Mengapa metode 'Big Bang Rewrite' hampir selalu berujung bencana? Mengganti sistem raksasa sekaligus dalam satu malam membawa risiko kegagalan operasional yang fatal bagi reputasi bank. Pendekatan yang jauh lebih aman adalah 'Strangler Fig Pattern'.",
      "Langkah 1: Menempatkan API Gateway Cerdas sebagai tameng di depan sistem lama. Seluruh traffic nasabah masuk melalui gateway ini secara transparan.",
      "Langkah 2: Mengisolasi modul bisnis yang paling sering mengalami beban tinggi—misalnya pengecekan saldo dan mutasi rekening—menjadi microservices independen berteknologi in-memory database.",
      "Langkah 3: Sinkronisasi data real-time berbasis event (Change Data Capture dengan Kafka) antara basis data modern dan core banking lawas.",
      "Hasilnya: Layanan nasabah menjadi 5x lebih responsif, uptime melonjak hingga 99.99%, dan bank dapat meluncurkan fitur produk finansial baru setiap 2 minggu sekali tanpa menunggu jadwal maintenance tengah malam."
    ],
    category: "Cloud & Arsitektur",
    author: {
      name: "Anindya Prasetyo, M.T.",
      role: "CTO, PT Anonim",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    publishedAt: "2 Oktober 2026",
    readTimeMinutes: 6,
    tags: ["Microservices", "Fintech", "High Availability", "Strangler Pattern"],
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "zero-trust-cybersecurity-defense",
    title: "Membangun Pertahanan Zero-Trust: Menangkis Serangan Ransomware di Era Kerja Hybrid",
    slug: "pertahanan-zero-trust-ransomware-era-hybrid",
    summary: "Prinsip 'Never Trust, Always Verify' untuk mengamankan data perusahaan ketika ribuan karyawan mengakses sistem dari berbagai lokasi.",
    content: [
      "Paradigma keamanan lama yang mengasumsikan siapa pun yang berada di dalam jaringan kantor adalah pihak tepercaya kini telah usang. Dengan tren kerja hybrid dan perangkat seluler pribadi (BYOD), perimeter keamanan tradisional telah lenyap.",
      "Zero-Trust Architecture dibangun di atas tiga pilar utama: Verifikasi eksplisit setiap permintaan akses, penerapan hak istimewa terkecil (least-privileged access), dan pengasumsian bahwa pelanggaran keamanan telah terjadi (assume breach).",
      "Penerapan Micro-segmentation pada jaringan internal membatasi pergerakan lateral peretas jika salah satu laptop karyawan terkena malware, sehingga server basis data utama tetap terlindungi aman.",
      "Diperlukan pula integrasi autentikasi multi-faktor berbasis FIDO2 hardware token untuk staf pemegang akses istimewa guna menghentikan 99.9% serangan phishing modern."
    ],
    category: "Keamanan Siber",
    author: {
      name: "Bayu Ramadhan, CISSP®",
      role: "Principal Security Architect",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    publishedAt: "24 September 2026",
    readTimeMinutes: 4,
    tags: ["Cybersecurity", "Zero Trust", "Ransomware Defense", "ISO 27001"],
    featuredImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "roi-transformasi-digital-bumn",
    title: "Mengukur ROI Nyata Transformasi Digital: Dari Angka di Kertas Menjadi Nilai Pemegang Saham",
    slug: "mengukur-roi-nyata-transformasi-digital-korporasi",
    summary: "Kerangka kerja terstruktur untuk membuktikan bahwa investasi teknologi menghasilkan penghematan biaya operasional dan pertumbuhan pendapatan.",
    content: [
      "Sering kali dewan komisaris dan direksi keuangan (CFO) mengeluhkan besarnya anggaran belanja IT yang tidak diimbangi dengan kejelasan pengembalian modal investasi.",
      "Untuk menghindari 'inisiatif digital kosmetik', kami merekomendasikan empat metrik evaluasi utama: Efisiensi Biaya Proses (Cost-to-Serve), Kecepatan Siklus Inovasi (Time-to-Value), Tingkat Retensi Pelanggan (Net Retention Rate), dan Pengurangan Risiko Operasional.",
      "Dengan menghubungkan setiap baris kode yang ditulis ke metrik bisnis spesifik, tim IT bertransformasi dari sekadar 'pusat biaya' (cost center) menjadi motor penggerak pendapatan utama korporasi."
    ],
    category: "Wawasan Bisnis",
    author: {
      name: "Dewi Sartika, MBA",
      role: "Head of Transformation Advisory",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80"
    },
    publishedAt: "15 September 2026",
    readTimeMinutes: 5,
    tags: ["Digital Transformation", "Business Value", "CFO Strategy", "ROI"],
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2012",
    title: "Pendirian Perusahaan",
    desc: "Didirikan di Jakarta dengan tim inti 6 insinyur perangkat lunak, berfokus pada pengembangan sistem web kustom untuk UKM dan korporasi menengah."
  },
  {
    year: "2015",
    title: "Ekspansi Sektor Perbankan & Finansial",
    desc: "Memenangkan kontrak pengembangan perbankan mobile pertama dan memperoleh sertifikasi manajemen mutu ISO 9001:2015."
  },
  {
    year: "2018",
    title: "Peluncuran Divisi Cloud & Cybersecurity",
    desc: "Membuka kantor cabang Surabaya dan meresmikan divisi spesialis infrastruktur komputasi awan dan audit keamanan siber."
  },
  {
    year: "2021",
    title: "Mitra Transformasi Digital BUMN & Smart City",
    desc: "Ditunjuk menggarap platform Satu Data daerah dan sistem telematika armada logistik nasional melintasi 1.000+ armada operasional."
  },
  {
    year: "2024",
    title: "Sertifikasi ISO 27001 & AI Enterprise Lab",
    desc: "Meraih akreditasi keamanan informasi ISO 27001:2022 dan mendirikan laboratorium riset kecerdasan buatan terapan untuk korporasi."
  },
  {
    year: "2026",
    title: "14 Tahun Melayani Nusantara",
    desc: "Kini didukung 120+ talenta terbaik, melayani lebih dari 480 proyek sukses dengan kepuasan klien 98.7% di seluruh Indonesia."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Agus Prasetyo, S.E., Akt.",
    role: "Direktur Operasional & TI",
    company: "PT Mega Graha Finansia",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "PT Anonim adalah mitra teknologi paling profesional yang pernah kami ajak kerja sama. Aplikasi mobile banking baru kami berjalan sangat mulus dengan SLA 99.98%, dan nasabah sangat memuji kemudahan antarmukanya.",
    projectTag: "Mobile Banking Omnichannel"
  },
  {
    id: "testi-2",
    name: "Dr. dr. Maya Anggraeni, Sp.A., MARS",
    role: "Direktur Utama Jaringan Rumah Sakit",
    company: "Medika Sejahtera Hospital Group",
    avatar: "https://images.unsplash.com/photo-1594824813681-30c6913c7bb6?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Implementasi Rekam Medis Elektronik (RME) dan integrasi SatuSehat berjalan tanpa kendala di 12 cabang kami. Waktu tunggu pasien terpangkas 68% dan tim dokter kami sangat terbantu dengan kemudahan input data.",
    projectTag: "Hospital Information System"
  },
  {
    id: "testi-3",
    name: "Ir. Gunawan Setiabudi",
    role: "VP Supply Chain & Logistics",
    company: "Nusantara Logistics Raya",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Platform telematika armada dari tim PT Anonim menghemat tagihan bahan bakar kami hingga 22% dalam semester pertama peluncuran. Fitur deteksi anomali rute real-time mereka benar-benar menyelamatkan efisiensi bisnis kami.",
    projectTag: "IoT Fleet Management"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-iso-9001",
    title: "ISO 9001:2015",
    issuer: "Lloyd's Register Quality Assurance (LRQA)",
    regNumber: "ID09/01488",
    year: "Sertifikasi Sistem Manajemen Mutu",
    icon: "Award",
    badge: "Manajemen Mutu Internasional",
    description: "Menjamin proses rekayasa perangkat lunak dan manajemen proyek konsisten memenuhi standar kualitas tertinggi dunia."
  },
  {
    id: "cert-iso-27001",
    title: "ISO/IEC 27001:2022",
    issuer: "BSI Group Indonesia",
    regNumber: "IS 712904",
    year: "Sistem Manajemen Keamanan Informasi (SMKI)",
    icon: "ShieldAlert",
    badge: "Keamanan Informasi & Data",
    description: "Sertifikasi standar global untuk tata kelola perlindungan kerahasiaan, integritas, dan ketersediaan data klien dan sistem."
  },
  {
    id: "cert-nib-oss",
    title: "NIB OSS-RBA Berizin Lengkap",
    issuer: "Kementerian Investasi / BKPM RI",
    regNumber: "NIB: 0220108920138",
    year: "Izin Berusaha Berbasis Risiko (KBLI 62019, 62029)",
    icon: "FileCheck2",
    badge: "Legalitas Resmi RI",
    description: "Memiliki legalitas hukum lengkap untuk aktivitas pemrograman komputer, konsultasi komputer, dan pengolahan data terdistribusi."
  },
  {
    id: "cert-pse-kominfo",
    title: "Penyelenggara Sistem Elektronik (PSE)",
    issuer: "Kementerian Komunikasi dan Digital RI",
    regNumber: "No. 008129.01/DJAI.PSE/10/2021",
    year: "PSE Domestik Terdaftar Resmi",
    icon: "CheckCircle",
    badge: "Kepatuhan Regulasi Digital",
    description: "Terdaftar resmi sebagai PSE Domestik yang taat pada seluruh regulasi transaksi dan keamanan elektronik Republik Indonesia."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Bagaimana proses awal kerja sama jika kami ingin mengajukan proyek?",
    answer: "Proses dimulai dari diskusi konsultasi awal (Discovery Meeting) baik secara tatap muka di kantor Anda/kami atau secara virtual. Tim Solution Architect kami akan mengkaji ruang lingkup kebutuhan, dilanjutkan dengan penyusunan Dokumen Penawaran Teknis (Proposal & Estimasi Biaya/Timeline) dalam waktu 3-5 hari kerja tanpa dipungut biaya."
  },
  {
    question: "Apakah PT Anonim menyediakan Perjanjian Kerahasiaan (NDA)?",
    answer: "Tentu saja. Kami selalu menandatangani Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) yang mengikat secara hukum sebelum diskusi teknis atau pertukaran data internal perusahaan Anda dimulai untuk melindungi kerahasiaan ide dan data bisnis Anda."
  },
  {
    question: "Siapa yang memiliki hak cipta (IP) dan source code dari aplikasi yang dikembangkan?",
    answer: "100% hak kekayaan intelektual (Intellectual Property), lisensi, dan source code aplikasi sepenuhnya menjadi milik klien Anda setelah proyek selesai dan serah terima dilakukan. Kami tidak menerapkan sistem 'vendor lock-in'."
  },
  {
    question: "Apakah tersedia garansi pemeliharaan dan SLA setelah aplikasi diluncurkan?",
    answer: "Ya. Setiap paket proyek kami mencakup Garansi Bebas Bug (Free Bug-Warranty) selama 3 hingga 12 bulan setelah tanggal serah terima (Go-Live). Selain itu, kami menyediakan layanan Managed Maintenance dengan SLA respons cepat hingga di bawah 15 menit untuk sistem kritis."
  },
  {
    question: "Metode pengembangan apa yang diterapkan selama proses pengerjaan?",
    answer: "Kami menggunakan metodologi Agile Scrum dengan siklus sprint 2 mingguan. Anda akan mendapatkan akses ke board manajemen proyek (Jira/Trello), staging environment untuk mencoba langsung fitur yang selesai, dan meeting demo evaluasi berkala bersama Product Owner."
  },
  {
    question: "Apakah sistem yang dibangun mematuhi regulasi lokal seperti UU PDP dan standar BI/OJK?",
    answer: "Seluruh arsitektur yang kami bangun dirancang mengacu pada prinsip Privacy-by-Design sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), kepatuhan ISO 27001, serta pedoman ketahanan siber OJK dan Bank Indonesia bagi sektor keuangan."
  }
];

export const CORE_VALUES = [
  {
    title: "Integritas Tanpa Kompromi",
    desc: "Menjunjung transparansi etika kerja, kerahasiaan data mutlak, dan kejujuran dalam setiap komitmen kesepakatan bersama mitra.",
    icon: "Shield"
  },
  {
    title: "Inovasi Berorientasi Nilai",
    desc: "Tidak terjebak tren semata; kami hanya menerapkan teknologi terdepan yang terbukti memberikan ROI nyata dan daya saing jangka panjang.",
    icon: "Zap"
  },
  {
    title: "Keunggulan Eksekusi (Craftsmanship)",
    desc: "Standar kode bersih, pengujian tanpa celah, dan estetika desain kelas dunia adalah kehormatan profesi kami dalam setiap baris solusi.",
    icon: "CheckCheck"
  },
  {
    title: "Kolaborasi Sinergis",
    desc: "Memposisikan diri bukan sekadar vendor, melainkan perpanjangan tangan strategis yang tumbuh bersama keberhasilan mitra usaha.",
    icon: "Users2"
  }
];
