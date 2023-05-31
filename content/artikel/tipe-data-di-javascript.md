---
title: "Tipe Data di JavaScript"
date: "2023-02-15"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: ""
thumbnail: "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_javascript%20_hello%20world!_-1.png"
images:
  [
    "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_javascript%20_hello%20world!_-1.png",
  ]
banner: "https://zenzalepik.github.io/Zalepik_Images/artikel/banner/zalepik_banner_javascript%20_hello%20world!_-1.png"
topik: "Fundamental JavaScript"
tags:
  - JavaScript
---

Tipe data adalah jenis nilai yang dapat disimpan atau dimanipulasi oleh program. Di JavaScript terdapat beberapa jenis tipe data sebagai berikut:

#### Numbers

Tipe data number adalah jenis tipe data yang berupa angka.

<pre class="language-javascript">
  <code class="language-javascript">
const x = 10;
console.log(typeof(x));

/* 
output: 
number
*/
  </code>
</pre>

Pada contoh kode diatas  kita mendeklarasikan variabel x dengan nilai 10. Ketika kita mengecek jenis tipe data menggunakan fungsi typeof() maka akan menghasilkan output number yang berarti nilai 10 merupakan tipe data yang berupa angka.

#### Strings

String adalah tipe data yang berupa teks atau tulisan. Untuk menetapkan nilai pada tipe data string gunakan tanda petik satu (‘) atau petik dua (“) diantara teksnya.

<pre class="language-javascript">
  <code class="language-javascript">
const greet = "Hello";
console.log(typeof(greet));

/* 
output: 
string
*/
  </code>
</pre>

Pada contoh kode diatas  kita mendeklarasikan variabel greet dengan nilai "Hello". Ketika kita mengecek jenis tipe data menggunakan fungsi typeof() maka akan menghasilkan output string yang berarti nilai "Hello" merupakan tipe data yang berupa teks atau tulisan.

#### Boolean

Tipe data boolean memiliki dua nilai yaitu true atau false. Untuk menetapkan nilai boolean gunakan keyword true atau false seperti berikut:

<pre class="language-javascript">
  <code class="language-javascript">
const x = true;
const y = false;

console.log(typeof(x));
console.log(typeof(y));

/* 
output: 
boolean
boolean
*/
  </code>
</pre>

Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<) seperti berikut:

<pre class="language-javascript">
  <code class="language-javascript">
const x = 100;
const y = 10;

let isGreater = x > y
let isLess = x < y

/* 
output: 
true
false
*/
  </code>
</pre>

### Null

Null adalah nilai sementara dari sebuah variabel, tapi sebenarnya nilai tersebut tidak ada. Untuk menginisialisaikan nilai null, gunakan keyword null seperti berikut:
<pre class="language-javascript">
  <code class="language-javascript">
const someLaterData = null;

console.log(someLaterData);

/*
output:
null
*/
  </code>
</pre>

Terkadang kita perlu membuat sebuah variabel, tetapi kita belum memerlukan nilai apa pun dan tidak ingin terikat dengan tipe data lain. Nah, daripada kita tidak menetapkan nilai apa pun (variabel akan undefined), lebih baik kita beri nilai null pada variabel tersebut dan kita ubah nanti ketika kita membutuhkannya.

#### Undefined

Undefined adalah tipe data yang tidak memiliki nilai. Ini terjadi ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya.

<pre class="language-javascript">
  <code class="language-javascript">
const x;
console.log(typeof(x));

/* 
output: 
undefined 
*/
  </code>
</pre>

Pada contoh kode diatas, kita mendeklarasikan variabel x tetapi kita tidak menginisialisasikan nilainya. Ketika kita mengecek jenis tipe data menggunakan fungsi typeof() maka akan menghasilkan output undefined.

#### Symbol 

Symbol merupakan tipe data yang digunakan untuk menunjukkan identifier yang unik. Kita bisa memberikan deskripsi atau nama symbol seperti berikut:

<pre class="language-javascript">
  <code class="language-javascript">
const symbol1 = Symbol("id");

console.log(symbol1);

/*
output:
symbol(id)
*/
  </code>
</pre>

Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan deskripsi atau nama yang sama, kedua nilainya tetap dianggap berbeda.

<pre class="language-javascript">
  <code class="language-javascript">
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 == symbol2);

/* 
output:
false
*/
  </code>
</pre>

Tipe data symbol diperkenalkan pada ECMAScript 6 (ES6).

#### BigInt

BigInt adalah tipe data yang digunakan untuk merepresentasikan bilangan bulat yang sangat besar, yang tidak dapat direpresentasikan oleh tipe data number.

<div class="zbarisbaru"></div>

Tipe data number pada JavaScript mempunyai batas maksimal dan minimal yang dapat direpresentasikan, sehingga bilangan yang melebihi batas tersebut akan diubah menjadi infinity atau -infinity. Dengan adanya tipe data BigInt, kita dapat merepresentasikan bilangan yang lebih besar dari batas maksimal tipe data number.

<pre class="language-javascript">
  <code class="language-javascript">
const bigInt = 1234567890123456789012345678901234567890n;
const number = 1234567890123456789012345678901234567890;

console.log(bigInt);
console.log(number);

console.log(typeof(bigint));
console.log(typeof(number));

/* 
output:
1234567890123456789012345678901234567890n
1.2345678901234568e+39

bigint
number
*/
  </code>
</pre>

Tipe data BigInt diperkenalkan pada ECMAScript 2020 (ES2020).


<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
