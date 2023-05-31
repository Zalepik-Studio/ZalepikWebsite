---
title: "JavaScript Variable"
date: "2023-02-13"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: ""
thumbnail: "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_javascript%20variable.png"
images:
  [
    "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_javascript%20variable.png",
  ]
banner: "https://zenzalepik.github.io/Zalepik_Images/artikel/banner/zalepik_banner_javascript%20variable.png"
topik: "Fundamental JavaScript"
tags:
  - JavaScript
---

Variabel adalah suatu deklarasi yang digunakan untuk menyimpan data atau nilai yang akan dikelola dalam sebuah program. Ada tiga cara untuk mendeklarasikan variabel di JavaScript, yaitu var, let dan const. Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel menggunakan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbulkan bug.

#### var

Variabel yang dideklarasikan menggunakan keyword "var" dapat dideklarasikan ulang dan memiliki akses yang luas dalam program.

<div class="zbarisbaru"></div>

Untuk mendeklarasikan variabel di JavaScript menggunakan var, gunakan keyword var kemudian di ikuti dengan nama variabelnya.

<pre class="language-javascript">
  <code class="language-javascript">
var age = 18;

console.log(age);

/* output
18
*/
  </code>
</pre>

#### let

Variabel yang dideklarasikan menggunakan keyword "let" memiliki akses yang lebih terbatas daripada variabel yang dideklarasikan dengan "var". Variabel ini hanya dapat dideklarasikan sekali dan tidak bisa dideklarasikan ulang.

<div class="zbarisbaru"></div>

Untuk mendeklarasikan variabel di JavaScript menggunakan let, gunakan keyword let kemudian di ikuti dengan nama variabelnya.

<pre class="language-javascript">
  <code class="language-javascript">
let age;
  </code>
</pre>

Kode untuk mendeklarasikan variabel seperti diatas disebut dengan ***declaration statement***. Selanjutnya, untuk mengisi nilai variabel gunakan tanda sama dengan (=).

<pre class="language-javascript">
  <code class="language-javascript">
let age;
age = 18;

console.log(age);

/* output
18
*/
  </code>
</pre>

Kita juga bisa langsung mengisi nilai variabel setelah di deklarasikan seperti berikut.

<pre class="language-javascript">
  <code class="language-javascript">
let age = 18;
console.log(age);

/* output
18
*/
  </code>
</pre>

Variabel yang langsung di inisialiasai setelah di deklarasikan menggunakan (=) seperti diatas disebut dengan ***assignment expression***.

#### const

Variabel yang dideklarasikan menggunakan keyword "const" adalah variabel konstan, yang artinya nilainya tidak bisa diubah setelah dideklarasikan.

<div class="zbarisbaru"></div>

Untuk mendeklarasikan variabel di JavaScript menggunakan const, gunakan keyword const kemudian di ikuti dengan nama variabelnya.

<pre class="language-javascript">
  <code class="language-javascript">
const age = 18;

console.log(age);

/* output
18
*/
  </code>
</pre>

Seperti yang sudah disebutkan diatas, variabel yang di deklarasikan menggunakan const nilainya tidak bisa diubah. Jika kita mengubah nilai variabel yang di deklarasikan menggunakan const maka kita akan mendapati error “TypeError: Assignment to constant variable.”

<pre class="language-javascript">
  <code class="language-javascript">
const age = 18;
console.log(age);

const age = (17);
console.log(age);

/* output
TypeError: Assignment to constant variable.
*/
   </code>
</pre>

<div class="zbarisbaru"></div>

Dalam penggunaan variabel, penting untuk memahami scope variabel. Scope variabel menentukan aksesibilitas variabel dalam suatu program. Variabel dalam JavaScript memiliki dua scope, yaitu global scope dan local scope. Variabel yang dideklarasikan di luar fungsi memiliki scope global, sedangkan variabel yang dideklarasikan didalam fungsi memiliki scope local.

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
