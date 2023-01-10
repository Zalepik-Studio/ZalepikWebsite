---
title: "Deno.js, akankah menggantikan Node.js"
date: "2023-01-08"
city: " Bandar Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Pada kesempatan kali ini kita akan belajar tentang Deno.js. Nama Deno.js diambil dari kata Node.js yang diselewengkan atau dibalik"
thumbnail: "https://zalepik-studio.github.io/zalepik-learning/images/denojs-akankah-menggantikan-nodejs/thumbnail.png"
images: ["https://zalepik-studio.github.io/zalepik-learning/images/denojs-akankah-menggantikan-nodejs/images.png"]
banner: "https://zalepik-studio.github.io/zalepik-learning/images/denojs-akankah-menggantikan-nodejs/banner.png"
topik: "Deno.js"
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
- php
- python
- nodejs
- denojs
---

Pada kesempatan kali ini kita akan belajar tentang Deno.js. Nama Deno.js diambil dari kata Node.js yang diselewengkan atau dibalik. Deno adalah runtime JavaScript dan TypeScript yang dikembangkan oleh tim yang dipimpin oleh Ryan Dahl, yang juga merupakan pencipta Node.js. Deno didesain untuk mengatasi beberapa masalah yang terdapat pada Node.js, seperti keamanan yang buruk, ketergantungan pada paket npm yang tinggi, serta sulitnya mengelola versi paket.

#### Menginstall Deno.js
Untuk menginstal Deno di Windows, kita bisa menggunakan perintah berikut:

<div class="zbarisbaru"></div>

Using PowerShell
<pre class="language-javascript">
  <code class="language-javascript">
irm https://deno.land/install.ps1 | iex
  </code>
</pre>

Using Chocolatey
<pre class="language-javascript">
  <code class="language-javascript">
choco install deno
  </code>
</pre>

Using Scoop
<pre class="language-javascript">
  <code class="language-javascript">
scoop install deno
  </code>
</pre>
Untuk sistem operasi lainnya silahkan lihat di dokumentasi Deno.
Setelah instalasi selesai, buka Command Prompt atau PowerShell dan jalankan perintah deno --version untuk melihat apakah Deno telah berhasil terinstall dikomputer kita.

#### Membuat Server dengan Deno.js
Untuk membuat server menggunakan Deno, kita dapat menggunakan modul standar bawaan http yang tersedia di Deno. Berikut adalah contohnya:
<pre class="language-javascript">
  <code class="language-javascript">
import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
  </code>
</pre>
Untuk menjalankan server tersebut, kita bisa menggunakan perintah deno run di terminal:
<pre class="language-javascript">
  <code class="language-javascript">
deno run server.ts
  </code>
</pre>
Maka kita dapat melihat tulisan Hello World tampil di browser.
<img class="" src="https://zalepik-studio.github.io/zalepik-learning/images/denojs-akankah-menggantikan-nodejs/Screenshot (1).png">

#### Apa kelebihan Deno.js
Salah satu fitur terpenting dari Deno adalah keamanannya yang lebih baik. Deno menyertakan sistem sandbox yang membatasi akses aplikasi ke sistem file, jaringan, dan environment lainnya. Aplikasi Deno harus memberikan izin secara eksplisit untuk mengakses fitur-fitur tersebut. Deno juga tidak lagi membutuhkan package manager seperti npm, karena ia menyertakan fitur module loading yang built-in.

<div class="zbarisbaru"></div>

Deno juga memiliki integrasi yang lebih baik dengan TypeScript, bahasa pemrograman yang dikembangkan oleh Microsoft yang merupakan turunan dari JavaScript. TypeScript menambahkan fitur-fitur seperti typings dan type checking ke JavaScript, sehingga membuat kode lebih terstruktur dan mudah untuk di-debug.

#### Akankah Deno menggantikan Node.js
Meskipun masih sangat baru, Deno telah mulai menarik perhatian dari komunitas pengembang JavaScript. Banyak yang melihat Deno sebagai alternatif yang lebih baik dari Node.js karena fitur-fitur yang disediakannya. Namun, Deno masih tergolong dalam tahap pengembangan awal dan belum sepopuler Node.js, sehingga masih terdapat beberapa limitasi dan risiko yang perlu dipertimbangkan sebelum memutuskan untuk menggunakannya dalam proyek.

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---