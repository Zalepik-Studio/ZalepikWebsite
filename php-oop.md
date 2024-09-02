---
title: "PHP OOP"
date: "2024-09-02"
city: "Cikarang"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: ""
thumbnail: "https://zalepik-studio.github.io/ZalepikWebsite/static/thumbnail"
images: ["https://zalepik-studio.github.io/ZalepikWebsite/static/images"]
banner: "https://zalepik-studio.github.io/ZalepikWebsite/static/banner"
topik: "PHP OOP"
tags: 
- oop
---

##### Abstract Classes

Abstract classes adalah kelas yang tidak dapat diinstansiasi secara langsung. Kelas-kelas ini digunakan sebagai blue print untuk kelas-kelas lain yang mewarisinya. Abstract class mendefinisikan metode-metode yang harus diimplementasikan oleh kelas turunannya, tetapi tidak memberikan implementasi lengkap dari semua metode tersebut. Selain metode abstrak, abstract class juga bisa mengandung metode dengan implementasi lengkap. Metode-metode ini bisa digunakan langsung oleh kelas turunan. Kelas yang mewarisi abstract class harus mengimplementasikan semua metode abstrak yang ada di abstract class tersebut, jika tidak, kelas tersebut juga harus dideklarasikan sebagai abstract.

<pre class="language-php">
  <code class="language-php">
    abstract class Fruit {
        abstract protected function flavour();

        public function like() {
            echo "I like this fruit";
        } 
    }

    class Apple extends Fruit {
        public function flavour() {
            echo "This fruit is sweet";
        }
    }

    class Mango extends Fruit {
        public function flavour() {
            echo "This fruit is sour";
        }
    }

    $apple = new Apple();
    $apple->flavour();
    $apple->like();

    $mango = new Mango();
    $mango->flavour();
    $mango->like();
  </code>
</pre>

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
