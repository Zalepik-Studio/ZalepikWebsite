---
title: "Cara Membuat Elemen Bergerak Mengambang dengan CSS dan JavaScript"
date: "2023-01-19"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Dalam membuat website, terkadang kita ingin menambahkan efek visual yang menarik dan dinamis seperti elemen yang bergerak mengambang naik turun secara terus menerus. Efek ini bisa dicapai dengan menggunakan CSS dan JavaScript"
thumbnail: "https://zalepik-studio.github.io/zalepik-learning/images/cara-membuat-elemen-bergerak-mengambang-dengan-css-dan-javascript/thumbnail.png"
images: ["https://zalepik-studio.github.io/zalepik-learning/images/cara-membuat-elemen-bergerak-mengambang-dengan-css-dan-javascript/images.png"]
banner: "https://zalepik-studio.github.io/zalepik-learning/images/cara-membuat-elemen-bergerak-mengambang-dengan-css-dan-javascript/banner.png"
topik: "CSS & JavaScript"
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
- react
- mysql
- api
---

Dalam membuat website, terkadang kita ingin menambahkan efek visual yang menarik dan dinamis seperti elemen yang bergerak mengambang naik turun secara terus menerus. Efek ini bisa dicapai dengan menggunakan CSS dan JavaScript.

<div class="zbarisbaru"></div>

#### Cara Pertama
Cara pertama adalah dengan menggunakan CSS. Kita bisa menambahkan class pada elemen yang ingin kita buat bergerak mengambang naik turun, lalu menambahkan properti animation. Contohnya seperti ini:

<pre class="language-css">
    <code class="language-css">
.floating-element {
    animation: floating 1s ease-in-out infinite;
}

@keyframes floating {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
    </code>
</pre>

Pada kode diatas kita menambahkan class "floating-element" pada elemen yang ingin kita buat bergerak mengambang naik turun. Kemudian kita menambahkan properti animation dengan nama "floating" yang berlangsung selama 1 detik dan diulang-ulang. Pada properti @keyframes, kita menentukan posisi awal elemen, posisi yang ingin kita buat elemen bergerak naik sebesar -10px dan posisi yang ingin kita buat elemen bergerak turun kembali ke posisi awal, dengan menambahkan translateY (0)

#### Cara Kedua

Cara kedua adalah dengan menggunakan JavaScript. Kita bisa menambahkan event listener pada elemen yang ingin kita buat bergerak mengambang naik turun, lalu menambahkan properti style. Contohnya seperti ini:

<pre class="language-javascript">
  <code class="language-javascript">
let floatingElement = document.querySelector('.floating-element');

let position = 0;

setInterval(function() {
    if (position === 0) {
        position = -10;
    } else {
        position = 0;
    }
    floatingElement.style.transform = 'translateY(' + position + 'px)';
}, 1000);
  </code>
</pre>

Pada kode diatas kita menentukan elemen yang ingin kita buat bergerak mengambang naik turun dengan menggunakan querySelector. Kemudian kita menambahkan variable position yang digunakan untuk menentukan posisi elemen. Kemudian kita menambahkan setInterval yang akan dijalankan setiap 1 detik. Pada setInterval kita mengecek posisi saat ini. jika posisi saat ini adalah 0 maka posisi diubah menjadi -10, jika tidak posisi kembali menjadi 0. Kemudian kita menambahkan properti style transform pada elemen dengan menambahkan posisi yang telah ditentukan sebelumnya. Dengan demikian, elemen akan bergerak naik turun secara terus menerus setiap 1 detik.

<div class="zbarisbaru"></div>

Kedua cara di atas dapat digunakan sesuai kebutuhan dan preferensi, baik itu menggunakan CSS atau JavaScript. Namun perlu diingat bahwa cara yang menggunakan JavaScript akan menambah beban pada website karena harus menjalankan script yang dituliskan. Sedangkan cara yang menggunakan CSS hanya memerlukan properti yang ditambahkan pada elemen yang ingin dibuat bergerak, sehingga lebih ringan dari segi performa.

<div class="zbarisbaru"></div>

Dalam penggunaan elemen yang bergerak mengambang, jangan lupa untuk menyesuaikan dengan desain dan konten website yang dibuat agar terlihat estetis dan tidak mengganggu pengalaman pengguna.

<div class="zbarisbaru"></div>

Contoh kode yang dapat digunakan sebagai referensi:

<pre class="language-html">
    <code class="language-html">
<div class="floating-element">
    <img src="elemen.jpg">
</div>
    </code>
</pre>

Menggunakan CSS
<pre class="language-css">
    <code class="language-css">
.floating-element {
    animation: floating 1s ease-in-out infinite;
}

@keyframes floating {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
    </code>
</pre>

Menggunakan JavaScript
<pre class="language-javascript">
  <code class="language-javascript">
let floatingElement = document.querySelector('.floating-element');

let position = 0;

setInterval(function() {
    if (position === 0) {
        position = -10;
    } else {
        position = 0;
    }
    floatingElement.style.transform = 'translateY(' + position + 'px)';
}, 1000);
  </code>
</pre>

Dari contoh di atas, kita menambahkan class "floating-element" pada elemen div yang berisi gambar, lalu menambahkan properti animation dan setInterval pada script javascript. Dengan demikian, elemen gambar akan bergerak naik turun secara terus menerus setiap 1 detik.

<div class="zbarisbaru"></div>

Kamu dapat melihat animasi elemen tersebut disini:
<iframe src="https://zalepik-studio.github.io/zalepik-learning/source-code/cara-membuat-elemen-bergerak-mengambang-dengan-css-dan-javascript/" width="100%" height="520px">
</iframe>

<div class="zbarisbaru"></div>

Kamu juga bisa mengunduh source code nya disini:<a class="text-blue-600 italic" href="https://github.com/Zalepik-Studio/zalepik-learning/tree/main/source-code/cara-membuat-elemen-bergerak-mengambang-dengan-css-dan-javascript/" target="_blank">👉https://github.com/Zalepik-Studio/zalepik-learning/tree/main/source-code/cara-membuat-elemen-bergerak-mengambang-dengan-css-dan-javascript/</a>


<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---