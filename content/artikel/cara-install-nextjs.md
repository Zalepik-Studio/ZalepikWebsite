---
title: "Cara Install Nextjs"
date: 2024-03-20T01:53:42+07:00
city: "Surabaya"
writer: "Amar"
zname_writer: "Amar Nuruddin"
zartikel: "artikel"
description: "Next.js adalah sebuah kerangka kerja JavaScript yang berfokus pada pengalaman pengembangan yang intuitif dan pengoptimalan kinerja. Dengan dukungan penuh untuk React, Next.js menyediakan solusi lengkap untuk membangun aplikasi web"
thumbnail: "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_pengkondisian%20di%20javascript.png"
images:
  [
   "https://zenzalepik.github.io/Zalepik_Images/artikel/banner/zalepik_banner_pengkondisian%20di%20javascript.png",
  ]
banner: "https://zenzalepik.github.io/Zalepik_Images/artikel/banner/zalepik_banner_pengkondisian%20di%20javascript.png"
topik: "Instal NextJS"
tags:
  - JavaScript
  - React
  - Next
---

Nah setelah kita mengenal NextJS dan fitur fiturnya di materi sebelumnya sekarang kita langsung saja untuk setup projek pretama kita di NextJS

<div class="zbarisbaru"></div>

Hal pertama sebelum install NextJS pastikan anda sudah menginstall nodejs, nah untuk bisa menjalankan Next versi terbaru kita harus menggunakan node versi 18 ke atas bisa di lihat di dokumentasi nextjs https://nextjs.org/docs. 

<div class="zbarisbaru"></div>

Jika sudah insatal node.js pastikan kalian untuk mengeceknya kembali di terminal kalin dengan perintah node –-versio dan npm --version, maka akan muncul versi node kalian

<pre class="language-javascript">
  <code class="language-javascript">
$node --version
$npm --version
  </code>
</pre>


<img class="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/terminal-version-ndoe.png?raw=true" alt="node version">

Disini saya menggunakan node versi 21 dan npm versi 10. Jika node dan npm sudah terinstall dengan aman maka kita menuju seteps selanjutnya yaitu insatl NextJS

<div class="zbarisbaru"></div>

Selanjutnya kalian bisa membuat foleder baru dengan nama setup-next setelah itu buka CMD dengan path yang mengarah ke folder yang baru di buat, jika sudah masuk ke path floder langsung saja ketikan perintah <strong>npx create-next-app@latest .</strong>

<pre class="language-javascript">
  <code class="language-javascript">
   $npx create-next-app@latest .
   </code>
</pre>

<div class="zbarisbaru"></div>

<img class="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/install-nextjs.png?raw=true" alt="instalasi nextjs">

Disini kita install next dengan App Router, sesuaikan seperti gambar di atas agar konfigurasi kedepannya kita bisa sama dan tidak ada kendala

<img class="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/install-success-nextjs.png?raw=true" alt="success instalasi nextjs">

Jika sudah ada tulisan Success! Seperti gambar di atas maka proses instalasi telah berhasil, selamat.

<div class="zbarisbaru"></div>

Selanjutnya buka folder tersebut di visual studio code, anda bisa menggunakan perintah code . di path yang sama pada folder setup-next

<div class="zbarisbaru"></div>

Setelah di buka maka kita akan mendapatkan struktur folder seperti di bawah ini
<img class="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/struktur-folder-nextjs.png?raw=true" alt="struktur-folder">
Hal selanjutnya kalian bisa coba untuk run dengan perintah <strong>npm run dev</strong> di terminal visual setudio code, lalu apa yang terjadi? Selamat anda sudah bisa menjalankan projek next pertama kalian!

<div class="zbarisbaru"></div>

<img class="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/page-pertama-nextjs.png?raw=true" alt="page-awal-nextjs">

secara default NextJS runing di port http://localhost:3000 dan tampilan awal NextJS seperti di atas, jika kalian ingin mengantinya kalian bisa pergi ke folder <strong>app->page.js</strong>. Lalu ubah seperti code di bawah

<pre class="language-javascript">
  <code class="language-javascript">
import React from 'react'

const About = () => {
  return (
    <div>Hallo semua!!</div>
  )
}

export default About
  </code>
</pre>

Maka otomatis halaman langsung berubah tanpa kita reload, nah ini yang disebut Hot Module Replacement pada NextJS

<div class="zbarisbaru"></div>


<img class="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/page-setelah-diubah.png?raw=true" alt="page setelah di ubah JS.">

Maka otomatis halaman langsung berubah tanpa kita reload, nah ini yang disebut Hot Module 
Replacement pada NextJS

<div class="zbarisbaru"></div>

Lalu bagai mana untuk membuat halaman atau page baru di NextJS?

<div class="zbarisbaru"></div>

Itu sangat simpel dan sangat mudah tanpa menggunakan konfigurasi route yang akan di tuju seperti 
yang ada di react js dan kita tidak perlu menginstall react router dom, tapi sebelum itu kalian bisa 
melihat ilustrasi dibawah ini terlebih dahulu:

<img class="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/ilustrasi-root.png?raw=true" alt="ilustrasi root">

Dimana file yang berada di dalam app berfungsi sebagai rootnya, lalu file layout.js merupakan root 
dari layout dsigin yang akan kita buat sedangkan page.js merupakan file yang akan pertama kali di render atau di tampilkan jika website kita pertama kali di buka

<div class="zbarisbaru"></div>

Oke. Langsung saja kita membuat halaman baru, silahkan kalian membuat folder about lalu di dalmnya kalian buat file page.js sperti di bawah ini
<img calss="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/membuat-page-dinextjs.png?raw=true" alt="page about CDN">

<div class="zbarisbaru"></div>

lalu buat code di folder about/page.js seperti di bawah ini
<pre class="language-javascript">
  <code class="language-javascript">
import React from 'react'

const About = () => {
  return (
    <div>Hallo semua!!</div>
  )
}

export default About
  </code>
</pre>

Dengan struktur folder di atas otomatis kita sudah di buatkan rutingan oleh next js di mana pathnya akan mengarah ke /about

<img class="" src="https://github.com/zenzalepik/Zalepik_Images/blob/amar-2024/artikel/root-about.png?raw=true" alt="root page about">

<div class="zbarisbaru"></div>

 nahh kita telah menjelajahi langkah-langkah pertama dalam memulai dengan Next.js, sebuah platform yang kuat untuk pengembangan aplikasi web React. Melalui panduan instalasi awal hingga penerapan routing dasar, kita dapat memahami betapa mudahnya memulai dengan Next.js dan memanfaatkan fitur-fitur yang disediakannya. Dengan Next.js, pengembang dapat dengan cepat membangun aplikasi web yang responsif dan cepat, sambil tetap memiliki kontrol penuh atas struktur proyek dan navigasi pengguna. Dengan demikian, langkah-langkah awal ini memberikan fondasi yang solid bagi para pengembang untuk menjelajahi lebih jauh potensi Next.js dalam membangun pengalaman web yang menarik dan inovatif.