---
title: "Cara Membuat Elemen Melayang Saat Discroll pada Website"
date: "2022-12-16"
city: "Jombang"
writer: "Heri"
zname_writer: "Moh. Zain Muttaqin"
zartikel: "artikel"
# description: "Ini deskription blog1 lorem ullamcorper tincidunt. Donec ultricies justo sit amet rhoncus hendrerit. Nunc scelerisque velit eu est suscipit, sed congue dui malesuada. Donec ac pretium pur"
# thumbnail: "https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_zhop_sm.png"
# banner: "https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_zhop_sm.png"
topik: "uiux"
tags: 
- html
- js
- javascript
- library
- css
- aos
- aos cdn
- animate
- frontend
- speedup
---

Pada tutorial kali ini kita akan belajar bagaimana caranya membuat elemen melayang saat di scroll. Kita akan menggunakan library yang bernama AOS atau Animate On Scroll. Library ini bisa kalian lihat disini <a class="text-blue-600 italic" href="https://michalsnik.github.io/aos/" target="_blank">👉https://michalsnik.github.io/aos/</a> atau kalian juga bisa mengaksesnya di repository GitHub <a class="text-blue-600 italic" href="https://github.com/michalsnik/aos/" target="_blank">👉https://github.com/michalsnik/aos/</a>. Baik, langsung saja kita lanjutkan ke pembahasannya.

<div class="zbarisbaru"></div>

#### Langkah Pertama
Yang harus kalian lakukan adalah memasang link **CDN CSS dan JS** di codingan kalian. Silahkan copy code cdn untuk **CSS**nya dibawah ini dan letakkan di dalam tag **head** html kalian.
<pre class="language-css">
    <code class="language-css">
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    </code>
</pre>
Contoh pemasangan CSSnya seperti ini:
<img class="zwidthfull" src="https://zalepik-studio.github.io/Zalepik_Images_heri/1cara-membuat-elemen-melayang-saat-di-scroll/img/Screenshot%20(2).png" alt="Inisialisasi script AOS JS">

<div class="zbarisbaru"></div>

Kemudian silahkan copy code CDN untuk **Javascript**nya dan letakkan di bagian tag **body** baris paling bawah sebelum penutup tag **/body**.
<pre class="language-javascript">
  <code class="language-javascript">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  </code>
</pre>

Contoh pemasangan CDN **Javascript**nya seperti ini:
<img class="zwidthfull" src="https://zalepik-studio.github.io/Zalepik_Images_heri/1cara-membuat-elemen-melayang-saat-di-scroll/img/Screenshot%20(2).png" alt="Inisialisasi script AOS JS">

#### Langkah Kedua
Setelah itu, **inisialisasi Library AOS**nya dengan cara mengcopy script berikut, letakkan di bawah CDN Javascript sebelumnya:

<pre class="language-javascript">
  <code class="language-javascript">
<script>
  AOS.init();
</script>
  </code>
</pre>

Contohnya seperti ini:
<img class="zwidthfull" src="https://zalepik-studio.github.io/Zalepik_Images_heri/1cara-membuat-elemen-melayang-saat-di-scroll/img/Screenshot%20(2).png" alt="Inisialisasi script AOS JS">

#### Langkah Ketiga
Mari kita insert gambar ke dalam html yang sudah kita buat. Masukkan lebih dari satu gambar untuk melihat hasil yang lebih menarik saat Library AOS sudah berjalan pada website kita. Jangan lupa letakkan di atas/sebelum code script inisialisasi library AOS. Kalian bisa mengcopy contoh code insert gambar melalui code di bawah ini:

<pre class="language-html">
  <code class="language-html">
<img src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_Zalepik_Website1.png">
<img src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_zhop_sm.png">
<img src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_dribbble_invite_inspire_by...png">
<img src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_porfolio_4.png">
<img src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_All_Gimpscape_Banner.png">
  </code>
</pre>

Jika kalian ingin mengganti url gambarnya bisa ubah saja isi dari bagian **src=""**.

<div class="zbarisbaru"></div>

Berikut contoh insert gambarnya.
<img class="zwidthfull" src="https://zalepik-studio.github.io/Zalepik_Images_heri/1cara-membuat-elemen-melayang-saat-di-scroll/img/Screenshot%20(3).png" alt="Pemasangan script CDN JS.">

#### Langkah Kempat
**Setelah itu**, mari kita animasikan! Kalian bisa memasang **atribut untuk memberi animasi** pada elemen yang ingin kamu animasikan.
<pre class="language-html">
  <code class="language-html">
<img data-aos="fade-up" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_Zalepik_Website1.png">
<img data-aos="fade-down" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_zhop_sm.png">
<img data-aos="fade-right" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_dribbble_invite_inspire_by...png">
<img data-aos="fade-up-left" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_porfolio_4.png">
<img data-aos="fade-up-right" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_All_Gimpscape_Banner.png">
  </code>
</pre>
Silahkan melihat daftar animasi yang tersedia melalui link berikut <a class="text-blue-600 italic" href="https://michalsnik.github.io/aos/" target="_blank">👉https://michalsnik.github.io/aos/</a>.


<div class="zbarisbaru"></div>

#### Langkah Kelima
Kalian juga bisa mengatur durasi animasinya. Tinggal tambahkan saja atribut **data-aos-duration**.
<pre class="language-html">
  <code class="language-html">
<img data-aos="fade-up" data-aos-duration="500" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_Zalepik_Website1.png">
<img data-aos="fade-down" data-aos-duration="500" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_zhop_sm.png">
<img data-aos="fade-right" data-aos-duration="500" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_dribbble_invite_inspire_by...png">
<img data-aos="fade-up-left" data-aos-duration="500" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_porfolio_4.png">
<img data-aos="fade-up-right" data-aos-duration="500" src="https://mzainulmuttaqin.github.io/Zalepik_Images/portfolio/zalepik_portfolio_All_Gimpscape_Banner.png">
  </code>
</pre>


<div class="zbarisbaru"></div>

#### Cuma Itu Aja?
Tentu saja masih banyak pengaturan lainnya yang bisa kita tambah dengan library AOS ini. Silahkan mengunjungi halaman berikut untuk mencari tahu pengaturan lainnya yang dapat kita coba. <a class="text-blue-600 italic" href="https://michalsnik.github.io/aos/" target="_blank">👉https://michalsnik.github.io/aos/</a>.


<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---