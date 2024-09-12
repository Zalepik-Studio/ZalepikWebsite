---
title: "MySQL Query"
date: "2023-01-30"
city: "Lampung & Cikarang"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Pada tutorial kali ini kita akan belajar mengenai query SQL penting untuk mengelola database MySQL di phpMyAdmin"
thumbnail: "https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_query%20sql%20penting%20untuk%20mengelola%20database%20mysql%20di%20phpmyadmin.png"
images: ["https://zenzalepik.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_query%20sql%20penting%20untuk%20mengelola%20database%20mysql%20di%20phpmyadmin.png"]
banner: "https://zenzalepik.github.io/Zalepik_Images/artikel/banner/zalepik_banner_query%20sql%20penting%20untuk%20mengelola%20database%20mysql%20di%20phpmyadmin.png"
topik: "MySQL"
tags: 
- MySQL
- phpMyAdmin
---

SQL adalah bahasa standar untuk mengelola database. Berikut adalah beberapa query SQL penting yang perlu dipelajari untuk mengelola database MySQL di phpMyAdmin:

#### SELECT

SELECT adalah query SQL yang paling sering digunakan untuk menampilkan data dari tabel database. Berikut adalah contoh sederhana menggunakan SELECT:

<pre class="language-sql">
  <code class="language-sql">
SELECT nama, alamat
FROM pelanggan
WHERE kota = 'Jakarta'
  </code>
</pre>

Query di atas akan menampilkan kolom nama dan alamat dari tabel pelanggan yang berlokasi di Jakarta.

<div class="zbarisbaru"></div>

Kita juga dapat menggunakan wildcard * untuk menampilkan semua kolom dari tabel:

<pre class="language-sql">
  <code class="language-sql">
SELECT *
FROM pelanggan
  </code>
</pre>

Kita juga dapat menambahkan kondisi lain seperti LIMIT untuk membatasi jumlah baris yang ditampilkan dan ORDER BY untuk mengurutkan data:

<pre class="language-sql">
  <code class="language-sql">
SELECT *
FROM pelanggan
WHERE kota = 'Jakarta'
ORDER BY nama DESC
LIMIT 10
  </code>
</pre>

Query di atas akan menampilkan 10 baris data dari tabel pelanggan yang berlokasi di Jakarta dan diurutkan berdasarkan kolom nama dalam urutan descending.

<div class="zbarisbaru"></div>

DESCENDING adalah tipe urutan dalam query SQL. Ini menentukan bahwa data akan diurutkan dalam urutan descending atau dari besar ke kecil atau dari akhir ke awal (z-a atau 9-0).

<div class="zbarisbaru"></div>

Contoh, jika kita memiliki tabel pelanggan dengan kolom nama, kita dapat mengurutkan data dalam urutan descending seperti ini:

<pre class="language-sql">
  <code class="language-sql">
SELECT *
FROM pelanggan
ORDER BY nama DESC
  </code>
</pre>

Ini akan menampilkan data dalam urutan nama dari yang paling besar/akhir ke yang paling kecil/awal. Jika data adalah string, urutan akan mengikuti urutan alfabet (z-a). Jika data adalah angka, urutan akan mengikuti urutan numerik (besar ke kecil).

#### INSERT

INSERT adalah query SQL yang digunakan untuk menambahkan data baru ke tabel. Berikut adalah contoh sederhana menggunakan INSERT:

<pre class="language-sql">
  <code class="language-sql">
INSERT INTO pelanggan (nama, alamat, kabupaten/kota)
VALUES 
('Heri Wahyudiono', 'Way Tuba', 'Way Kanan')
  </code>
</pre>

Query di atas akan menambahkan baris baru ke tabel pelanggan dengan nama 'Heri Wahyudiono, alamat 'Way Tuba' dan kabupaten/kota 'Way Kanan'.

<div class="zbarisbaru"></div>

Kita juga dapat menambahkan lebih dari satu baris data sekaligus dengan menggunakan query INSERT yang sama:

<pre class="language-sql">
  <code class="language-sql">
INSERT INTO pelanggan (nama, alamat, kabupaten/kota)
VALUES 
('Heri Wahyudiono', 'Way Tuba', 'Way Kanan')
('Bagas Indra Setiawan', 'Way Tuba', 'Way Kanan')
  </code>
</pre>

Query di atas akan menambahkan dua baris baru ke tabel pelanggan, masing-masing dengan nama 'Heri Wahyudiono, alamat 'Way Tuba' dan kabupaten/kota 'Way Kanan' serta nama 'Bagas Indra Setiawan' alamat 'Way Tuba' dan 'kabupaten/kota 'Way Kanan'.

#### UPDATE

UPDATE adalah query SQL yang digunakan untuk memperbarui data yang sudah ada dalam tabel. Berikut adalah contoh sederhana menggunakan UPDATE:

<pre class="language-sql">
  <code class="language-sql">
UPDATE pelanggan
SET alamat = 'Rajabasa Raya'
WHERE nama = 'Heri Wahyudiono'
  </code>
</pre>

Query di atas akan memperbarui alamat dari pelanggan bernama Heri Wahyudiono menjadi Rajabasa Raya pada tabel pelanggan.

<div class="zbarisbaru"></div>

Kita juga dapat memperbarui lebih dari satu kolom sekaligus:

<pre class="language-sql">
  <code class="language-sql">
UPDATE pelanggan
SET alamat = 'Rajabasa Raya', kabupaten/kota = 'Bandar Lampung'
WHERE nama = 'Heri Wahyudiono'
  </code>
</pre>

Kita harus memastikan untuk menambahkan kondisi dengan menggunakan WHERE agar hanya data yang sesuai yang akan diperbarui dan menghindari pembaruan data secara salah.

#### DELETE

DELETE adalah query SQL yang digunakan untuk menghapus data dari tabel. Berikut adalah contoh sederhana menggunakan DELETE:

<pre class="language-sql">
  <code class="language-sql">
DELETE FROM pelanggan
WHERE nama = 'Heri Wahyudiono'
  </code>
</pre>

Query di atas akan menghapus baris dari tabel 'pelanggan' yang memiliki nama 'Heri Wahyudiono'.

<div class="zbarisbaru"></div>

Kita juga dapat menghapus semua baris dalam tabel dengan menghapus spesifikasi kondisi WHERE:

<pre class="language-sql">
  <code class="language-sql">
DELETE FROM pelanggan
  </code>
</pre>

Query di atas akan menghapus semua baris dari tabel pelanggan.

<div class="zbarisbaru"></div>

Sebagai tambahan, sangat penting untuk memastikan bahwa kita menambahkan kondisi dengan menggunakan WHERE sebelum menghapus data agar tidak menghapus data secara salah.

#### ALTER TABLE

ALTER TABLE adalah query SQL yang digunakan untuk memodifikasi struktur tabel, seperti menambahkan atau menghapus kolom, mengubah tipe data kolom, dan lain lain. Berikut adalah contoh sederhana menggunakan ALTER TABLE:

<pre class="language-sql">
  <code class="language-sql">
ALTER TABLE pelanggan
ADD kodepos INT(6)
  </code>
</pre>

Query di atas akan menambahkan kolom baru bernama kodepos dengan tipe data integer yang memiliki panjang 6 digit pada tabel pelanggan.

<div class="zbarisbaru"></div>

Kita juga dapat mengubah tipe data dari kolom yang sudah ada:

<pre class="language-sql">
  <code class="language-sql">
ALTER TABLE pelanggan
MODIFY kota VARCHAR(100)
  </code>
</pre>

Query di atas akan mengubah tipe data dari kolom kota menjadi string dengan panjang maksimal 100 karakter pada tabel pelanggan.

<div class="zbarisbaru"></div>

Untuk menghapus kolom, kita dapat menggunakan perintah DROP:

<pre class="language-sql">
  <code class="language-sql">
ALTER TABLE pelanggan
DROP kodepos
  </code>
</pre>

Query di atas akan menghapus kolom kodepos dari tabel pelanggan.

#### CREATE TABLE

CREATE TABLE adalah query SQL yang digunakan untuk membuat tabel baru dalam database. Berikut adalah contoh sederhana menggunakan CREATE TABLE:

<pre class="language-sql">
  <code class="language-sql">
CREATE TABLE pelanggan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    alamat VARCHAR(255),
    kota VARCHAR(50)
);
  </code>
</pre>

Query di atas akan membuat tabel baru bernama pelanggan dengan kolom id, nama, alamat, dan kota. Tipe data masing-masing kolom adalah integer (id), string dengan panjang maksimal 100 karakter (nama), string dengan panjang maksimal 255 karakter (alamat), dan string dengan panjang maksimal 50 karakter (kota). Kolom id juga ditetapkan sebagai primary key dan diberikan tipe data auto increment.

<div class="zbarisbaru"></div>

Kita dapat menambahkan lebih banyak kolom dan menentukan tipe data yang sesuai untuk masing-masing kolom, serta membuat constraint seperti primary key, foreign key dan lain-lain untuk mengatur relasi antar tabel.

#### DROP TABLE

DROP TABLE adalah query SQL yang digunakan untuk menghapus tabel dari database. Berikut adalah contoh sederhana menggunakan DROP TABLE:

<pre class="language-sql">
  <code class="language-sql">
DROP TABLE pelanggan;
  </code>
</pre>

Query di atas akan menghapus tabel pelanggan dari database. Perhatikan bahwa query ini akan menghapus semua data yang terkandung dalam tabel dan tidak dapat dikembalikan. Oleh karena itu, pastikan kita benar-benar yakin sebelum menjalankan query ini.

#### JOIN

JOIN adalah query SQL yang digunakan untuk menggabungkan data dari dua atau lebih tabel dalam database. Berikut adalah contoh sederhana menggunakan JOIN:

<pre class="language-sql">
  <code class="language-sql">
SELECT pelanggan.nama, pemesanan.tanggal, produk.nama_produk
FROM pelanggan
JOIN pemesanan ON pelanggan.id = pemesanan.id_pelanggan
JOIN produk ON pemesanan.id_produk = produk.id
  </code>
</pre>

Query di atas akan mengambil nama pelanggan, tanggal pemesanan, dan nama produk dari tabel pelanggan, pemesanan, dan produk. JOIN digunakan untuk menggabungkan data dari tabel-tabel tersebut berdasarkan kolom id pada tabel pelanggan dan id_pelanggan pada tabel pemesanan, serta kolom id_produk pada tabel pemesanan dan id pada tabel produk.

<div class="zbarisbaru"></div>

Ada beberapa jenis JOIN, seperti INNER JOIN, LEFT JOIN, RIGHT JOIN, dan FULL OUTER JOIN, yang menentukan bagaimana data dari tabel-tabel tergabung dan bagaimana data yang tidak memiliki pasangan dalam tabel lain diperlakukan.

#### GROUP BY

GROUP BY adalah query SQL yang digunakan untuk mengelompokkan data dalam tabel berdasarkan kolom tertentu. Berikut adalah contoh sederhana menggunakan GROUP BY:

<pre class="language-sql">
  <code class="language-sql">
SELECT produk.nama_produk, SUM(pemesanan.jumlah) as total_pemesanan
FROM pemesanan
JOIN produk ON pemesanan.id_produk = produk.id
GROUP BY produk.nama_produk
  </code>
</pre>

Query di atas akan mengelompokkan data dalam tabel pemesanan dan produk berdasarkan nama produk. Kolom SUM digunakan untuk menjumlahkan jumlah pemesanan untuk setiap produk. GROUP BY digunakan untuk menentukan bahwa data akan dikelompokkan berdasarkan nama produk.

<div class="zbarisbaru"></div>

Hasil dari query di atas akan menampilkan nama produk dan jumlah total pemesanan untuk setiap produk, yang telah dikelompokkan berdasarkan nama produk.

#### ORDER BY

ORDER BY adalah query SQL yang digunakan untuk mengurutkan data dalam tabel. Berikut adalah contoh sederhana menggunakan ORDER BY:

<pre class="language-sql">
  <code class="language-sql">
SELECT produk.nama_produk, pemesanan.tanggal
FROM pemesanan
JOIN produk ON pemesanan.id_produk = produk.id
ORDER BY pemesanan.tanggal DESC
  </code>
</pre>

Query di atas akan mengambil data dari tabel pemesanan dan produk dan mengurutkannya berdasarkan tanggal pemesanan dalam urutan descending (dari yang terbaru ke yang terlama). ORDER BY digunakan untuk menentukan bahwa data akan diurutkan berdasarkan tanggal pemesanan, dan DESC menentukan bahwa urutan akan dari yang terbaru ke yang terlama.

<div class="zbarisbaru"></div>

Hasil dari query di atas akan menampilkan nama produk dan tanggal pemesanan, yang telah diurutkan berdasarkan tanggal pemesanan dalam urutan descending.

#### INNER JOIN

INNER JOIN di MySQL adalah jenis join yang menggabungkan baris dari dua atau lebih tabel berdasarkan kondisi tertentu. Hanya baris yang memiliki nilai yang sesuai di kedua tabel yang akan dimasukkan dalam hasil. Jika tidak ada kecocokan, maka baris tersebut tidak akan ditampilkan.

<pre class="language-sql">
  <code class="language-sql">
    CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone_number VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
    );

    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT,
        product_name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
  </code>
</pre>

**Contoh INNER JOIN:**

<div class="zbarisbaru"></div>

Misalkan kita ingin menampilkan nama pengguna (name), email pengguna (email) dan detail produk (product_name, product_desc) yang mereka buat. Maka query INNER JOIN akan terlihat seperti ini:

<pre class="language-sql">
  <code class="language-sql">
    SELECT users.name, users.email, products.product_name, products.created_at
    FROM users
    INNER JOIN products ON users.id = products.user_id;
  </code>
</pre>

**Contoh Hasil Query**

<div class="zbarisbaru"></div>

| name             | email                        | product_name | created_at |
| ---------------- | ---------------------------- | ------------ | ---------- |
| Heri Wahyudiono  | heriwahyudiono@gmail.com     | Handphone    | 2024-09-05 |
| Dwi Sulyanto     | dwisulyanto@gmail.com        | Laptop       | 2024-09-05 |

#### LEFT JOIN

LEFT JOIN digunakan untuk menggabungkan dua atau lebih tabel, tetapi dengan perbedaan bahwa semua baris dari tabel kiri (tabel pertama yang disebut dalam query) akan ditampilkan, meskipun tidak ada kecocokan di tabel kanan. Jika tidak ada kecocokan di tabel kanan, nilai di kolom tabel kanan akan diisi dengan NULL.

<pre class="language-sql">
  <code class="language-sql">
    CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone_number VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
    );

    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT,
        product_name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
  </code>
</pre>

**Contoh LEFT JOIN:**

<div class="zbarisbaru"></div>

Misalkan kita ingin menampilkan semua pengguna dari tabel users meskipun mereka tidak memiliki produk di tabel products. Untuk itu, kita menggunakan LEFT JOIN.

<pre class="language-sql">
  <code class="language-sql">
SELECT users.name, users.email, products.product_name, products.created_at
FROM users
LEFT JOIN products ON users.id = products.user_id;
  </code>
</pre>

#### RIGHT JOIN

RIGHT JOIN adalah kebalikan dari LEFT JOIN. Dengan RIGHT JOIN, semua baris dari tabel kanan (tabel kedua yang disebut dalam query) akan ditampilkan, meskipun tidak ada kecocokan di tabel kiri. Jika tidak ada kecocokan di tabel kiri, maka kolom dari tabel kiri akan diisi dengan nilai NULL.

**Contoh Struktur Tabel:**

Mari kita gunakan contoh tabel yang sama seperti sebelumnya:

<pre class="language-sql">
  <code class="language-sql">
    CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone_number VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
    );

    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT,
        product_name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
  </code>
</pre>

**Contoh RIGHT JOIN:**

Misalkan kita ingin menampilkan semua produk dari tabel products, meskipun ada beberapa produk yang tidak terkait dengan pengguna di tabel users. Maka kita bisa menggunakan RIGHT JOIN.

<pre class="language-sql">
  <code class="language-sql">
    SELECT users.name, users.email, products.product_name, products.created_at
    FROM users
    RIGHT JOIN products ON users.id = products.user_id;
  </code>
</pre>

**CROSS JOIN**

CROSS JOIN adalah jenis join yang menghasilkan perkalian Cartesian dari dua tabel. Ini berarti setiap baris di tabel pertama akan digabungkan dengan setiap baris di tabel kedua, tanpa mempertimbangkan apakah ada kecocokan atau tidak antara dua tabel tersebut. Hasilnya adalah kombinasi dari semua baris di tabel pertama dengan semua baris di tabel kedua.

**Contoh Struktur Tabel:**

<pre class="language-sql">
  <code class="language-sql">
    CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone_number VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
    );

    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        product_name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
  </code>
</pre>

**Contoh CROSS JOIN:**

Jika ingin menggabungkan setiap pengguna dari tabel users dengan setiap produk dari tabel products, maka kita bisa menggunakan CROSS JOIN.

<pre class="language-sql">
  <code class="language-sql">
    SELECT users.name, products.product_name
    FROM users
    CROSS JOIN products;
  </code>
</pre>

#### Self Join

SELF JOIN digunakan untuk menggabungkan tabel dengan dirinya sendiri. Ini berguna ketika Anda ingin membandingkan baris dalam tabel yang sama. SELF JOIN sebenarnya adalah INNER JOIN, LEFT JOIN, atau RIGHT JOIN, tetapi di sini tabel yang sama digunakan dua kali dalam query.

Untuk membedakan antara dua salinan tabel yang sama, kita perlu memberikan alias pada tabel dalam query.

**Contoh Penggunaan SELF JOIN:**
Misalkan kita memiliki tabel users di mana kita ingin menemukan pasangan pengguna tertentu berdasarkan kriteria tertentu. Sebagai contoh, mari kita ambil skenario di mana kita ingin membandingkan pengguna dengan nama yang sama atau mirip.

<pre class="language-sql">
  <code class="language-sql">
    CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone_number VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
    );
  </code>
</pre>

**Contoh SELF JOIN:**

Misalkan kita ingin menemukan pasangan pengguna yang memiliki nama yang sama dalam tabel users.

<pre class="language-sql">
  <code class="language-sql">
    SELECT u1.name AS User1, u2.name AS User2, u1.email, u2.email
    FROM users u1
    JOIN users u2 ON u1.name = u2.name AND u1.id != u2.id;
  </code>
</pre>

**Contoh Hasil Query:**

| User1            | User2        | email User1              | email User2            |
| ---------------- | ------------ | ------------------------ | ---------------------  |
| Dwi Sulyanto     | Dwi Sulyanto | dwisulyanto1@gmail.com   | dwisulyanto2@gmail.com |

#### UNION 

UNION digunakan untuk menggabungkan hasil dari dua atau lebih query SELECT menjadi satu set hasil gabungan. Setiap query yang digabungkan menggunakan UNION harus memiliki jumlah kolom yang sama dan tipe data yang serupa. Secara default, UNION menghapus duplikat, tetapi jika kita ingin menyertakan semua hasil, termasuk yang duplikat, kita bisa menggunakan UNION ALL.

**Contoh Tabel:**

<pre class="language-sql">
  <code class="language-sql">
    CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone_number VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT(11),
        product_name VARCHAR(255) NOT NULL,
        product_desc VARCHAR(255) NOT NULL, 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
  </code>
</pre>

**Data Dummy:**

<pre class="language-sql">
  <code class="language-sql">
    INSERT INTO users (name, email, phone_number, password)
    VALUES
    ('John Doe', 'john.doe@example.com', '081234567890', 'password123'),
    ('Jane Smith', 'jane.smith@example.com', '081234567891', 'password456'),
    ('Michael Johnson', 'michael.j@example.com', '081234567892', 'password789'),
    ('Emily Davis', 'emily.davis@example.com', '081234567893', 'password012'),
    ('Chris Brown', 'chris.brown@example.com', '081234567894', 'password345');

    INSERT INTO products (product_name, product_desc, user_id)
    VALUES
    (1, 'Laptop', 'High-end gaming laptop'),
    (2, 'Smartphone', 'Latest smartphone with OLED display'),
    (3, 'Headphones', 'Noise-cancelling over-ear headphones'),
    (4, 'Smartwatch', 'Water-resistant smartwatch with GPS'),
    (5, 'Camera', 'DSLR camera with 4K video recording');
  </code>
</pre>

**Contoh Penggunaan UNION:**

<pre class="language-sql">
  <code class="language-sql">
    SELECT name, email FROM users
    UNION
    SELECT product_name, product_desc FROM products;
  </code>
</pre>

Hasilnya adalah gabungan semua nama dari tabel users dan nama produk dari tabel products. Kolom yang digabungkan harus memiliki tipe data yang sama atau bisa dikonversi satu sama lain. Jika jumlah kolom dan tipe data pada query UNION tidak sama, SQL akan menghasilkan error. Untuk UNION bekerja, setiap query yang digabungkan harus memiliki jumlah kolom yang sama. Setiap kolom harus memiliki tipe data yang kompatibel (misalnya, VARCHAR dapat digabungkan dengan TEXT, tetapi tidak dengan INT).

**Contoh yang menyebabkan error:**

<pre class="language-sql">
  <code class="language-sql">
    SELECT name, email FROM users
    UNION
    SELECT product_name FROM products;
  </code>
</pre>

Contoh di atas akan gagal karena query pertama mengembalikan dua kolom (name dan email), sementara query kedua hanya mengembalikan satu kolom (product_name).

**Cara mengatasi:**

Jika jumlah kolom berbeda, kita bisa menambahkan kolom tambahan pada salah satu query dengan nilai default atau null agar jumlah kolomnya sama.

**Contoh:**

<pre class="language-sql">
  <code class="language-sql">
    SELECT name, email FROM users
    UNION
    SELECT product_name, NULL FROM products;
  </code>
</pre>

Di sini, kita menambahkan NULL di query kedua untuk menyamakan jumlah kolom menjadi dua. Hasilnya adalah gabungan kolom name dan email dari users dengan kolom product_name dan NULL dari products.

<div class="zbarisbaru"></div>

Jika tipe data tidak kompatibel, kita bisa melakukan casting tipe data secara eksplisit agar sesuai.

**Contoh:**

<pre class="language-sql">
  <code class="language-sql">
    SELECT name FROM users
    UNION
    SELECT CAST(user_id AS CHAR) FROM products;
  </code>
</pre>

Pada contoh di atas tipe data user_id (yang bertipe data INT) di ubah menjadi tipe CHAR agar bisa digabungkan dengan kolom name (yang bertipe VARCHAR).

<div class="zbarisbaru"></div>

Dengan penyesuaian ini, kita bisa menggunakan UNION meskipun struktur dan tipe data kolom awalnya berbeda.

#### GROUP BY

GROUP BY adalah klausa dalam SQL yang digunakan untuk mengelompokkan hasil query berdasarkan satu atau lebih kolom. Ini sering digunakan bersama dengan fungsi agregat seperti COUNT(), SUM(), AVG(), MAX(), dan MIN() untuk menghasilkan ringkasan atau agregat dari data yang dikelompokkan.

**Contoh Penggunaan GROUP BY:**

Misalnya jika ingin mengetahui berapa banyak produk yang dimiliki oleh setiap pengguna, kita bisa menggunakan GROUP BY dan COUNT():

<pre class="language-sql">
  <code class="language-sql">
    SELECT users.name, COUNT(products.id) AS product_count
    FROM users
    LEFT JOIN products ON users.id = products.user_id
    GROUP BY users.name;
  </code>
</pre>

Contoh lainnya, misalnya kita ingin mengetahui rata-rata panjang deskripsi produk, maka kita juga dapat menggunakan GROUP BY.

<pre class="language-sql">
  <code class="language-sql">
    SELECT AVG(LENGTH(product_desc)) AS avg_description_length
    FROM products;
  </code>
</pre>

#### HAVING

Klausa HAVING di MySQL digunakan untuk menyaring hasil setelah pengelompokan data yang dilakukan oleh GROUP BY. Ini mirip dengan klausa WHERE, tetapi perbedaannya adalah WHERE digunakan untuk menyaring data sebelum pengelompokan, sedangkan HAVING digunakan setelah hasil dari GROUP BY terbentuk.

<div class="zbarisbaru"></div>

HAVING biasanya digunakan bersama fungsi agregat seperti COUNT(), SUM(), AVG(), MAX(), atau MIN(), untuk memfilter grup berdasarkan hasil perhitungan agregat.

**Contoh Penggunaan HAVING:**

Misalkan kita ingin menghitung berapa banyak produk yang dimiliki setiap pengguna, tetapi hanya menampilkan pengguna yang memiliki lebih dari 1 produk.

<pre class="language-sql">
  <code class="language-sql">
    SELECT users.name, COUNT(products.id) AS product_count
    FROM users
    LEFT JOIN products ON users.id = products.user_id
    GROUP BY users.name
    HAVING COUNT(products.id) > 1;
  </code>
</pre>

Contoh lain, jika kita memiliki tabel products dengan kolom price, dan ingin menampilkan nama produk yang memiliki rata-rata harga lebih dari 1.500.000, maka dapat menggunakan query berikut:

<pre class="language-sql">
  <code class="language-sql">
    SELECT product_name, product_price
    FROM products
    WHERE product_price > 1500000;
  </code>
</pre>

---
