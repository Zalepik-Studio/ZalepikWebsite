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

Jika sudah insatal node.js pastikan kalian untuk mengeceknya kembali di terminal kalin dengan perintah node –-versio dan npm --version, maka akan mucul versi node kalian

<pre class="language-javascript">
  <code class="language-javascript">
$node --version
npm --version
  </code>
</pre>

image terminal version
<img class="" src="https://zalepik-studio.github.io/ZalepikWebsite/static/images/Screenshot (2).png" alt="Pemasangan script CDN JS.">
Disini saya menggunakan node versi 21 dan npm versi 10. Jika node dan npm sudah terinstall dengan aman maka kita menuju seteps selanjutnya yaitu insatl NextJS

<div class="zbarisbaru"></div>

Selanjutnya kalian bisa membuat foleder baru dengan nama setup-next setelah itu buka CMD dengan path yang mengarah ke folder yang baru di buat, jika sudah masuk ke path floder langsung saja ketikan perintah <strong>npx create-next-app@latest .</strong>

<pre class="language-javascript">
  <code class="language-javascript">
   $npx create-next-app@latest .
   </code>
</pre>

<div class="zbarisbaru"></div>

image install nextjs
<img class="" src="https://zalepik-studio.github.io/ZalepikWebsite/static/images/Screenshot (2).png" alt="Pemasangan script CDN JS.">
Disini kita install next dengan App Router, sesuaikan seperti gambar di atas agar konfigurasi kedepannya kita bisa sama dan tidak ada kendala

<div class="zbarisbaru"></div>

Selanjutnya buka folder tersebut di visual studio code, anda bisa menggunakan perintah code . di path yang sama pada folder setup-next

<div class="zbarisbaru"></div>

Setelah di buka maka kita akan mendapatkan struktur folder seperti di bawah ini
image struktur folder
<img class="" src="https://zalepik-studio.github.io/ZalepikWebsite/static/images/Screenshot (2).png" alt="Pemasangan script CDN JS.">
Hal selanjutnya kalian bisa coba untuk run dengan perintah <strong>npm run dev</strong> di terminal visual setudio code, lalu apa yang terjadi? Selamat anda sudah bisa menjalankan projek next pertama kalian!

<div class="zbarisbaru"></div>

image tampilan awal nextjs
<img class="" src="https://zalepik-studio.github.io/ZalepikWebsite/static/images/Screenshot (2).png" alt="Pemasangan script CDN JS.">

secara default NextJS runing di port http://localhost:3000 dan tampilan awal NextJS seperti di atas, jika kalian ingin mengantinya kalian bisa pergi ke folder <strong>app->page.js</strong>. Lalu ubah seperti code di bawah

<pre class="language-javascript">
  <code class="language-javascript">
import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About
  </code>
</pre>



