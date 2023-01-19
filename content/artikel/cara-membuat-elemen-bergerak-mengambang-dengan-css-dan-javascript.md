---
title: "Cara Membuat Elemen Bergerak Mengambang dengan CSS dan JavaScript"
date: "2023-01-19"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Dalam pembuatan website, terkadang kita ingin menambahkan efek visual yang menarik dan dinamis seperti elemen yang bergerak mengambang. Efek ini bisa dicapai dengan menggunakan CSS dan JavaScript"
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

Dalam pembuatan website, terkadang kita ingin menambahkan efek visual yang menarik dan dinamis seperti elemen yang bergerak mengambang. Efek ini bisa dicapai dengan menggunakan CSS dan JavaScript.

<div class="zbarisbaru"></div>

#### Cara Pertama
Cara pertama adalah dengan menggunakan CSS. Kita bisa menambahkan class pada elemen yang ingin kita buat bergerak mengambang, lalu menambahkan properti animation. Contohnya seperti ini:
<pre class="language-css">
    <code class="language-css">
.floating-element {
    animation: floating 5s infinite;
}

@keyframes floating {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-10px);
    }
}
    </code>
</pre>

Pada kode diatas kita menambahkan class "floating-element" pada elemen yang ingin kita buat bergerak mengambang. Kemudian kita menambahkan properti animation dengan nama "floating" yang berlangsung selama 5 detik dan diulang-ulang. Pada properti @keyframes, kita menentukan dari posisi awal elemen sampai posisi yang ingin kita buat elemen bergerak, dalam hal ini menambahkan translateY sebesar -10px.

#### Cara Kedua

Cara kedua adalah dengan menggunakan JavaScript. Kita bisa menambahkan event listener pada elemen yang ingin kita buat bergerak mengambang, lalu menambahkan properti style. Contohnya seperti ini:

<pre class="language-javascript">
  <code class="language-javascript">
let floatingElement = document.querySelector('.floating-element');

floatingElement.addEventListener('mouseover', function() {
    floatingElement.style.transform = 'translateY(-10px)';
});

floatingElement.addEventListener('mouseout', function() {
    floatingElement.style.transform = 'translateY(0)';
});
  </code>
</pre>

Pada kode diatas kita menentukan elemen yang ingin kita buat bergerak mengambang dengan menggunakan querySelector. Kemudian kita menambahkan event listener pada elemen tersebut, yaitu mouseover dan mouseout. Pada saat mouseover, elemen akan bergerak ke posisi yang ditentukan dengan menambahkan properti style transform sebesar -10px. Sedangkan pada saat mouseout, elemen akan kembali ke posisi awal dengan menambahkan properti style transform sebesar 0.

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
    animation: floating 5s infinite;
}

@keyframes floating {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-10px);
    }
}
    </code>
</pre>

Menggunakan JavaScript
<pre class="language-javascript">
  <code class="language-javascript">
let floatingElement = document.querySelector('.floating-element');

floatingElement.addEventListener('mouseover', function() {
    floatingElement.style.transform = 'translateY(-10px)';
});

floatingElement.addEventListener('mouseout', function() {
    floatingElement.style.transform = 'translateY(0)';
});
  </code>
</pre>

Dari contoh kode diatas, kita menambahkan class "floating-element" pada elemen div yang berisi gambar, lalu menambahkan properti animation dan event listener pada script javascript. Dengan demikian, elemen gambar akan bergerak mengambang pada saat mouseover dan kembali ke posisi awal pada saat mouseout.

<div class="zbarisbaru"></div>

Kamu dapat melihat animasi elemen tersebut disini:
<iframe src="https://zalepik-studio.github.io/zalepik-learning/source-code/cara-membuat-elemen-bergerak-mengambang-dengan-css-dan-javascript/" width="100%" height="520px">
</iframe>

<div class="zbarisbaru"></div>

Kamu juga bisa mengunduh source code nya disini:<a class="text-blue-600 italic" href="https://github.com/zalepik-studio/zalepik-learning/source-code/cara-membuat-elemen-bergerak-mengambang-dengan-css-danjavascript/" target="_blank">👉https://github.com/zalepik-studio/zalepik-learning/source-code/cara-membuat-elemen-bergerak-mengambang-dengan-css-dan-javascript/</a>.


<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---