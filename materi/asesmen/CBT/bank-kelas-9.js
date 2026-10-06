window.BANK_KELAS_9 = {
  info: { kelas: "9", label: "Kelas 9" },
  paket: [
    {
      id: "paket-01",
      judul: "Transformasi",
      deskripsi: "Refleksi (pencerminan), translasi (pergeseran), rotasi (perputaran), dan dilatasi.",
      soal: [
        { tipe: "pgk", q: "Diketahui titik P(2, 5). Manakah pernyataan berikut yang benar tentang hasil pencerminan titik P?", options: ["Bayangan P terhadap garis y = x adalah (2, 5).", "Bayangan P terhadap sumbu-x adalah (2, −5).", "Bayangan P terhadap garis y = −x adalah (−5, −2).", "Bayangan P terhadap titik asal O adalah (2, −5)."], kunci: [1, 2], bahas: "Pencerminan: terhadap sumbu-x (a, b) → (a, −b) = (2, −5); terhadap garis y = −x (a, b) → (−b, −a) = (−5, −2). Terhadap garis y = x seharusnya (5, 2) dan terhadap titik O seharusnya (−2, −5)." },
        { tipe: "pgk", q: "Titik A(−3, 4) ditranslasikan oleh T = (5, −2) menghasilkan bayangan A′. Manakah pernyataan berikut yang benar?", options: ["A′ = (2, 2).", "Translasi memindahkan titik 5 satuan ke kanan dan 2 satuan ke bawah.", "A′ = (−8, 6).", "Jarak AA′ adalah √29 satuan."], kunci: [0, 1, 3], bahas: "A′ = (−3 + 5, 4 − 2) = (2, 2); jarak AA′ = √(5² + (−2)²) = √29 satuan." },
        { tipe: "pgk", q: "Segitiga dengan titik sudut K(1, 1), L(4, 1), dan M(1, 3) didilatasikan dengan pusat O(0, 0) dan faktor skala 2. Manakah pernyataan berikut yang benar?", options: ["K′ = (2, 2).", "L′ = (8, 4).", "Luas segitiga bayangan 4 kali luas segitiga semula.", "M′ = (2, 6)."], kunci: [0, 2, 3], bahas: "Dilatasi [O, 2]: (a, b) → (2a, 2b), jadi K′(2, 2), L′(8, 2), M′(2, 6); luas berubah sebesar 2² = 4 kali." },
        { tipe: "bs", q: "Pernyataan: Hasil rotasi titik (6, 2) sebesar 90° berlawanan arah jarum jam dengan pusat O(0, 0) adalah (−2, 6).", kunci: true, bahas: "Rotasi 90° berlawanan arah jarum jam memetakan (a, b) ke (−b, a), sehingga (6, 2) menjadi (−2, 6)." },
        { tipe: "bs", q: "Pernyataan: Pencerminan titik (3, 4) terhadap garis x = −1 menghasilkan titik (−5, −4).", kunci: false, bahas: "Pencerminan terhadap garis vertikal x = h hanya mengubah absis: x′ = 2(−1) − 3 = −5, sedangkan ordinat tetap 4, jadi bayangannya (−5, 4)." },
        { tipe: "bs", q: "Pernyataan: Translasi tidak mengubah bentuk dan ukuran bangun, hanya mengubah posisinya.", kunci: true, bahas: "Translasi termasuk transformasi isometri: jarak antar titik dipertahankan sehingga bentuk dan ukuran bangun tidak berubah." },
        { tipe: "jodoh", q: "Pasangkan setiap transformasi pada titik A(1, 2) dengan bayangan yang tepat.", items: ["Refleksi terhadap sumbu-x", "Translasi oleh T = (3, −1)", "Rotasi 90° searah jarum jam dengan pusat O(0, 0)"], options: ["(1, −2)", "(4, 1)", "(2, −1)", "(−1, 2)"], kunci: [0, 1, 2], bahas: "Refleksi terhadap sumbu-x: (a, b) → (a, −b) = (1, −2); translasi (3, −1): (4, 1); rotasi 90° searah jarum jam: (a, b) → (b, −a) = (2, −1)." },
        { tipe: "jodoh", q: "Pasangkan setiap dilatasi dengan pusat O(0, 0) dengan pengaruhnya terhadap luas bangun.", items: ["Faktor skala 3", "Faktor skala ½", "Faktor skala −2"], options: ["Luas menjadi 9 kali semula", "Luas menjadi ¼ kali semula", "Luas menjadi 4 kali semula", "Luas menjadi 2 kali semula"], kunci: [0, 1, 2], bahas: "Luas bayangan = k² × luas semula dengan k faktor skala (tanda negatif tidak memengaruhi luas): 3² = 9; (½)² = ¼; (−2)² = 4." },
        { tipe: "isian", q: "Titik B(−2, 7) dicerminkan terhadap garis y = −x. Absis bayangan titik B adalah ....", kunci: ["-7", "−7"], bahas: "Pencerminan terhadap y = −x memetakan (a, b) ke (−b, −a), jadi (−2, 7) menjadi (−7, 2); absisnya −7." },
        { tipe: "isian", q: "Titik C(5, −3) dirotasikan 180° dengan pusat O(0, 0), kemudian ditranslasikan oleh T = (−1, 4). Ordinat titik bayangan terakhir adalah ....", kunci: ["7"], bahas: "Rotasi 180°: (a, b) → (−a, −b) = (−5, 3); translasi (−1, 4) menghasilkan (−6, 7); ordinatnya 7." }
      ]
    },
    {
      id: "paket-02",
      judul: "Kekongruenan",
      deskripsi: "Syarat dua bangun kongruen serta pembuktian kekongruenan segitiga.",
      soal: [
        { tipe: "pgk", q: "Diketahui ΔABC kongruen dengan ΔPQR. Jika AB = 8 cm, ∠A = 50°, dan ∠B = 60°, manakah pernyataan berikut yang benar?", options: ["QR = 8 cm.", "∠P = 60°.", "PQ = 8 cm.", "∠R = 70°."], kunci: [2, 3], bahas: "Sisi dan sudut yang bersesuaian sama besar: PQ = AB = 8 cm; ∠R = ∠C = 180° − 50° − 60° = 70°." },
        { tipe: "pgk", q: "Manakah kondisi berikut yang menjamin dua segitiga saling kongruen?", options: ["Ketiga sisi yang bersesuaian sama panjang (SSS).", "Dua sisi dan sudut yang diapitnya sama besar (sisi–sudut–sisi).", "Ketiga sudut yang bersesuaian sama besar.", "Dua sudut dan sisi yang bersesuaian sama besar."], kunci: [0, 1, 3], bahas: "SSS, sisi–sudut–sisi, dan sudut–sisi–sudut menjamin kekongruenan; tiga sudut yang sama hanya menjamin kesebangunan." },
        { tipe: "pgk", q: "Persegi panjang ABCD kongruen dengan persegi panjang EFGH. Panjang AB = 12 cm dan lebar BC = 5 cm. Manakah pernyataan berikut yang benar?", options: ["Keliling EFGH = 34 cm.", "EF = 5 cm.", "Luas EFGH = 60 cm².", "Panjang diagonal EFGH = 13 cm."], kunci: [0, 2, 3], bahas: "Bangun yang kongruen berukuran sama: keliling = 2(12 + 5) = 34 cm; luas = 60 cm²; diagonal = √(12² + 5²) = 13 cm; EF bersesuaian dengan AB = 12 cm." },
        { tipe: "bs", q: "Pernyataan: Dua segitiga yang memiliki tiga sudut bersesuaian sama besar pasti kongruen.", kunci: false, bahas: "Sudut-sudut yang sama hanya menjamin kesebangunan; sisi-sisinya dapat berbeda ukuran." },
        { tipe: "bs", q: "Pernyataan: Jika ΔKLM kongruen dengan ΔXYZ dengan korespondensi K↔X, L↔Y, M↔Z, maka KL = XY dan ∠M = ∠Z.", kunci: true, bahas: "Unsur-unsur yang bersesuaian pada bangun yang kongruen sama besar." },
        { tipe: "bs", q: "Pernyataan: Dua lingkaran dengan jari-jari berbeda tidak mungkin kongruen.", kunci: true, bahas: "Lingkaran kongruen tepat ketika jari-jarinya sama panjang." },
        { tipe: "jodoh", q: "Pasangkan setiap syarat kekongruenan segitiga dengan maknanya.", items: ["Sisi–Sisi–Sisi (SSS)", "Sisi–Sudut–Sisi (SAS)", "Sudut–Sisi–Sudut (ASA)"], options: ["Ketiga sisi yang bersesuaian sama panjang", "Dua sisi dan sudut apitnya sama besar", "Dua sudut dan sisi di antaranya sama", "Ketiga sudut yang bersesuaian sama besar"], kunci: [0, 1, 2], bahas: "SSS: tiga sisi sama; SAS: dua sisi dan sudut apitnya sama; ASA: dua sudut dan sisi di antaranya sama." },
        { tipe: "jodoh", q: "ΔABC kongruen dengan ΔDEF dengan korespondensi A↔D, B↔E, C↔F. Pasangkan setiap unsur ΔABC dengan pasangan yang bersesuaian pada ΔDEF.", items: ["Sisi AB", "Sudut B", "Sisi AC"], options: ["Sisi DE", "Sudut E", "Sisi DF", "Sisi EF"], kunci: [0, 1, 2], bahas: "Urutan huruf menunjukkan korespondensi: A↔D, B↔E, C↔F, sehingga AB↔DE, ∠B↔∠E, dan AC↔DF." },
        { tipe: "isian", q: "Dua persegi ABCD dan PQRS kongruen. Jika keliling ABCD = 48 cm, maka panjang sisi PQ = .... cm", kunci: ["12"], bahas: "Sisi persegi = keliling ÷ 4 = 12 cm; bangun yang kongruen berukuran sama." },
        { tipe: "isian", q: "ΔABC siku-siku di B kongruen dengan ΔKLM siku-siku di L. Jika AB = 6 cm dan BC = 8 cm, maka panjang KM = .... cm", kunci: ["10"], bahas: "AC = √(6² + 8²) = 10 cm; KM bersesuaian dengan AC sehingga KM = 10 cm." }
      ]
    },
    {
      id: "paket-03",
      judul: "Perubahan Proporsional",
      deskripsi: "Pengaruh perubahan ukuran terhadap keliling, luas, dan volume.",
      soal: [
        { tipe: "pgk", q: "Sebuah foto berukuran 4 cm × 6 cm diperbesar sehingga lebarnya menjadi 15 cm. Manakah pernyataan berikut yang benar?", options: ["Luas foto menjadi 3,75 kali semula.", "Faktor skala pembesarannya 3,75.", "Panjang foto menjadi 22,5 cm.", "Keliling foto menjadi 3,75 kali semula."], kunci: [1, 2, 3], bahas: "Faktor skala = 15 ÷ 4 = 3,75; panjang baru = 6 × 3,75 = 22,5 cm; keliling berubah linear (3,75 kali), sedangkan luas berubah 3,75² kali." },
        { tipe: "pgk", q: "Panjang rusuk sebuah kubus diperbesar 2 kali lipat. Manakah pernyataan berikut yang benar?", options: ["Luas permukaan menjadi 4 kali semula.", "Volume menjadi 8 kali semula.", "Jumlah panjang seluruh rusuk menjadi 2 kali semula.", "Panjang diagonal ruang menjadi 4 kali semula."], kunci: [0, 1, 2], bahas: "Ukuran linear berubah 2 kali; luas berubah 2² = 4 kali; volume berubah 2³ = 8 kali; diagonal ruang juga ukuran linear (2 kali)." },
        { tipe: "pgk", q: "Jari-jari sebuah bola diperkecil menjadi ⅓ kali semula. Manakah pernyataan berikut yang benar?", options: ["Luas permukaan menjadi 1/9 kali semula.", "Volume menjadi 1/27 kali semula.", "Keliling lingkaran besarnya menjadi ⅓ kali semula.", "Diameternya menjadi 1/9 kali semula."], kunci: [0, 1, 2], bahas: "Ukuran linear berubah ⅓ kali; luas berubah (⅓)² = 1/9 kali; volume berubah (⅓)³ = 1/27 kali." },
        { tipe: "bs", q: "Pernyataan: Jika panjang dan lebar persegi panjang masing-masing diperbesar 3 kali, maka luasnya menjadi 9 kali semula.", kunci: true, bahas: "Luas berubah sebesar kuadrat faktor skala: 3² = 9." },
        { tipe: "bs", q: "Pernyataan: Jika tinggi kerucut diperbesar 3 kali sedangkan jari-jarinya tetap, maka volumenya menjadi 9 kali semula.", kunci: false, bahas: "Volume kerucut = ⅓πr²t berbanding lurus dengan t, sehingga volumenya menjadi 3 kali semula, bukan 9 kali." },
        { tipe: "bs", q: "Pernyataan: Skala 1 : 500 pada peta artinya 1 cm pada peta mewakili 5 m pada jarak sebenarnya.", kunci: true, bahas: "500 cm = 5 m, jadi 1 cm pada peta mewakili 5 m." },
        { tipe: "jodoh", q: "Sebuah kubus dengan rusuk 2 cm mengalami perubahan ukuran. Pasangkan setiap perubahan dengan volume kubus yang baru.", items: ["Rusuk menjadi 2 kali lipat", "Rusuk menjadi 3 kali lipat", "Rusuk menjadi ½ kali"], options: ["32 cm³", "216 cm³", "1 cm³", "64 cm³"], kunci: [3, 1, 2], bahas: "Volume awal 8 cm³; volume baru = k³ × 8: 2³ × 8 = 64; 3³ × 8 = 216; (½)³ × 8 = 1." },
        { tipe: "jodoh", q: "Pasangkan setiap perubahan ukuran dengan pengaruhnya terhadap luas bangun datar.", items: ["Ukuran diperbesar 4 kali", "Ukuran diperkecil menjadi ¼ kali", "Ukuran diperbesar 1,5 kali"], options: ["Luas menjadi 16 kali semula", "Luas menjadi 1/16 kali semula", "Luas menjadi 2,25 kali semula", "Luas menjadi 6 kali semula"], kunci: [0, 1, 2], bahas: "Luas berubah sebesar kuadrat faktor skala: 4² = 16; (¼)² = 1/16; 1,5² = 2,25." },
        { tipe: "isian", q: "Sebuah segitiga diperbesar dengan faktor skala 5. Jika luas segitiga semula 12 cm², maka luas segitiga bayangan adalah .... cm²", kunci: ["300"], bahas: "Luas bayangan = 5² × 12 = 300 cm²." },
        { tipe: "isian", q: "Volume sebuah balok menjadi 27 kali semula setelah diperbesar secara proporsional. Faktor skala pembesaran tersebut adalah ....", kunci: ["3"], bahas: "Volume berubah sebesar pangkat tiga faktor skala; ∛27 = 3." }
      ]
    },
    {
      id: "paket-04",
      judul: "Lingkaran",
      deskripsi: "Unsur lingkaran, keliling, luas, panjang busur, luas juring, garis singgung.",
      soal: [
        { tipe: "pgk", q: "Diketahui lingkaran dengan jari-jari 14 cm (gunakan π = 22/7). Manakah pernyataan berikut yang benar?", options: ["Kelilingnya 88 cm.", "Kelilingnya 44 cm.", "Luasnya 616 cm².", "Diameternya 28 cm."], kunci: [0, 2, 3], bahas: "K = 2 × (22/7) × 14 = 88 cm; L = (22/7) × 14² = 616 cm²; diameter = 28 cm." },
        { tipe: "pgk", q: "Juring lingkaran dengan sudut pusat 90° dan jari-jari 10 cm (gunakan π = 3,14). Manakah pernyataan berikut yang benar?", options: ["Luas juringnya 157 cm².", "Panjang busurnya 15,7 cm.", "Luas juringnya 78,5 cm².", "Panjang busurnya sama dengan seperempat keliling lingkaran."], kunci: [1, 2, 3], bahas: "Busur = 90/360 × 2 × 3,14 × 10 = 15,7 cm (= ¼ keliling); luas juring = 90/360 × 3,14 × 100 = 78,5 cm²." },
        { tipe: "pgk", q: "Dua garis singgung lingkaran ditarik dari titik T di luar lingkaran dan menyinggung lingkaran di A dan B. Manakah pernyataan berikut yang benar?", options: ["TA = TB.", "OA tegak lurus TA (O adalah pusat lingkaran).", "AB sejajar OT.", "Segitiga OAT siku-siku di A."], kunci: [0, 1, 3], bahas: "Dua garis singgung dari satu titik luar sama panjang (TA = TB); jari-jari tegak lurus garis singgung di titik singgung sehingga ΔOAT siku-siku di A." },
        { tipe: "bs", q: "Pernyataan: Besar sudut keliling yang menghadap busur yang sama dengan sudut pusat 80° adalah 40°.", kunci: true, bahas: "Sudut keliling = ½ × sudut pusat yang menghadap busur yang sama = 40°." },
        { tipe: "bs", q: "Pernyataan: Apotema adalah garis yang menghubungkan dua titik pada lingkaran dan melalui pusat lingkaran.", kunci: false, bahas: "Garis yang menghubungkan dua titik pada lingkaran melalui pusat adalah diameter; apotema adalah jarak terpendek dari pusat ke tali busur." },
        { tipe: "bs", q: "Pernyataan: Jika dua juring memiliki sudut pusat sama besar tetapi jari-jarinya berbeda, maka luas kedua juring tersebut tetap sama.", kunci: false, bahas: "Luas juring = (sudut/360°) × πr², sehingga jari-jari yang berbeda menghasilkan luas yang berbeda." },
        { tipe: "jodoh", q: "Pasangkan setiap unsur lingkaran dengan definisinya.", items: ["Jari-jari", "Tali busur", "Apotema"], options: ["Ruas garis dari pusat ke lingkaran", "Ruas garis yang menghubungkan dua titik pada lingkaran", "Jarak terpendek dari pusat ke tali busur", "Setengah dari keliling lingkaran"], kunci: [0, 1, 2], bahas: "Jari-jari menghubungkan pusat ke lingkaran; tali busur menghubungkan dua titik pada lingkaran; apotema adalah jarak pusat ke tali busur." },
        { tipe: "jodoh", q: "Lingkaran berpusat di O dengan jari-jari 7 cm (gunakan π = 22/7). Pasangkan setiap besaran dengan nilainya.", items: ["Keliling lingkaran", "Luas lingkaran", "Panjang busur dengan sudut pusat 45°"], options: ["44 cm", "154 cm²", "5,5 cm", "11 cm"], kunci: [0, 1, 2], bahas: "K = 2 × (22/7) × 7 = 44 cm; L = (22/7) × 49 = 154 cm²; busur 45° = 45/360 × 44 = 5,5 cm." },
        { tipe: "isian", q: "Sebuah roda berdiameter 70 cm berputar sebanyak 100 kali. Jarak yang ditempuh roda tersebut adalah .... m (gunakan π = 22/7)", kunci: ["220"], bahas: "Keliling roda = (22/7) × 70 = 220 cm; 100 putaran = 22.000 cm = 220 m." },
        { tipe: "isian", q: "Luas sebuah lingkaran adalah 154 cm² (gunakan π = 22/7). Jari-jari lingkaran tersebut adalah .... cm", kunci: ["7"], bahas: "r² = 154 ÷ (22/7) = 49, sehingga r = 7 cm." }
      ]
    },
    {
      id: "paket-05",
      judul: "Bangun Ruang Sisi Datar",
      deskripsi: "Luas permukaan dan volume kubus, balok, prisma, limas.",
      soal: [
        { tipe: "pgk", q: "Sebuah kubus memiliki panjang rusuk 6 cm. Manakah pernyataan berikut yang benar?", options: ["Jumlah panjang seluruh rusuknya 48 cm.", "Volumenya 216 cm³.", "Luas permukaannya 216 cm².", "Panjang diagonal ruangnya 6√3 cm."], kunci: [1, 2, 3], bahas: "V = 6³ = 216 cm³; LP = 6 × 6² = 216 cm²; diagonal ruang = 6√3 cm; jumlah panjang rusuk = 12 × 6 = 72 cm." },
        { tipe: "pgk", q: "Balok berukuran 8 cm × 5 cm × 4 cm. Manakah pernyataan berikut yang benar?", options: ["Volumenya 160 cm³.", "Luas permukaannya 184 cm².", "Panjang diagonal ruangnya √89 cm.", "Volumenya 160 cm²."], kunci: [0, 1], bahas: "V = 8 × 5 × 4 = 160 cm³; LP = 2(40 + 32 + 20) = 184 cm²; diagonal ruang = √105 cm." },
        { tipe: "pgk", q: "Limas segiempat beraturan dengan alas persegi 10 cm × 10 cm dan tinggi limas 12 cm. Manakah pernyataan berikut yang benar?", options: ["Volumenya 400 cm³.", "Volumenya 1.200 cm³.", "Tinggi segitiga pada sisi tegaknya 13 cm.", "Luas permukaannya 360 cm²."], kunci: [0, 2, 3], bahas: "V = ⅓ × 100 × 12 = 400 cm³; tinggi sisi tegak = √(12² + 5²) = 13 cm; LP = 100 + 4 × (½ × 10 × 13) = 360 cm²." },
        { tipe: "bs", q: "Pernyataan: Volume prisma segitiga = luas alas segitiga × tinggi prisma.", kunci: true, bahas: "Volume prisma = luas alas × tinggi, dengan alas berupa segitiga." },
        { tipe: "bs", q: "Pernyataan: Balok berukuran 3 cm × 4 cm × 5 cm memiliki panjang diagonal ruang 6 cm.", kunci: false, bahas: "Diagonal ruang = √(3² + 4² + 5²) = √50 ≈ 7,07 cm, bukan 6 cm." },
        { tipe: "bs", q: "Pernyataan: Volume limas = ⅓ × volume prisma dengan alas dan tinggi yang sama.", kunci: true, bahas: "Limas dengan alas dan tinggi yang sama dengan prisma volumenya sepertiga volume prisma." },
        { tipe: "jodoh", q: "Pasangkan setiap bangun ruang dengan rumus volumenya.", items: ["Kubus dengan rusuk s", "Balok dengan ukuran p × l × t", "Prisma dengan luas alas A dan tinggi t"], options: ["s³", "p × l × t", "A × t", "6s²"], kunci: [0, 1, 2], bahas: "Volume kubus = s³; balok = p × l × t; prisma = A × t; sedangkan 6s² adalah luas permukaan kubus." },
        { tipe: "jodoh", q: "Limas segiempat T.ABCD memiliki alas persegi 6 cm × 6 cm dan tinggi 4 cm. Pasangkan setiap besaran dengan nilainya.", items: ["Volume limas", "Tinggi segitiga pada sisi tegak", "Luas permukaan limas"], options: ["48 cm³", "5 cm", "96 cm²", "60 cm³"], kunci: [0, 1, 2], bahas: "V = ⅓ × 36 × 4 = 48 cm³; tinggi sisi tegak = √(4² + 3²) = 5 cm; LP = 36 + 4 × (½ × 6 × 5) = 96 cm²." },
        { tipe: "isian", q: "Sebuah prisma segitiga memiliki alas segitiga dengan panjang alas 8 cm dan tinggi segitiga 6 cm. Jika tinggi prisma 15 cm, maka volume prisma tersebut adalah .... cm³", kunci: ["360"], bahas: "Luas alas = ½ × 8 × 6 = 24 cm²; volume = 24 × 15 = 360 cm³." },
        { tipe: "isian", q: "Luas permukaan sebuah kubus adalah 294 cm². Panjang rusuk kubus tersebut adalah .... cm", kunci: ["7"], bahas: "s² = 294 ÷ 6 = 49, sehingga s = 7 cm." }
      ]
    },
    {
      id: "paket-06",
      judul: "Bangun Ruang Sisi Lengkung",
      deskripsi: "Luas permukaan dan volume tabung, kerucut, bola.",
      soal: [
        { tipe: "pgk", q: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm (gunakan π = 22/7). Manakah pernyataan berikut yang benar?", options: ["Volumenya 440 cm³.", "Volumenya 1.540 cm³.", "Luas permukaannya 748 cm².", "Luas selimutnya 440 cm²."], kunci: [1, 2, 3], bahas: "V = (22/7) × 49 × 10 = 1.540 cm³; LP = 2 × (22/7) × 7 × 17 = 748 cm²; luas selimut = 2 × (22/7) × 7 × 10 = 440 cm²." },
        { tipe: "pgk", q: "Kerucut dengan jari-jari 6 cm dan tinggi 8 cm (gunakan π = 3,14). Manakah pernyataan berikut yang benar?", options: ["Garis pelukisnya 10 cm.", "Tingginya 10 cm.", "Volumenya 301,44 cm³.", "Luas selimutnya 188,4 cm²."], kunci: [0, 2, 3], bahas: "Garis pelukis s = √(6² + 8²) = 10 cm; V = ⅓ × 3,14 × 36 × 8 = 301,44 cm³; luas selimut = 3,14 × 6 × 10 = 188,4 cm²." },
        { tipe: "pgk", q: "Bola dengan jari-jari 21 cm (gunakan π = 22/7). Manakah pernyataan berikut yang benar?", options: ["Volumenya 38.808 cm³.", "Luas permukaannya 5.544 cm².", "Luas permukaannya 1.386 cm².", "Diameternya 42 cm."], kunci: [0, 1, 3], bahas: "V = ⁴⁄₃ × (22/7) × 21³ = 38.808 cm³; LP = 4 × (22/7) × 21² = 5.544 cm²; diameter = 42 cm." },
        { tipe: "bs", q: "Pernyataan: Volume kerucut = ⅓ × volume tabung dengan jari-jari dan tinggi yang sama.", kunci: true, bahas: "Kerucut dan tabung yang beralas sama dan tingginya sama memenuhi V kerucut = ⅓ × V tabung." },
        { tipe: "bs", q: "Pernyataan: Jika jari-jari tabung diperbesar 2 kali sedangkan tingginya tetap, maka luas selimutnya menjadi 4 kali semula.", kunci: false, bahas: "Luas selimut = 2πrh berbanding lurus dengan r, sehingga menjadi 2 kali semula, bukan 4 kali." },
        { tipe: "bs", q: "Pernyataan: Tabung, kerucut, dan bola termasuk bangun ruang sisi lengkung.", kunci: true, bahas: "Ketiganya memiliki sisi berbentuk lengkung: selimut tabung/kerucut dan permukaan bola." },
        { tipe: "jodoh", q: "Pasangkan setiap bangun ruang sisi lengkung dengan rumus volumenya (r = jari-jari, t = tinggi).", items: ["Tabung", "Kerucut", "Bola"], options: ["πr²t", "⅓πr²t", "⁴⁄₃πr³", "2πr²t"], kunci: [0, 1, 2], bahas: "Volume tabung = πr²t; kerucut = ⅓πr²t; bola = ⁴⁄₃πr³." },
        { tipe: "jodoh", q: "Tabung dengan jari-jari 10 cm dan tinggi 7 cm (gunakan π = 3,14). Pasangkan setiap besaran dengan nilainya.", items: ["Volume tabung", "Luas selimut tabung", "Luas permukaan tabung"], options: ["2.198 cm³", "439,6 cm²", "1.067,6 cm²", "628 cm²"], kunci: [0, 1, 2], bahas: "V = 3,14 × 100 × 7 = 2.198 cm³; selimut = 2 × 3,14 × 10 × 7 = 439,6 cm²; LP = 2 × 3,14 × 10 × 17 = 1.067,6 cm²." },
        { tipe: "isian", q: "Volume sebuah bola adalah 4.500π cm³. Jari-jari bola tersebut adalah .... cm", kunci: ["15"], bahas: "⁴⁄₃πr³ = 4.500π → r³ = 3.375, sehingga r = 15 cm." },
        { tipe: "isian", q: "Sebuah kerucut memiliki volume 1.232 cm³ dan jari-jari 7 cm (gunakan π = 22/7). Tinggi kerucut tersebut adalah .... cm", kunci: ["24"], bahas: "⅓ × (22/7) × 49 × t = 1.232 → t = 24 cm." }
      ]
    },
    {
      id: "paket-07",
      judul: "Try Out Asesmen Akhir",
      deskripsi: "Paket campuran semua materi kelas 9 sebagai simulasi asesmen akhir (10 soal campuran dari keenam bab di atas).",
      soal: [
        { tipe: "pgk", q: "Titik D(−4, 3) ditranslasikan oleh T = (6, −5), kemudian hasilnya dicerminkan terhadap sumbu-y. Manakah pernyataan berikut yang benar?", options: ["Setelah translasi diperoleh titik (2, −2).", "Bayangan akhirnya adalah (−2, −2).", "Bayangan akhirnya adalah (2, 2).", "Ordinat bayangan akhirnya adalah −2."], kunci: [0, 1, 3], bahas: "Translasi: (−4 + 6, 3 − 5) = (2, −2); refleksi terhadap sumbu-y: (a, b) → (−a, b) = (−2, −2)." },
        { tipe: "pgk", q: "Sebuah taman berbentuk lingkaran berdiameter 28 m (gunakan π = 22/7) akan ditanami rumput. Manakah pernyataan berikut yang benar?", options: ["Luas taman 1.232 m².", "Luas taman 616 m².", "Keliling taman 88 m.", "Jari-jari taman 14 m."], kunci: [1, 2, 3], bahas: "r = 14 m; L = (22/7) × 196 = 616 m²; K = (22/7) × 28 = 88 m." },
        { tipe: "pgk", q: "Sebuah kaleng susu berbentuk tabung dengan jari-jari 7 cm dan tinggi 12 cm (gunakan π = 22/7). Manakah pernyataan berikut yang benar?", options: ["Volumenya 1.848 cm³.", "Luas selimutnya 528 cm².", "Tinggi kaleng 7 cm.", "Kaleng termasuk bangun ruang sisi lengkung."], kunci: [0, 1, 3], bahas: "V = (22/7) × 49 × 12 = 1.848 cm³; selimut = 2 × (22/7) × 7 × 12 = 528 cm²; tabung memiliki sisi lengkung." },
        { tipe: "bs", q: "Pernyataan: Dua segitiga siku-siku yang memiliki satu sisi siku-siku sama panjang pasti kongruen.", kunci: false, bahas: "Satu sisi yang sama belum cukup menjamin kekongruenan; sisi-sisi lainnya dapat berbeda ukuran." },
        { tipe: "bs", q: "Pernyataan: Pada denah berskala 1 : 200, luas 4 cm² mewakili luas sebenarnya 16 m².", kunci: true, bahas: "1 cm mewakili 2 m, sehingga 4 cm² mewakili 4 × (2 m)² = 16 m²." },
        { tipe: "bs", q: "Pernyataan: Jumlah titik sudut kubus adalah 12.", kunci: false, bahas: "Kubus memiliki 8 titik sudut; 12 adalah banyaknya rusuk kubus." },
        { tipe: "jodoh", q: "Pasangkan setiap bangun ruang sisi datar dengan banyaknya sisi yang dimilikinya.", items: ["Kubus", "Limas segitiga", "Prisma segienam"], options: ["6 sisi", "4 sisi", "8 sisi", "12 sisi"], kunci: [0, 1, 2], bahas: "Kubus memiliki 6 sisi; limas segitiga 4 sisi; prisma segienam 8 sisi (2 alas + 6 sisi tegak)." },
        { tipe: "jodoh", q: "Pasangkan setiap titik dengan bayangannya terhadap garis yang diberikan.", items: ["(5, 1) terhadap sumbu-x", "(5, 1) terhadap sumbu-y", "(5, 1) terhadap garis y = x"], options: ["(5, −1)", "(−5, 1)", "(1, 5)", "(−1, −5)"], kunci: [0, 1, 2], bahas: "Terhadap sumbu-x: (a, b) → (a, −b); terhadap sumbu-y: (a, b) → (−a, b); terhadap y = x: (a, b) → (b, a)." },
        { tipe: "isian", q: "Sebuah peta berskala 1 : 250.000. Jarak dua kota pada peta 8 cm. Jarak sebenarnya kedua kota tersebut adalah .... km", kunci: ["20"], bahas: "8 × 250.000 cm = 2.000.000 cm = 20 km." },
        { tipe: "isian", q: "Keliling sebuah lingkaran adalah 132 cm (gunakan π = 22/7). Luas lingkaran tersebut adalah .... cm²", kunci: ["1386"], bahas: "r = 132 ÷ (2 × 22/7) = 21 cm; L = (22/7) × 21² = 1.386 cm²." }
      ]
    }
  ]
};
