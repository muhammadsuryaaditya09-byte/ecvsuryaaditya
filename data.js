
/* ============================================================
   data.js : semua isi e-CV ada di sini. Edit file ini saja.

   FOTO DAN GAMBAR
   1. Buat folder "images" di sebelah index.html.
   2. Taruh fotomu di sana, lalu tulis nama filenya di bawah.
      photo  : foto profil (disarankan tegak, minimal 800x1000)
      image  : gambar proyek (disarankan 600x300) atau gambar
               sertifikat (JPG/PNG)
   3. Jika file tidak ditemukan atau dikosongkan (""), halaman
      memakai tampilan cadangan (inisial nama atau judul).

   TAMPILAN HOME
   photo    : paling bagus PNG tanpa latar (hapus latar di remove.bg),
              sehingga badanmu menimpa lingkaran lime dan teks nama.
              Foto JPG biasa tetap bisa dipakai.
   role     : jabatan di bawah nama.
   location, status : tulisan kecil di atas nama. Kosongkan ("") jika
              tidak ingin ditampilkan.
   Kolom kanan Home: Tentang saya diambil dari bio, Karya saya dari
   proj pertama, ikon sosial dari contact.

   MENAMBAH ITEM
   Salin satu blok {...} di dalam proj atau certs, lalu isi.
   Kosongkan url ("") jika belum punya tautan.
   ============================================================ */

const DATA = {
    name: "Muhammad Surya Aditya",
    photo: "images/fotogagah.png",
    role: "Mahasiswa Sistem Informasi",
    location: "Ciamis, Jawa Barat, Indonesia",
    status: "Terbuka untuk magang dan proyek",
    cvPdf: "images/cvsurya.pdf",


    photoEffect: {
        enabled: true,
        tilt: 18,
        scale: 1.08,
        lift: 12,
        glow: true,
        glowIntensity: 0.75,
        transition: 350,
        perspective: 1000
    },

    headline: "Selain menjadi mahasiswa saya juga suka bermain sepak bola. Saya memiliki pengalaman sebagai pemain PSGC Ciamis dan Pesik Kuningan, yang telah membentuk karakter kerja sama dan mentalitas pantang menyerah.",

    bio: "Saya adalah Mahasiswa akhir Sistem Informasi dengan minat pada web development, UI/UX, dan sistem informasi. Disiplin, adaptif, serta mampu bekerja individu maupun tim. Pengalaman sebagai pemain PSGC Ciamis dan Pesik Kuningan membentuk karakter kerja sama dan mentalitas pantang menyerah.",
    interest: "Pengembangan web, desain antarmuka, dan Sepak Bola.",

    mainSkill: [
        "Dasar HTML dan CSS",
        "Pengembangan Website",
        "PHP dan Laravel",
        "Database MySQL",
        "UI/UX Design",
    ],

    goal: "Menjadi profesional di bidang teknologi informasi yang kompeten, bertanggung jawab, dan mampu memberikan kontribusi positif melalui pengembangan solusi digital yang inovatif. Saya ingin terus meningkatkan kemampuan, memperluas pengalaman, serta membangun karier yang berkelanjutan.",

    edu: [
        {
            y: "2024 – sekarang",
            t: "Bina Sarana Informatika Tasikmalaya",
            d: "Sarjana (S1+) Program Studi Sistem Informasi."
        },
        {
            y: "2022 – 2024",
            t: "SMAN 2 CIAMIS",
            d: "Jurusan Ilmu Pengetahuan Alam (IPA)."
        }
    ],

    hard: [
        "Dasar HTML dan CSS",
        "Dasar JavaScript",
        "Dasar Figma",
        "Microsoft Excel",
        "Dasar SQL",
        "Microsoft Word",
        "UI/UX Design",
    ],

    soft: [
        "Komunikasi",
        "Kerja sama tim",
        "Manajemen waktu",
        "Pemecahan masalah",
        "Kepemimpinan",
        "Mampu bekerja di bawah tekanan"
    ],

    exp: [
        {
            y: "2026-Sekarang",
            t: "Magang di Diskominfo Kabupaten Ciamis",
            d: "Melaksanakan kegiatan magang pada Bidang Informasi dan Komunikasi Publik (IKP). Terlibat dalam kegiatan dokumentasi pemerintahan daerah, pembuatan konten media sosial, pengolahan foto, serta editing video untuk mendukung kebutuhan publikasi dan penyebaran informasi. "
        },
        {
            y: "2025",
            t: "Pemain DSK Kuningan",
            d: "Menjadi bagian dari tim sepak bola DSK Kuningan dengan pengalaman dalam kompetisi tingkat regional. Mengembangkan kemampuan kerja sama tim, disiplin, mentalitas bertanding, serta komitmen untuk mencapai target bersama."
        },
        {
            y: "2024-2025",
            t: "Pemain PESIK Kuningan",
            d: "Menjadi bagian dari tim sepak bola Pesik Kuningan dengan pengalaman dalam kompetisi tingkat regional maupun nasional. Mengembangkan kemampuan kerja sama tim, disiplin, mentalitas bertanding, serta komitmen untuk mencapai target bersama."
        },
        {
            y: "2023-2024",
            t: "Pemain PSGC Ciamis",
            d: "Menjadi pemain PSGC Ciamis dengan pengalaman dalam kompetisi tingkat regional maupun nasional. Mengembangkan kemampuan kerja sama tim, disiplin, mentalitas bertanding, serta komitmen untuk mencapai target bersama."
        }
    ],


    achievements: [

        {
            year: "2023",
            rank: "JUARA 3",
            title: "Liga 3 Jawa Barat",
            club: "PSGC Ciamis",
            image: "images/Juara3.jpeg",
            description: "Meraih posisi juara ketiga dalam kompetisi Liga 3 Jawa Barat bersama PSGC Ciamis."
        },

        {
            year: "2024",
            rank: "PERINGKAT 4",
            title: "Liga 4 Jawa Barat",
            club: "Pesik Kuningan",
            image: "images/Peringkat4.jpeg",
            description: "Berhasil mencapai peringkat keempat dalam kompetisi Liga 4 Jawa Barat."
        },

        {
            year: "2025",
            rank: "JUARA 1",
            title: "Liga 4 Seri Kuningan",
            club: "Diklat Sepak Bola Kuningan",
            image: "images/Juara1.jpeg",
            description: "Meraih posisi juara pertama dalam kompetisi Liga 4 Seri Kuningan."
        }

    ],


    proj: [
        
        {
            t: "Sistem Informasi Penilaian Kinerja Guru berbasis Evidence",
            d: "Website ini digunakan untuk menilai kinerja guru berbasis evidence.",
            role: "membuat perancangan website, membuat erd dan lrs, membuat laporan akhir.",
            tools: "visual studio code, figma, mysql, phpmyadmin, xampp, Github",
            image: "images/fotosimpeg.jpeg",
            url: ""
        },
        {
            t: "Sistem Informasi Rekapitulasi Laporan Bidang Informasi dan Komunikasi Publik",
            d: "Website ini digunakan untuk merekapitulasi laporan yang dihasilkan oleh bidang informasi dan komunikasi publik.",
            role: "Berperan dalam perancangan website, seperti membuat prototipe, Erd, Lrs.",
            tools: "Blade, PHP, MySQL, Visual Studio Code.",
            image: "images/fotosirekap.png",
            url: ""
        }
    ],

    certs: [
        {
            title: "Sertifikat Inklusi Pasar Modal",
            issuer: "Penerbit sertifikat",
            year: "2024",
            image: "images/sertifikat inklusi pasar modal.png",
            url: ""
        },
        {
            title: "Sertifikat Software Engineering",
            issuer: "Penerbit sertifikat",
            year: "2026",
            image: "images/Sertifikat software.png",
            url: ""
        }
        
    ],

    contact: [
        {
            n: "Email",
            v: "muhammadsuryaaditya09@gmail.com",
            url: "mailto:muhammadsuryaaditya09@gmail.com",
            copy: true
        },
        {
            n: "LinkedIn",
            v: "linkedin.com/in/muhammad-surya-aditya",
            url: "https://www.linkedin.com/in/muhammad-surya-aditya-3a6a8144b"
        },
        {
            n: "GitHub",
            v: "github.com/muhammadsuryaaditya09-byte",
            url: "https://github.com/muhammadsuryaaditya09-byte"
        },
        {
            n: "Instagram",
            v: "@sryadtya",
            url: "https://www.instagram.com/sryadtyaa?dlrf=am0zYjFwa3JsMTdl&utm_source=qr"
        }
        
    ]
    


};
