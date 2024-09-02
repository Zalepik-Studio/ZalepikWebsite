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

<div class="zbarisbaru"></div>

**DOM SELECTION**

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

###### document.querySelectorAll
 
document.querySelectorAll() digunakan untuk menyeleksi semua elemen yang cocok berdasarkan selektor yang diberikan.

Contoh:

<pre class="language-html">
  <code class="language-html">
    <section>
        <div class="card">
        </div>
    </section>

    <script>
        document.querySelectorAll('card');
    </script>
  </code>
</pre>

<div class="zbarisbaru"></div>

**DOM MANIPULATION**

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

###### element.classList

element.classList adalah properti dalam JavaScript yang memberikan cara yang lebih mudah untuk mengelola daftar kelas (class) pada elemen HTML. Dengan menggunakan classList, kita dapat menambahkan, menghapus, memeriksa, atau mengganti kelas pada elemen dengan cara yang lebih efisien dan intuitif dibandingkan dengan menggunakan setAttribute untuk memanipulasi atribut class secara langsung.

<div class="zbarisbaru"></div>

Berikut adalah beberapa metode umum yang tersedia melalui element.classList:

<div class="zbarisbaru"></div>

**add(className):** 
Menambahkan satu atau lebih kelas ke elemen. Jika kelas sudah ada, maka tidak akan ditambahkan lagi (tidak ada duplikasi).

<pre class="language-javascript">
  <code class="language-javascript">
    element.classList.add('className1', 'className2');
  </code>
</pre>

**remove(className):**
Menghapus satu atau lebih kelas dari elemen. Jika kelas yang ingin dihapus tidak ada, maka tidak ada perubahan yang dilakukan.

<pre class="language-javascript">
  <code class="language-javascript">
    element.classList.remove('className1', 'className2');
  </code>
</pre>

**toggle(className):** 
Menambahkan kelas jika kelas tersebut belum ada, atau menghapusnya jika sudah ada. Sangat berguna untuk membuat elemen bergantian antara dua keadaan (misalnya, menampilkan dan menyembunyikan elemen).

<pre class="language-javascript">
  <code class="language-javascript">
    element.classList.toggle('className');
  </code>
</pre>

Metode ini juga bisa menerima argumen boolean kedua yang menentukan apakah kelas harus ditambahkan (true) atau dihapus (false).

<pre class="language-javascript">
  <code class="language-javascript">
    element.classList.toggle('className', true); // Memastikan kelas 'className' ada
    element.classList.toggle('className', false); // Memastikan kelas 'className' tidak ada
  </code>
</pre>

**contains(className):** 
Memeriksa apakah elemen memiliki kelas tertentu. Mengembalikan true jika kelas ada, dan false jika tidak.

<pre class="language-javascript">
  <code class="language-javascript">
    if (element.classList.contains('className')) {
      console.log('Kelas ada');
    }
  </code>
</pre>

**replace(oldClass, newClass):**
Mengganti kelas lama dengan kelas baru pada elemen.

<pre class="language-javascript">
  <code class="language-javascript">
    element.classList.replace('oldClass', 'newClass');
  </code>
</pre>

**Contoh Penggunaan element.classList**

<div class="zbarisbaru"></div>

Mari kita lihat contoh yang menggunakan element.classList untuk memanipulasi kelas:

<pre class="language-javascript">
  <code class="language-javascript">
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

      // Menambahkan kelas 'card' ke elemen
      element.classList.add('card');

      // Menghapus kelas 'card' dari elemen
      element.classList.remove('card');

      // Mengganti kelas 'card' dengan 'newCard'
      element.classList.replace('card', 'newCard');

      // Menambahkan kelas 'highlight' jika belum ada, atau menghapusnya jika sudah ada
      element.classList.toggle('highlight');

      // Mengecek apakah elemen memiliki kelas 'newCard'
      if (element.classList.contains('newCard')) {
        console.log('Elemen memiliki kelas newCard');
      }

      console.log(element);
    </script>
  </code>
</pre>

Dengan element.classList, kita dapat memanipulasi kelas elemen dengan cara yang lebih bersih dan efisien, yang membuat kode kita lebih mudah dibaca dan dikelola.

<div class="zbarisbaru"></div>

Dibawah ini kita akan melakukan studi kasus untuk menampilkan dan menyembunyikan elemen di JavaScript menggunakan element.ClassList.

<div class="zbarisbaru"></div>

<iframe src="https://zalepik-studio.github.io/ZalepikWebsite/static/source-code/element-class-list.html" width="100%" height="520px">
</iframe>

<div class="zbarisbaru"></div>

<pre class="language-javascript">
  <code class="language-javascript">
    <section>
    <!-- Tombol untuk menampilkan/menyembunyikan elemen -->
      <button id="toggleButton">Sembunyikan</button>

      <!-- Elemen yang akan ditampilkan/disembunyikan -->
      <div id="card">
        <h2>Title</h2>
        <p>Deskripsi kartu...</p>
      </div>
    </section>

    <script>
      // Menangkap elemen dengan id 'card'
      let cardElement = document.getElementById('card');
      // Menangkap tombol dengan id 'toggleButton'
      let toggleButton = document.getElementById('toggleButton');

      // Menambahkan event listener pada tombol untuk menangani klik
      toggleButton.addEventListener('click', function() {
      // Menggunakan classList.toggle untuk menambahkan atau menghapus kelas 'hidden'
      cardElement.classList.toggle('hidden');
    
      // Mengubah teks tombol berdasarkan kondisi
      if (cardElement.classList.contains('hidden')) {
        toggleButton.textContent = 'Tampilkan';
      } else {
        toggleButton.textContent = 'Sembunyikan';
      } 
      });
    </script>
  </code>
</pre>

Pada kode di atas, elemen card di sembunyikan & di tampilkan menggunakan toggle dengan kelas hidden. Kelas hidden akan secara bergantian di tambahkan atau di hapus dari elemen card ketika button di klik. Tombol Tampilkan & Sembunyikan akan secara bergantian berdasarkan kondisi kelas hidden yang di periksa menggunakan method contains().

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
