---
title: "PHP OOP"
date: "2024-09-02"
city: "Cikarang"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "OOP (Object Oriented Programming) adalah paradigma pemrograman yang menggunakan konsep objek untuk merepresentasikan data dan fungsionalitas dalam suatu program..."
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
    $mango->like(); // Output: I like this fruit
  </code>
</pre>

##### Interfaces

Sebuah interface hanya mendeklarasikan metode-metode yang harus diimplementasikan oleh kelas, tanpa memberikan implementasi sebenarnya. Abstract Class dapat memiliki metode dengan implementasi, sementara interface hanya mendeklarasikan metode tanpa implementasi. Interface tidak dapat mendefinisikan properti (variabel). Mereka hanya berisi deklarasi metode. Kelas dapat mengimplementasikan banyak interface, tetapi hanya dapat mewarisi dari satu abstract class. Abstract class dapat memiliki properti dan metode non-abstrak, sementara interface hanya dapat mendeklarasikan metode.

**Contoh Penggunaan Interface di PHP:**

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

**Contoh Penggunaan Multiple Interface:**

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

##### Traits

Traits di PHP adalah mekanisme untuk mendefinisikan metode yang dapat digunakan kembali dalam beberapa kelas. Traits memungkinkan pengembang untuk menghindari masalah dengan pewarisan ganda di OOP. Meskipun PHP tidak mendukung pewarisan ganda (di mana sebuah kelas dapat mewarisi lebih dari satu kelas), dengan menggunakan traits kita bisa "mengimpor" fungsionalitas dari berbagai traits ke dalam satu kelas.

<div class="zbarisbaru"></div>

Traits dapat digunakan oleh satu atau lebih kelas, dan mereka bisa berisi metode serta properti. Namun, traits tidak dapat di instansiasi secara langsung seperti kelas. Trait berfungsi sebagai cara untuk mendaur ulang kode dalam PHP tanpa perlu menggunakan 
pewarisan klasik atau interfaces.

**Contoh Penggunaan Traits:**

<pre class="language-php">
  <code class="language-php">
    trait HasFlavour {
        public function flavour() {
            echo "This fruit has a unique flavour.";
        }
    }

    trait CanLike {
        public function like() {
            echo "I like this fruit.";
        }
    }

    class Apple {
        use HasFlavour, CanLike;

        public function flavour() {
            echo "This fruit is sweet.";
        }
    }

    class Mango {
        use HasFlavour, CanLike;

        public function flavour() {
            echo "This fruit is sour.";
        }
    }

    $apple = new Apple();
    $apple->flavour(); // Output: This fruit is sweet.
    $apple->like(); // Output: I like this fruit.

    $mango = new Mango();
    $mango->flavour(); // Output: This fruit is sour.
    $mango->like(); // Output: I like this fruit.
  </code>
</pre>

Pada contoh di atas, trait HasFlavour dan CanLike digunakan di kedua kelas Apple dan Mango. Setiap kelas dapat mengimpor metode dari traits dan metode ini dapat diubah atau di override sesuai dengan kebutuhan. Traits lebih cocok digunakan untuk menyusun kembali fungsi atau metode yang sering digunakan di berbagai kelas tanpa harus mengatur hubungan pewarisan yang kompleks.

##### Static Methods

Static methods di PHP adalah metode yang dapat dipanggil tanpa perlu membuat instans dari sebuah kelas. Metode ini milik kelas, bukan objek dan sering digunakan untuk fungsi yang tidak bergantung pada data dari instance objek, tetapi lebih merupakan fungsi umum terkait dengan kelas itu sendiri.

<div class="zbarisbaru"></div>

Static methods dideklarasikan dengan menggunakan kata kunci static sebelum definisi metode. Karena metode ini tidak beroperasi pada instance, mereka tidak bisa menggunakan $this untuk mengakses properti atau metode instance dari kelas.

**Contoh Penggunaan Static Methods:**

<pre class="language-php">
  <code class="language-php">
    class MathHelper {
        public static function add($a, $b) {
            return $a + $b;
        }

        public static function multiply($a, $b) {
            return $a * $b;
        }
    }

    // Memanggil static methods tanpa instansiasi
    echo MathHelper::add(5, 10);      // Output: 15
    echo MathHelper::multiply(3, 4);  // Output: 12
  </code>
</pre>

Pada contoh di atas, MathHelper memiliki dua static methods add dan multiply yang bisa langsung dipanggil tanpa membuat objek dari MathHelper. Ini cocok untuk fungsi-fungsi yang sifatnya tidak bergantung pada data spesifik dari objek. Static methods sering digunakan untuk fungsi-fungsi utilitas, validasi atau operasi umum yang tidak perlu berhubungan dengan state dari objek tertentu.

##### Static Properties

Static properties di PHP adalah properti yang dimiliki oleh kelas, bukan oleh objek dari kelas tersebut. Seperti static methods, static properties dapat diakses tanpa perlu membuat instans dari kelas. Static properties digunakan untuk menyimpan data yang terkait dengan kelas itu sendiri, bukan dengan objek individual.

<div class="zbarisbaru"></div>

Static properties dideklarasikan dengan menggunakan kata kunci static dan diakses menggunakan self:: atau ClassName::.

**Contoh Penggunaan Static Properties:**

<pre class="language-php">
  <code class="language-php">
    class Counter {
        public static $count = 0;

        public static function increment() {
            self::$count++;
        }
    }

    Counter::increment();
    Counter::increment();
    echo Counter::$count; // Output: 2
  </code>
</pre>

Pada contoh di atas, Counter::$count adalah static property yang menyimpan nilai yang dimiliki oleh kelas Counter. Setiap kali metode increment() dipanggil, nilai ini bertambah dan perubahan ini berlaku di seluruh kelas, bukan di objek individual. Static properties cocok digunakan untuk data yang harus tetap konsisten di seluruh objek, seperti penghitung, konfigurasi atau cache.

##### Namespaces

Namespaces di PHP OOP adalah fitur yang memungkinkan kita mengatur dan mengelompokkan kode berdasarkan konteks atau ruang lingkup tertentu, sehingga memudahkan dalam mengelola proyek besar dengan banyak kelas, fungsi, atau konstanta. Namespace juga menghindari tabrakan nama (name collision) yang mungkin terjadi ketika ada dua kelas atau fungsi dengan nama yang sama tetapi berasal dari pustaka yang berbeda.

<div class="zbarisbaru"></div>

Dengan menggunakan namespaces, kita bisa mengelompokkan kode dan memanggilnya dengan lebih spesifik. Namespace sering digunakan saat bekerja dengan proyek yang besar atau ketika kita mengimpor pustaka eksternal.

**Contoh Penggunaan Namespaces:**

<pre class="language-php">
  <code class="language-php">
    namespace Fruits;

    class Apple {
        public function getType() {
            echo "This is an apple";
        }
    }
  </code>
</pre>

<pre class="language-php">
  <code class="language-php">
    namespace Vegetables;

    class Carrot {
        public function getType() {
            echo "This is a carrot";
        }
    }
  </code>
</pre>

<div class="zbarisbaru"></div>

Untuk menggunakan namespace, kita bisa melakukan import atau menyebutnya secara langsung.

**Menggunakan Kelas dari Namespace:**

<pre class="language-php">
  <code class="language-php">
    use Fruits\Apple;

    $apple = new Apple();
    $apple->getType(); // Output: This is an apple
  </code>
</pre>

<pre class="language-php">
  <code class="language-php">
    use Vegetables\Carrot;

    $carrot = new Carrot();
    $carrot->getType(); // Output: This is a carrot
  </code>
</pre>

Jika namespace terlalu panjang, kita bisa menggunakan alias untuk mempersingkat pemanggilannya.

<pre class="language-php">
  <code class="language-php">
    use Fruits\Apple as Apl;

    $apple = new Apl();
    $apple->getType(); // Output: This is an apple
  </code>
</pre>

<pre class="language-php">
  <code class="language-php">
    use Vegetables\Carrot as Crt;

    $carrot = new Crt();
    $carrot->getType(); // Output: This is a carrot
  </code>
</pre>

##### Iterables

Iterables adalah tipe data yang bisa di iterasi atau di loop seperti array atau objek. Tipe data ini memungkinkan kita menggunakan struktur data yang bisa dijalankan dalam perulangan dengan konstruksi seperti foreach.

<div class="zbarisbaru"></div>

Iterable bisa digunakan sebagai tipe parameter dan tipe pengembalian dalam metode atau fungsi. Hal ini memberi fleksibilitas, karena kita bisa menerima baik array maupun objek yang dapat diiterasi.

**Contoh:**

<pre class="language-php">
  <code class="language-php">
    function printIterable(iterable $items) {
        foreach ($items as $item) {
            echo $item . " ";
        }
    }

    $array = [1, 2, 3];
    printIterable($array); // Output: 1 2 3
  </code>
</pre>

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---
