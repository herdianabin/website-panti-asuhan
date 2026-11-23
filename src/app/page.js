
"use client";

import { useState } from "react";

const menu = [
  { nama: "Beranda", link: "#beranda" },
  { nama: "Tentang Kami", link: "#tentang" },
  { nama: "Kegiatan", link: "#kegiatan" },
  { nama: "Galeri", link: "#galeri" },
  { nama: "Donasi", link: "#donasi" },
  { nama: "Kontak", link: "#kontak" },
];

const kegiatan = [
  {
    judul: "Kegiatan Belajar",
    deskripsi: "Kegiatan belajar bersama untuk meningkatkan pengetahuan dan kemampuan akademik anak-anak.",
    gambar: "/images/kegiatan/belajar.jpg",
  },
  {
    judul: "Kegiatan Futsal",
    deskripsi: "Aktivitas olahraga untuk menjaga kesehatan dan membangun semangat kebersamaan.",
    gambar: "/images/kegiatan/bermain.jpg",
  },
  {
    judul: "Kegiatan Silat",
    deskripsi: "Kegiatan bela diri untuk melatih kedisiplinan, keberanian, dan tanggung jawab.",
    gambar: "/images/kegiatan/olahraga.jpg",
  },
  {
    judul: "Kegiatan Keagamaan",
    deskripsi: "Pembinaan keagamaan untuk membentuk karakter dan nilai-nilai kebaikan.",
    gambar: "/images/kegiatan/keagamaan.jpg",
  },
  {
    judul: "Makan Bersama",
    deskripsi: "Momen kebersamaan untuk mempererat hubungan antar-anak dan pengasuh.",
    gambar: "/images/kegiatan/makan-bersama.jpg",
  },
  {
    judul: "Kegiatan Paduan Suara",
    deskripsi: "Kegiatan positif untuk mengembangkan kreativitas dan bakat anak-anak.",
    gambar: "/images/kegiatan/kegiatan-lain.jpg",
  },
];

const galeri = [
  "/images/galeri/foto-1.jpg",
  "/images/galeri/foto-2.jpg",
  "/images/galeri/foto-3.jpg",
  "/images/galeri/foto-4.jpg",
];

const mediaSosial = [
  {
    nama: "Instagram",
    gambar: "/images/social/instagram.png",
    link: "https://www.instagram.com/pa_harapanremaja/",
  },
  {
    nama: "Facebook",
    gambar: "/images/social/facebook.png",
    link: "https://www.facebook.com/pantiharapanremaja37/",
  },
  {
    nama: "TikTok",
    gambar: "/images/social/tiktok.png",
    link: "https://www.tiktok.com/@37_pahr",
  },
  {
    nama: "WhatsApp",
    gambar: "/images/social/whatsapp.png",
    link: "https://wa.me/6281384800037",
  },
];

const rekeningDonasi = [
  {
    id: "bsi",
    nama: "BANK SYARIAH INDONESIA",
    logo: "/images/bsi.png",
    nomor: "00000000",
    pemilik: "xxxxxxxx",
  },
  {
    id: "mandiri",
    nama: "BANK MANDIRI",
    logo: "/images/mandiri.png",
    nomor: "00000000",
    pemilik: "xxxxxxxx",
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [fotoTerpilih, setFotoTerpilih] = useState(null);
  const [rekeningTersalin, setRekeningTersalin] = useState(null);

  async function salinRekening(nomor, id) {
    try {
      await navigator.clipboard.writeText(nomor);
      setRekeningTersalin(id);

      setTimeout(() => {
        setRekeningTersalin(null);
      }, 2500);
    } catch {
      alert("Nomor rekening tidak dapat disalin. Silakan salin secara manual.");
    }
  }

  return (
    <main className="site-shell">

      {/* NAVBAR */}
      <header className="site-header">
        <div className="navbar">
          <a
            href="#beranda"
            className="brand"
            onClick={() => setMenuTerbuka(false)}
          >
            <img src="/images/logo-panti.png" alt="Logo Panti Asuhan" />
            <span>
              <strong>Panti Asuhan</strong>
              <small>Harapan Remaja</small>
            </span>
          </a>

          <nav className="desktop-nav">
            {menu.map((item) => (
              <a key={item.link} href={item.link}>
                {item.nama}
              </a>
            ))}
          </nav>

          <a href="#donasi" className="nav-donate">
            ♥ Donasi Sekarang
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuTerbuka(!menuTerbuka)}
            aria-label="Buka menu navigasi"
            aria-expanded={menuTerbuka}
          >
            {menuTerbuka ? "✕" : "☰"}
          </button>
        </div>

        {menuTerbuka && (
          <nav className="mobile-nav">
            {menu.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setMenuTerbuka(false)}
              >
                {item.nama}
              </a>
            ))}
            <a href="#donasi" onClick={() => setMenuTerbuka(false)}>
              Donasi Sekarang
            </a>
          </nav>
        )}
      </header>

      {/* BERANDA */}
      <section id="beranda" className="hero">
        <div className="hero-overlay" />
        <div className="hero-pattern" />

        <div className="hero-content">
          <div className="hero-badge">
            <span>✳</span>
            Selamat Datang di Website Resmi Kami
          </div>

          <h1>
            Mari bersama menjadi
            <span>Bagian dari perjalanan pendidikan mereka.</span>
          </h1>

          <p>
            Setiap anak memiliki hak untuk belajar, tumbuh, dan meraih cita-cita.
            Begitu pula anak-anak asuh di Panti Asuhan Harapan Remaja yang terus
            bersemangat menuntut ilmu dan mengejar impian mereka.
          </p>

          <div className="hero-actions">
            <a href="#tentang" className="btn-yellow">
              Mengenal Kami <span>→</span>
            </a>
            <a href="#donasi" className="btn-outline">
              Berikan Dukungan
            </a>
          </div>

          <div className="hero-highlight">
            <div className="highlight-icon">♥</div>
            <div>
              <strong>Berbagi Kebaikan, Membangun Harapan</strong>
              <span>
                Bersama mendukung pendidikan dan masa depan anak-anak.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section id="tentang" className="content-section">
        <div className="section-inner">
          <SectionHeading
            label="TENTANG KAMI"
            title="Mengenal Panti Asuhan Harapan Remaja"
            description="Mengenal lebih dekat profil, tujuan, dan nilai-nilai yang menjadi dasar kegiatan Panti Asuhan Harapan Remaja."
          />

          <div className="about-grid">
            <div className="about-photo">
              <img
                src="/images/gedung-panti.jpg"
                alt="Gedung Panti Asuhan Harapan Remaja"
              />
              <div className="photo-caption">
                <strong>Panti Asuhan Harapan Remaja</strong>
                <span>Tempat tumbuh, belajar, dan berbagi</span>
              </div>
            </div>

            <div className="about-content">
              <span className="about-label">PROFIL LEMBAGA</span>
              <h3>Rumah untuk Tumbuh dan Meraih Harapan</h3>

              <p>
                Panti Asuhan Harapan Remaja merupakan lembaga pengasuhan
                yang berupaya memberikan lingkungan yang aman, nyaman,
                dan mendukung perkembangan anak-anak. Berbagai kegiatan
                dilaksanakan untuk memberikan kesempatan kepada anak-anak
                dalam belajar, mengembangkan kemampuan, serta membangun
                hubungan sosial yang baik.
              </p>

              <div className="info-panel">
                <h4>Visi Kami</h4>
                <p>
                  Mewujudkan generasi muda yang mandiri, berpendidikan,
                  berkarakter, dan memiliki masa depan yang lebih baik.
                </p>
              </div>

              <div className="info-panel cyan">
                <h4>Misi Kami</h4>
                <p>
                  Memberikan pendampingan, pendidikan, pembinaan karakter,
                  serta kesempatan bagi anak-anak untuk mengembangkan
                  potensi diri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEGIATAN */}
      <section id="kegiatan" className="content-section">
        <div className="section-inner">
          <SectionHeading
            label="AKTIVITAS KAMI"
            title="Kegiatan Panti Asuhan"
            description="Berbagai aktivitas positif yang dilakukan untuk mendukung pendidikan, kesehatan, kreativitas, dan kebersamaan anak-anak."
          />

          <div className="activity-grid">
            {kegiatan.map((item) => (
              <article className="activity-card" key={item.judul}>
                <div className="activity-image">
                  <img src={item.gambar} alt={item.judul} />
                </div>
                <div className="activity-body">
                  <h3>{item.judul}</h3>
                  <p>{item.deskripsi}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="content-section">
        <div className="section-inner">
          <SectionHeading
            label="DOKUMENTASI"
            title="Galeri Kegiatan"
            description="Dokumentasi aktivitas dan momen kebersamaan di Panti Asuhan Harapan Remaja."
          />

          <div className="gallery-grid">
            {galeri.map((foto, index) => (
              <button
                key={foto}
                className="gallery-card"
                onClick={() => setFotoTerpilih(foto)}
                aria-label={`Lihat foto ${index + 1}`}
              >
                <img
                  src={foto}
                  alt={`Dokumentasi kegiatan ${index + 1}`}
                />
                <span>Perbesar Foto ↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DONASI */}
      <section id="donasi" className="donation-section">
        <div className="donation-inner">
          <div className="donation-copy">
            <span className="section-label light">MARI BERBAGI</span>
            <h2>Satu Kebaikan Dapat Membawa Harapan</h2>
            <p>
              Dukungan dan kepedulian masyarakat dapat membantu memenuhi
              kebutuhan serta mendukung kegiatan pendidikan dan
              pembinaan anak-anak di Panti Asuhan Harapan Remaja.
            </p>
            <a href="#rekening" className="btn-yellow">
              Salurkan Donasi <span>→</span>
            </a>
          </div>

          <div className="donation-options">
            <article className="donation-option">
              <div className="donation-emoji money">
                <span>💰</span>
              </div>
              <div className="donation-option-content">
                <h3>Donasi Uang</h3>
                <p>
                  Bantuan dana untuk mendukung kebutuhan operasional,
                  pendidikan, dan kegiatan anak-anak di panti asuhan.
                </p>
                <a href="#rekening">Lihat Rekening Donasi →</a>
              </div>
            </article>

            <article className="donation-option">
              <div className="donation-emoji goods">
                <span>🎁</span>
              </div>
              <div className="donation-option-content">
                <h3>Donasi Barang</h3>
                <p>
                  Bantuan berupa sembako, pakaian, perlengkapan sekolah,
                  perlengkapan kebersihan, dan kebutuhan lainnya.
                </p>
                <a href="#kontak">Hubungi Kami →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* REKENING DONASI */}
      <section id="rekening" className="content-section">
        <div className="section-inner">
          <SectionHeading
            label="REKENING DONASI"
            title="Salurkan Donasi Melalui Rekening"
            description="Masyarakat dapat menyalurkan bantuan melalui rekening resmi yang dicantumkan di bawah ini."
          />

          <div className="bank-wrapper">
            {rekeningDonasi.map((rekening) => (
              <article className="bank-card" key={rekening.id}>
                <div className="bank-top">
                  <div className="bank-logo">
                    <img
                      src={rekening.logo}
                      alt={`Logo ${rekening.nama}`}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <span className="bank-badge">
                    REKENING DONASI
                  </span>
                </div>

                <div className="bank-information">
                  <span className="bank-label">
                    {rekening.nama}
                  </span>

                  <p className="bank-number">
                    {rekening.nomor}
                  </p>

                  <span className="bank-label">
                    NAMA PEMILIK REKENING
                  </span>

                  <h3>{rekening.pemilik}</h3>
                </div>

                <button
                  className="copy-account"
                  onClick={() =>
                    salinRekening(rekening.nomor, rekening.id)
                  }
                >
                  {rekeningTersalin === rekening.id
                    ? "✓ Berhasil Disalin"
                    : "▣ Salin Nomor Rekening"}
                </button>

                <p className="bank-note">
                  Mohon konfirmasi kepada pengurus setelah melakukan
                  transfer donasi.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP GALERI */}
      {fotoTerpilih && (
        <div
          className="lightbox"
          onClick={() => setFotoTerpilih(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setFotoTerpilih(null)}
            aria-label="Tutup foto"
          >
            ×
          </button>

          <img
            src={fotoTerpilih}
            alt="Foto galeri"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      {/* KONTAK */}
      <section id="kontak" className="content-section">
        <div className="section-inner">
          <SectionHeading
            label="HUBUNGI KAMI"
            title="Mari Terhubung dengan Kami"
            description="Untuk informasi lebih lanjut, kerja sama, maupun penyaluran donasi, silakan menghubungi Panti Asuhan Harapan Remaja."
          />

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Informasi Kontak</h3>

              <div className="contact-item">
                <span>⌖</span>
                <div>
                  <h4>Alamat</h4>
                  <p>Jl. Tenggiri No.37 4, RT.17/RW.10, Jati, Kec. Pulo Gadung, 
                    Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220</p>
                </div>
              </div>

              <div className="contact-item">
                <span>☎</span>
                <div>
                  <h4>Telepon / WhatsApp</h4>
                  <p>0813-8480-0037</p>
                </div>
              </div>

              <div className="contact-item">
                <span>✉</span>
                <div>
                  <h4>Email</h4>
                  <p>harapanremaja37@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h3>Media Sosial</h3>
              <p className="social-description">
                Ikuti media sosial kami untuk mengetahui informasi
                dan dokumentasi kegiatan terbaru.
              </p>

              <div className="social-grid">
                {mediaSosial.map((media) => (
                  <a
                    key={media.nama}
                    href={media.link}
                    target="_blank"
                    rel="noreferrer"
                    className="social-item"
                  >
                    <img src={media.gambar} alt={media.nama} />
                    <span>{media.nama}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src="/images/logo-panti.png"
              alt="Logo Panti Asuhan"
            />
            <div>
              <h3>Panti Asuhan Harapan Remaja</h3>
              <p>Bersama membangun masa depan yang lebih baik.</p>
            </div>
          </div>

          <div className="footer-links">
            {menu.map((item) => (
              <a key={item.link} href={item.link}>
                {item.nama}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Panti Asuhan Harapan Remaja. Hak cipta dilindungi.
        </div>
      </footer>
    </main>
  );
}
