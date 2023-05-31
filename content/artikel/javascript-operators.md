---
title: "JavaScript Operators"
date: "2023-02-18"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: ""
thumbnail: "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_javascript%20operators.png"
images:
  [
    "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_javascript%20operators.png",
  ]
banner: "https://zenzalepik.github.io/Zalepik_Images/artikel/banner/zalepik_banner_javascript%20operators.png"
topik: "Fundamental JavaScript"
tags:
  - JavaScript
---

Operator di JavaScript adalah simbol atau tanda yang digunakan untuk melakukan operasi pada nilai atau variabel. Operator memungkinkan kita untuk melakukan operasi matematika, logika, perbandingan, dan lainnya pada data didalam program. Terdapat beberapa jenis operator di JavaScript sebagai berikut:

#### Operator Assignment

Operator assignment digunakan untuk menetapkan nilai pada variabel.

<pre class="language-javascript">
  <code class="language-javascript">
let x = 10;
x += 5; // sama dengan x = x + 5;
console.log(x); // Output: 15
  </code>
</pre>

#### Operator Aritmatika

Operator aritmatika digunakan untuk melakukan operasi matematika pada angka, seperti penjumlahan, pengurangan, perkalian, dan pembagian.

<pre class="language-javascript">
  <code class="language-javascript">
let x = 10;
let y = 5;

console.log(x + y); // Output: 15
console.log(x - y); // Output: 5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 2
  </code>
</pre>

#### Operator Perbandingan

Operator perbandingan digunakan untuk membandingkan nilai atau variabel, dan akan mengembalikan nilai boolean true atau false.

<div class="ztablewidthfull">

| Operator | Fungsi                  |
| -        | -                       |
| >        | lebih dari              |
| >=       | lebih dari sama dengan  |
| <        | kurang dari             |
| <=       | kurang dari sama dengan |
| ==       | sama dengan             |
| !=       | tidak sama dengan       |
| ===      | identik dengan          |
| !==      | tidak identik dengan    |

</div>

<div class="zbarisbaru"></div>

<pre class="language-javascript">
  <code class="language-javascript">
let x = 10;
let y = 5;

console.log(x > y); // Output: true
console.log(x < y); // Output: false
console.log(x >= y); // Output: true
console.log(x <= y); // Output: false
console.log(x === y); // Output: false
console.log(x !== y); // Output: true
  </code>
</pre>

#### Operator Logika

Operator logika digunakan untuk melakukan operasi logika pada nilai atau variabel, seperti AND, OR, dan NOT.

<div class="ztablewidthfull">

| Operator | Deskripsi                                                                                            |
| -  | -                                                                                                          |
| && | Operator AND, logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).         |
| II | Operator OR, logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true). |
| !  | Operator NOT, digunakan untuk membalikkan suatu kondisi.                                           |

</div>

<div class="zbarisbaru"></div>

<pre class="language-javascript">
  <code class="language-javascript">
let x = 10;
let y = 5;

console.log(x > 5 && y < 10); // Output: true
console.log(x > 5 || y < 2); // Output: true
console.log(!(x > y)); // Output: false
  </code>
</pre>

#### Operator Ternary

Operator ternary juga dikenal sebagai operator kondisional, digunakan untuk menguji kondisi tertentu dan mengembalikan nilai berdasarkan kondisi tersebut.

<pre class="language-javascript">
  <code class="language-javascript">
let age = 18;
let isAdult = (age < 18) ? "Belum dewasa" : "Sudah dewasa";
console.log(isAdult); // Output: Sudah dewasa
  </code>
</pre>

Itulah beberapa jenis operator yang ada di JavaScript. Operator sangat penting dalam pemrograman karena memungkinkan kita untuk melakukan operasi pada data dan menghasilkan hasil yang diinginkan.


<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
