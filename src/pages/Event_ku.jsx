import React from 'react';
import '../assets/css/Event_ku.css'

function Event_ku () {
  return (
    <>
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Event_ku</title>
      </head>
      <body>
        {/* Header */}
        {/* <!-- Header --> */}
        <section className="header">
          <div className="logo">
          <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
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
            <a href="/Event">Event</a>
            <a href="/Tiket_page">Tiket</a>
            <a href="/Profil_User">
            <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
            </a>
          </nav>
          </section>

        <main>
        <aside> <div className='name-links'>
            <ul className="side">
              <li>
                <a href="/profil_User">Profil</a>
              </li>
              <li className="active">
                <a href="">Event-ku</a>
              </li>
              <li>
                <a href="">Tiket-ku</a>
              </li>
              <li>
                <a href="/Notifikasi">Notifikasi</a>
              </li>
              <li>
                <a href="/Favorit">Favorit</a>
              </li>
              <li>
                <a href="">Pengaturan</a>
              </li>
              <li>
                <a href="">Keluar Akun</a>
              </li>
            </ul>
            </div>
        </aside>

            <section className="favorit-section">
            <h1>Event-ku</h1>
            <p className="subtitle">yuk jual tiketmu biar semua tahu</p>
            <a href="/Deskripsi_eventku" className="uplod-link">
                <div className="uplod">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M22.65 34H25.65V25.7H34V22.7H25.65V14H22.65V22.7H14V25.7H22.65V34ZM24.0135 44C21.2555 44 18.6638 43.475 16.2385 42.425C13.8128 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.186 5.575 31.758C4.525 29.33 4 26.7357 4 23.975C4 21.2143 4.525 18.62 5.575 16.192C6.625 13.764 8.05833 11.65 9.875 9.85C11.6917 8.05 13.814 6.625 16.242 5.575C18.67 4.525 21.2643 4 24.025 4C26.7857 4 29.38 4.525 31.808 5.575C34.236 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2288 44 23.9865C44 26.7445 43.475 29.3362 42.425 31.7615C41.375 34.1872 39.95 36.3053 38.15 38.116C36.35 39.9263 34.2333 41.3597 31.8 42.416C29.3667 43.472 26.7712 44 24.0135 44ZM24.025 41C28.7417 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.6917 41 23.975C41 19.2583 39.3532 15.25 36.0595 11.95C32.7658 8.65 28.746 7 24 7C19.3 7 15.2917 8.64683 11.975 11.9405C8.65833 15.2342 7 19.254 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3083 41 24.025 41Z" fill="#121212"/>
                    </svg>
                    <p>tambahkan eventmu dan jangkau pengunjung lebih luas</p>
                </div>
            </a> <br />
            <div className="event-cards">
                {/* Event Card 1 */}
                <div className="event-card">
                <img src="./assets/img/1.png" alt="Fragmen" className="event-image" />
                <div className="event-details">
                    <span className="event-category">Teater</span>
                    <h2>Fragmen</h2>
                    <p>Teater Koma</p>
                    <br />
                    <p className="event-date">Senin, 28 Oktober 2024</p>
                    <p className="event-location">Teater Jakarta, Jakarta, Indonesia</p>
                    <p className="event-capacity">200 orang</p> <br />
                    <p className="event-price">
                    <span className="availability">Tersedia</span>
                    <span className="price">100.000</span>
                    </p>
                </div>
                </div>

                {/* Event Card 2 */}
                <div className="event-card">
                <img src="./assets/img/bumimanusia.jpg" alt="Bumi Manusia" className="event-image" />
                <div className="event-details">
                    <span className="event-category">Teater</span>
                    <h2>Bumi Manusia</h2>
                    <p>Teater Koma</p>
                    <br />
                    <p className="event-date">Selasa, 29 Oktober 2024</p>
                    <p className="event-location">Teater Jakarta, Jakarta, Indonesia</p>
                    <p className="event-capacity">200 orang</p> <br />
                    <p className="event-price">
                    <span className="availability">Tersedia</span>
                    <span className="price">100.000</span>
                    </p>
                </div>
                </div>

                {/* Event Card 3 */}
                <div className="event-card">
                <img src="./assets/img/revolusi.jpg" alt="Revolusi" className="event-image" />
                <div className="event-details">
                    <span className="event-category">Teater</span>
                    <h2>Revolusi</h2>
                    <p>Teater Koma</p>
                    <br />
                    <p className="event-date">Minggu, 27 Oktober 2024</p>
                    <p className="event-location">Art Center, Denpasar, Indonesia</p>
                    <p className="event-capacity">200 orang</p> <br />
                    <p className="event-price">
                    <span className="availability">Tersedia</span>
                    <span className="price">100.000</span>
                    </p>
                </div>
                </div>
            </div>
            </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>
          <div className="footer-links">
            <div className="footer-links">
            <a href="/About_us">Tentang Kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/pusat_bantuan">Pusat Bantuan</a>
          </div>
          </div>
        </footer>
    </body>
    </>
  );
};

export default Event_ku;
