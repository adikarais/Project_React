import React from 'react';

function Term_of_Condition() {
  return (
    <div>
      <div>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Syarat dan Ketentuan - Musetix</title>
        <link rel="stylesheet" href="src/assets/css/Footer.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      </div>
      <body>
        {/* <!-- Header --> */}
        <header className="header">
          <div className="logo">
            <img src="./assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
          </div>

          {/* <!-- search --> */}
          <div className="search-container">
            <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
            <button className="search-button">
              <img src="./assets/img/search.png" alt="search" className="search-icon" />
            </button>
            {/* <!-- Search icon as button --> */}
          </div>

          <nav className="nav">
            <a href="/">Beranda</a>
            <a href="Event">Event</a>
            <a href="/Tiket_page">Tiket</a>
            <a href="/Profil_User">
              <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
            </a>
          </nav>
        </header>

        {/* <!-- Main Content --> */}
        <main className="content">
          <h1>Syarat dan Ketentuan</h1>

          <section>
            <h2>Pendahuluan</h2>
            <p>
              Dengan mengakses dan menggunakan layanan Musetix, Anda dianggap telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang tercantum dalam dokumen ini. Syarat dan Ketentuan ini dapat berubah sewaktu-waktu, jadi
              pastikan Anda selalu memeriksa pembaruan terbaru.
            </p>
          </section>

          <section>
            <h2>Definisi</h2>
            <ul>
              <li>Musetix: Merujuk pada platform online yang menyediakan layanan penjualan tiket untuk pertunjukan seni.</li>
              <li>Pengguna: Merujuk pada individu atau entitas yang mengakses dan menggunakan layanan Musetix, termasuk seniman dan pembeli tiket.</li>
              <li>Seniman: Merujuk pada individu atau kelompok yang menjual tiket pertunjukan melalui Musetix.</li>
              <li>Pembeli: Merujuk pada individu atau kelompok yang membeli tiket pertunjukan melalui Musetix</li>
              <li>Pertunjukan: Merujuk pada acara seni pertunjukan yang tiketnya dijual melalui Musetix.</li>
            </ul>
          </section>

          <section>
            <h2>Penggunaan Layanan</h2>
            <ul>
              <li>Pendaftaran: Untuk menggunakan layanan Musetix, Anda harus mendaftar dan membuat akun.</li>
              <li>Informasi Akurat: Anda bertanggung jawab untuk memberikan informasi yang akurat dan lengkap saat mendaftar.</li>
              <li>Penggunaan yang Sah: Anda hanya boleh menggunakan Musetix untuk tujuan yang sah dan sesuai dengan syarat dan ketentuan ini.</li>
              <li>Larangan: Anda dilarang menggunakan Musetix untuk tujuan yang melanggar hukum, merugikan orang lain, atau merusak reputasi Musetix.</li>
            </ul>
          </section>

          <section>
            <h2>Penjualan Tiket</h2>
            <ul>
              <li>Seniman: Seniman bertanggung jawab atas akurasi informasi pertunjukan yang mereka daftarkan di Musetix.</li>
              <li>Pembayaran: Pembayaran tiket dilakukan melalui metode pembayaran yang tersedia di Musetix.</li>
              <li>Konfirmasi: Setelah pembayaran berhasil, pembeli akan menerima konfirmasi pembelian melalui email.</li>
              <li>Pembatalan: Kebijakan pembatalan tiket akan ditentukan oleh masing-masing seniman dan akan tercantum pada halaman detail pertunjukan.</li>
            </ul>
          </section>

          <section>
            <h2>Hak Kekayaan Intelektual</h2>
            <p>Hak Milik: Semua konten yang ada di Musetix, termasuk tetapi tidak terbatas pada teks, gambar, logo, dan perangkat lunak, adalah hak milik Musetix atau pihak ketiga yang berwenang.</p>
          </section>

          <section>
            <h2>Tanggung Jawab</h2>
            <ul>
              <li>Musetix: Musetix bertindak sebagai perantara antara seniman dan pembeli. Musetix tidak bertanggung jawab atas kualitas pertunjukan, tindakan seniman, atau segala kerugian yang timbul akibat penggunaan layanan Musetix.</li>
              <li>Pengguna: Pengguna bertanggung jawab atas segala aktivitas yang dilakukan melalui akun mereka.</li>
            </ul>
          </section>

          <section>
            <h2>Perubahan Syarat dan Ketentuan</h2>
            <p>Musetix berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diumumkan melalui situs web Musetix.</p>
          </section>

          <section>
            <h2>Hukum yang Berlaku</h2>
            <p>Perjanjian ini diatur oleh hukum yang berlaku di Indonesia.</p>
          </section>

          <section>
            <h2>Penyelesaian Sengketa</h2>
            <p>Segala perselisihan yang timbul dari perjanjian ini akan diselesaikan secara musyawarah untuk mencapai kesepakatan bersama.</p>
          </section>
        </main>

        {/* <!-- Footer --> */}
        <footer className="footer">
          {/* <!-- Logo Musetix --> */}
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>

          {/* <!-- Tautan di bagian kanan --> */}
          <div className="footer-links">
            <a href="/About_us">Tentang Kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/pusat_bantuan">Pusat Bantuan</a>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Term_of_Condition;
