---
title: "PHP OOP"
date: "2024-09-02"
city: "Cikarang"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "OOP (Object Oriented Programming) adalah paradigma pemrograman yang menggunakan konsep “objek” untuk merepresentasikan data dan fungsionalitas dalam suatu program..."
thumbnail: "https://zalepik-studio.github.io/ZalepikWebsite/static/thumbnail"
images: ["https://zalepik-studio.github.io/ZalepikWebsite/static/images"]
banner: "https://zalepik-studio.github.io/ZalepikWebsite/static/banner"
topik: "PHP OOP"
tags: 
- oop
---

OOP (Object Oriented Programming) adalah paradigma pemrograman yang menggunakan konsep "objek" untuk merepresentasikan data dan fungsionalitas dalam suatu program. Dalam OOP, program di susun ke dalam objek-objek yang memiliki atribut (data) dan metode (fungsi) yang dapat memanipulasi data tersebut.

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
    $apple->flavour(); // Output: This fruit is sweet
    $apple->like(); // Output: I like this fruit

    $mango = new Mango();
    $mango->flavour(); // Output: This fruit is sour
    $mango->like(); Output: I like this fruit
  </code>
</pre>

##### Interfaces

Sebuah interface hanya mendeklarasikan metode-metode yang harus diimplementasikan oleh kelas, tanpa memberikan implementasi sebenarnya. Abstract Class dapat memiliki metode dengan implementasi, sementara interface hanya mendeklarasikan metode tanpa implementasi. Interface tidak dapat mendefinisikan properti (variabel). Mereka hanya berisi deklarasi metode. Kelas dapat mengimplementasikan banyak interface, tetapi hanya dapat mewarisi dari satu abstract class. Abstract class dapat memiliki properti dan metode non-abstrak, sementara interface hanya dapat mendeklarasikan metode.

**Contoh Penggunaan Interface di PHP**

<pre class="language-php">
  <code class="language-php">
    // Mendeklarasikan interface Flavour
    interface Flavour {
        public function getFlavour();
    }

    // Kelas Apple mengimplementasikan interface Flavour
    class Apple implements Flavour {
        public function getFlavour() {
            echo "This fruit is sweet";
        }
    }

    // Kelas Mango mengimplementasikan interface Flavour
    class Mango implements Flavour {
        public function getFlavour() {
            echo "This fruit is sour";
        }
    }

    // Membuat objek dari kelas yang mengimplementasikan interface
    $apple = new Apple();
    $apple->getFlavour(); // Output: This fruit is sweet

    echo "\n"; // Membuat baris baru

    $mango = new Mango();
    $mango->getFlavour(); // Output: This fruit is sour
  </code>
</pre>

**Contoh Penggunaan Multiple Interface**

<pre class="language-php">
  <code class="language-php">
    // Mendeklarasikan interface pertama
    interface CanFly {
        public function fly();
    }

    // Mendeklarasikan interface kedua
    interface CanSwim {
        public function swim();
    }

    // Kelas yang mengimplementasikan kedua interface
    class Duck implements CanFly, CanSwim {
        public function fly() {
            echo "Duck is flying";
        }

        public function swim() {
            echo "Duck is swimming";
        }
    }

    $duck = new Duck();
    $duck->fly(); // Output: Duck is flying
    $duck->swim(); // Output: Duck is swimming
  </code>
</pre>

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
