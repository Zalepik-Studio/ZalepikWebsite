---
title: "Pengkondisian di JavaScript"
date: "2023-02-20"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: ""
thumbnail: "https://mzainulmuttaqin.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_pengkondisian%20di%20javascript.png"
images:
  [
    "https://mzainulmuttaqin.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_pengkondisian%20di%20javascript.png",
  ]
banner: "https://mzainulmuttaqin.github.io/Zalepik_Images/artikel/banner/zalepik_banner_pengkondisian di javascript.png"
topik: "Fundamental JavaScript"
tags:
  - JavaScript
---

Pengkondisian adalah pernyataan atau statement yang digunakan untuk membuat keputusan berdasarkan kondisi tertentu. Di JavaScript, pengkondisian dapat dilakukan menggunakan if/else statement atau switch case statement.

#### If/Else Statement

If/else statement digunakan untuk mengeksekusi suatu blok kode jika suatu kondisi bernilai true dan mengeksekusi blok kode lain jika kondisi bernilai false.

Contoh:

<pre class="language-javascript">
  <code class="language-javascript">
let angka = 10;

if (angka > 0) {
  console.log("Angka positif");
} else if (angka < 0) {
  console.log("Angka negatif");
} else {
  console.log("Angka nol");
}
  </code>
</pre>

<div class="zbarisbaru"></div>

Pada contoh di atas, jika nilai variabel angka lebih besar dari 0, maka program akan menampilkan teks "Angka positif". Jika angka lebih kecil dari 0, maka program akan menampilkan teks "Angka negatif". Jika angka sama dengan 0, maka program akan menampilkan teks "Angka nol".

<div class="zbarisbaru"></div>

Selain kondisi satu kali, kita juga dapat menggunakan kondisi bersarang dengan if/else statement. 

Contohnya:

<pre class="language-javascript">
  <code class="language-javascript">
let nilai = 80;

if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 80) {
  console.log("Nilai B");
} else if (nilai >= 70) {
  console.log("Nilai C");
} else if (nilai >= 60) {
  console.log("Nilai D");
} else {
  console.log("Nilai E");
}
  </code>
</pre>

Pada contoh di atas, kita menggunakan kondisi bersarang untuk menentukan nilai huruf berdasarkan skor nilai yang diberikan. Jika skor lebih besar atau sama dengan 90, program akan menampilkan teks "Nilai A". Jika skor di antara 80 dan 89, program akan menampilkan teks "Nilai B" dan seterusnya.

#### Switch Case Statement

Switch case statement digunakan untuk mengevaluasi suatu ekspresi dan mengeksekusi blok kode tertentu berdasarkan nilai dari ekspresi tersebut.

Contoh:

<pre class="language-javascript">
  <code class="language-javascript">
let hari = 3;

switch (hari) {
  case 1:
    console.log("Hari Minggu");
    break;
  case 2:
    console.log("Hari Senin");
    break;
  case 3:
    console.log("Hari Selasa");
    break;
  case 4:
    console.log("Hari Rabu");
    break;
  case 5:
    console.log("Hari Kamis");
    break;
  case 6:
    console.log("Hari Jumat");
    break;
  case 7:
    console.log("Hari Sabtu");
    break;
  default:
    console.log("Hari tidak valid");
    break;
}
  </code>
</pre>

Pada contoh di atas, program akan menampilkan teks "Hari Selasa" karena variabel hari memiliki nilai 3. Jika nilai hari tidak sama dengan nilai yang terdaftar pada statement case, maka program akan mengeksekusi statement pada default.

<div class="zbarisbaru"></div>

Switch case statement dapat digunakan ketika kita memiliki banyak kondisi yang ingin kita evaluasi. Kita dapat menambahkan lebih dari satu statement pada setiap case, seperti pada contoh berikut:

<pre class="language-javascript">
  <code class="language-javascript">
let buah = "apel";

switch (buah) {
  case "apel":
  case "jeruk":
  case "mangga":
    console.log("Buah favorit");
    break;
  case "anggur":
    console.log("Buah kesukaan");
    break;
  default:
    console.log("Saya tidak suka buah ini");
    break;
}
  </code>
</pre>

Pada contoh di atas, program akan menampilkan teks "Buah favorit" karena nilai variabel buah sama dengan "apel". Karena case "apel", "jeruk", dan "mangga" memiliki pernyataan yang sama, maka kita dapat menyusun mereka pada satu case tanpa harus menulis ulang kode tersebut.

<div class="zbarisbaru"></div>

Pada contoh di atas, program akan menampilkan teks "Buah favorit" karena nilai variabel buah sama dengan "apel". Karena case "apel", "jeruk", dan "mangga" memiliki pernyataan yang sama, maka kita dapat menyusun mereka pada satu case tanpa harus menulis ulang kode tersebut.


<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
