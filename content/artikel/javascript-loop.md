---
title: "JavaScript Loop"
date: "2023-07-07"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: ""
thumbnail: "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_javascript%20loop.png"
images:
  [
    "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_javascript%20loop.png",
  ]
banner: "https://zenzalepik.github.io/Zalepik_Images/artikel/banner/zalepik_banner_javascript%20loop.png"
topik: "Fundamental JavaScript"
tags:
  - JavaScript
---

Looping atau perulangan adalah program yang dapat mengulang sebuah instruksi secara berulang tanpa harus menuliskan kode berkali-kali. Sebagai contoh, jika kita ingin mencetak angka 1 sampai 10 menggunakan JavaScript tanpa menggunakan looping maka kita akan menulis kode tersebut secara berulang seperti ini:

<pre class="language-javascript">
  <code class="language-javascript">
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
  </code>
</pre>

<div class="zbarisbaru"></div>

Bagaimana jika kita ingin mencetak angka 1 sampai 100 menggunakan cara diatas, tentu sangat merepotkan bukan? Oleh karena itu, kita memerlukan program yang dapat menangani hal tersebut. Dengan menggunakan looping kita dapat mempersingkat kode program dan menghasilkan output yang sama seperti diatas. Di JavaScript terdapat berbagai cara untuk melakukan looping, diantaranya sebagai berikut:

#### For Loop

Dari berbagai cara untuk melakukan looping di JavaScript, For Loop merupakan salah satu cara yang paling banyak digunakan. Untuk mencetak angka 1 sampai 10 menggunakan For Loop kita dapat menggunakan kode berikut:

<pre class="language-javascript">
  <code class="language-javascript">
for(let i = 1; i < 11; i++) {
  console.log(i);
}

/* output
1
2
3
4
5
6
7
8
9
10
*/
  </code>
</pre>

<div class="zbarisbaru"></div>

Dengan menggunakan kode diatas, kita dapat mencetak angka 1 sampai 10 dengan lebih singkat!

#### For of Loop

Cara lain dalam melakukan looping adalah menggunakan For of Loop. For of Loop mulai hadir pada ECMAScript 2015 (ES6). For of Loop dapat mengulangi struktur data yang dapat di iterasi seperti array atau string. Untuk melakukan looping menggunakan For of Loop kita dapat menggunakan kode berikut:

<pre class="language-javascript">
  <code class="language-javascript">
let myArray = ["Apple", "Banana", "Orange", "Mango"];

for(const arrayItem of myArray) {
  console.log(arrayItem)
}

/* output
Apple
Banana
Orange
Mango
*/
  </code>
</pre>

#### For in Loop

For in Loop digunakan untuk mengulangi properti-properti dari sebuah objek. Perhatikan kode berikut:

<pre class="language-javascript">
  <code class="language-javascript">
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}

/* output
name: John
age: 30
city: New York
*/
  </code>
</pre>

<div class="zbarisbaru"></div>

Loop di atas akan mencetak semua properti dari objek person, yaitu ***"name: John", "age: 30", dan "city: New York"***.

#### While Loop

While Loop melakukan iterasi selama kondisi tertentu bernilai true. Untuk mencetak angka 1 sampai 10 dengan While Loop kita dapat menggunakan kode berikut:

<pre class="language-javascript">
  <code class="language-javascript">
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

/* output
1
2
3
4
5
6
7
8
9
10
*/
  </code>
</pre>

Perulangan dengan While Loop tidak memiliki ketergantungan dengan variabel iterasi seperti pada For Loop. Meskipun While Loop dapat melakukan perulangan yang sama dengan For Loop, While Loop lebih cocok digunakan pada kasus dimana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.

#### Do-While Loop

Do-while Loop mirip dengan while loop, namun ia akan melakukan setidaknya satu iterasi terlepas dari kondisi. Berikut adalah contoh perulangan menggunakan Do-While Loop:

<pre class="language-javascript">
  <code class="language-javascript">
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);

/* output
1
2
3
4
5
6
7
8
9
10
*/
  </code>
</pre>

Dalam contoh diatas, blok kode ***console.log(i)*** akan dieksekusi setidaknya satu kali, karena Do-While Loop tidak memeriksa kondisi hingga setelah blok kode pertama dieksekusi. Selanjutnya, kondisi ***i <= 10*** diperiksa. Jika kondisi tersebut bernilai true, maka blok kode akan diulang dan nilai ***i*** akan terus bertambah hingga kondisi tidak lagi terpenuhi.


<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
