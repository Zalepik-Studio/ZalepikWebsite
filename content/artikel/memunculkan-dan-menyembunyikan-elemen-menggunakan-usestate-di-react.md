---
title: "Memunculkan dan Menyembunyikan Elemen Menggunakan UseState di React"
date: "2023-02-06"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Dalam artikel ini, kita akan membahas bagaimana cara memunculkan dan menyembunyikan elemen menggunakan useState di React"
thumbnail: "https://zalepik-studio.github.io/zalepik-learning/images/memunculkan-dan-menyembunyikan-elemen-menggunakan-usestate-di-react/thumbnail.png"
images: ["https://zalepik-studio.github.io/zalepik-learning/images/memunculkan-dan-menyembunyikan-elemen-menggunakan-usestate-di-react/images.png"]
banner: "https://zalepik-studio.github.io/zalepik-learning/images/memunculkan-dan-menyembunyikan-elemen-menggunakan-usestate-di-react/banner.png"
topik: "React"
tags: 
- React
- UseState
---

React merupakan salah satu library JavaScript yang banyak digunakan untuk membuat aplikasi web. Dalam membuat aplikasi web, kadangkala kita ingin memunculkan dan menyembunyikan elemen. Dalam artikel ini, kita akan membahas bagaimana cara memunculkan dan menyembunyikan elemen menggunakan useState di React.

<div class="zbarisbaru"></div>

Pertama, kita perlu mengimport library React dan useState dari React dengan menambahkan kode berikut:

<pre class="language-javascript">
  <code class="language-javascript">
import React, { useState } from "react";
  </code>
</pre>

Kemudian, kita dapat membuat state untuk mengetahui apakah elemen harus ditampilkan atau tidak. Dalam hal ini, kita dapat menggunakan useState. Misalnya, kita akan membuat state showElement dengan nilai awal false:

<pre class="language-javascript">
  <code class="language-javascript">
const [showElement, setShowElement] = useState(false);
  </code>
</pre>

Lalu, kita membuat function yang akan mengubah state showElement saat ditekan. Function ini disebut toggleElement:

<pre class="language-javascript">
  <code class="language-javascript">
const toggleElement = () => {
  setShowElement((prev) => !prev);
};
  </code>
</pre>

Function toggleElement menggunakan setShowElement untuk mengubah state showElement ke nilai yang berlawanan. Kita menggunakan (prev) => !prev untuk mengubah state showElement dari false menjadi true dan sebaliknya.

<div class="zbarisbaru"></div>

Setelah itu, kita dapat menggunakan kondisional rendering untuk memunculkan atau menyembunyikan elemen. Kita dapat menggunakan syntax {showElement && ...} untuk melakukan kondisional rendering. Misalnya, kita akan memunculkan elemen div yang berisi teks "Element" jika showElement bernilai true:

<pre class="language-javascript">
  <code class="language-javascript">
{showElement && (
  <div
    style={{
      width: "100px",
      height: "100px",
      backgroundColor: "blue",
      color: "white",
    }}
  >
    <p style={{ padding: "25px" }}>Element</p>
  </div>
)}
  </code>
</pre>

Terakhir, kita membuat tombol untuk mengaktifkan function toggleElement:

<pre class="language-javascript">
  <code class="language-javascript">
<button onClick={toggleElement}>Munculkan/Sembunyikan</button>
  </code>
</pre>

Berikut adalah kode lengkap untuk memunculkan dan menyembunyikan elemen menggunakan useState di React:

<pre class="language-javascript">
  <code class="language-javascript">
import React, { useState } from "react";

const App = () => {
  const [showElement, setShowElement] = useState(false);

  const toggleElement = () => {
    setShowElement((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleElement}>Munculkan/Sembunyikan</button>
      {showElement && (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          <p style={{ padding: "25px" }}>Element</p>
        </div>
      )}
    </div>
  );
};

export default App;
  </code>
</pre>

Pertama, kita mengimport useState dari react dengan sintaks import React, { useState } from "react";. Kemudian, kita membuat komponen App dengan const App = () => {...}.

<div class="zbarisbaru"></div>

Dalam komponen App, kita membuat state showElement menggunakan const [showElement, setShowElement] = useState(false);. State ini berguna untuk menentukan apakah elemen akan ditampilkan atau tidak. Awalnya, elemen akan disembunyikan karena kita menetapkan nilai awal sebagai false.

<div class="zbarisbaru"></div>

Kemudian, kita membuat fungsi toggleElement yang digunakan untuk memunculkan dan menyembunyikan elemen. Fungsi ini menggunakan sintaks setShowElement((prev) => !prev); untuk membalikkan nilai dari state showElement dari false menjadi true atau sebaliknya.

<div class="zbarisbaru"></div>

Demikian cara memunculkan dan menyembunyikan elemen menggunakan useState di React. Kita juga dapat memanfafatkan UseState ini untuk membuat Navigasi atau Sidebar yang ingin kita  sembunyikan atau ingin kita tampilkan.

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---