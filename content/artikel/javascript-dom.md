---
title: "JavaScript DOM"
date: "2024-08-19"
city: "Cikarang"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: ""
thumbnail: "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail"
images: ["https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail"]
banner: "https://zenzalepik.github.io/Zalepik_Images/artikel/banner"
topik: "JavaScript"
tags:
  - JavaScript DOM
---

DOM (Document Object Model) adalah metode di JavaScript untuk menyeleksi dan memanipulasi elemen HTML. Dalam materi kali ini kita akan membahas mengenai DOM Selection dan DOM Manipulation.

#### DOM Selection

DOM Selection digunakan untuk menyeleksi elemen HTML. Ada beberapa cara di JavaScript untuk menyeleksi dokumen.

###### document.getElementById()

document.getElementById() digunakan untuk menyeleksi dokumen HTML berdasarkan id.

Contoh:

<pre class="language-html">
  <code class="language-html">
    <section>
        <div id="card">
        </div>
    </section>

    <script>
        document.getElementById('card');
    </script>
  </code>
</pre>

Pada kode di atas JavaScript menyeleksi elemen berdasarkan id 'card'.

###### document.getElementsByClassName()

document.getElementsByClassName() digunakan untuk menyeleksi dokumen HTML berdasarkan kelas.

Contoh:

<pre class="language-html">
  <code class="language-html">
    <section>
        <div class="card">
        </div>
    </section>

    <script>
        document.getElementsByClassName('card');
    </script>
  </code>
</pre>

Pada kode di atas JavaScript menyeleksi elemen berdasarkan kelas 'card'.

###### document.getElementsByTagName()

document.getElementsyTagName() digunakan untuk menyeleksi dokumen HTML berdasarkan tag HTML.

Contoh:

<pre class="language-html">
  <code class="language-html">
    <section>
        <div class="card">
        </div>
    </section>

    <script>
        document.getElementsByTagName('div');
    </script>
  </code>
</pre>

Pada kode di atas JavaScript menyeleksi elemen berdasarkan tag div.

###### document.querySelector
 
document.querySelector() digunakan untuk menyeleksi elemen pertama pada HTML.

Contoh:

<pre class="language-html">
  <code class="language-html">
    <section>
        <div class="card">
        </div>
    </section>

    <script>
        document.querySelector('card');
    </script>
  </code>
</pre>


#### DOM Manipulation

DOM Manipulation digunakan untuk memanipulasi elemen HTML. Ada beberapa cara di JavaScript untuk memanipulasi dokumen HTML.

###### element.innerHTML

element.innerHTML digunakan untuk menambahkan konten HTML baru ke dalam elemen.

Contoh:

<pre class="language-html">
  <code class="language-html">
  <section>
    <div class="card">
    </div>
  </section>

  <script>
    // Mengambil elemen pertama dengan kelas 'card'
    let card = document.getElementsByClassName('card')[0];

    // Menambah isi elemen 'card' menggunakan innerHTML
    card.innerHTML = `
        <h2>Title</h2>
        <p>Card description here...</p>
        <button>Button</button>
    `;
  </script>
  </code>
</pre>

Pada kode di atas JavaScript menangkap elemen pertama menggunakan indeks ke-[0] dengan kelas 'card'. Setelah itu, 
isi elemen di tambahkan dengan metode innerHTML.

<figure class="zwidthfull">
  <img src="https://zenzalepik.github.io/Zalepik_Images/portfolio/" alt="">
</figure>

###### element.style

element.style adalah metode untuk melakukan styling elemen menggunakan JavaScript.

Contoh:

<pre class="language-html">
  <code class="language-html">
  <section>
    <div id="card">
        <h2>Title</h2>
        <p>Card description here...</p>
        <button>Button</button>
    </div>
  </section>

  <script>
    let element = document.getElementById('card');
    element.style.display = 'none';
  </script>
  </code>
</pre>

Pada kode di atas JavaScript menangkap elemen HTML dengan id 'card'. Lalu, elemen dengan id 'card' di hilangkan dengan metode element.style.display = 'none';

###### setAttribute

setAttribute() adalah metode dalam JavaScript yang digunakan untuk menetapkan atau memperbarui nilai atribut pada elemen HTML. Atribut HTML adalah nilai-nilai yang dapat diterapkan pada elemen seperti id, class, src, href, alt, dll.

<div class="zbarisbaru"></div>

Dengan setAttribute(), kita bisa menambahkan atau memodifikasi atribut elemen melalui JavaScript.

Contoh: 

<pre class="language-html">
  <code class="language-html">
  <section>
    <div id="card">
        <h2>Title</h2>
        <p>Card description here...</p>
        <button>Button</button>
    </div>
  </section>

  <script>
    // Menangkap elemen dengan id 'card'
    let element = document.getElementById('card');

    // Menambahkan atribut 'class' ke elemen 'card'
    element.setAttribute('class', 'card');

    // Menambahkan atribut 'style' untuk mengatur background color
    element.setAttribute('style', 'background-color: blue;');

    // Kita bisa melihat elemen ini dalam console
    console.log(element);
  </script>
  </code>
</pre>

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
