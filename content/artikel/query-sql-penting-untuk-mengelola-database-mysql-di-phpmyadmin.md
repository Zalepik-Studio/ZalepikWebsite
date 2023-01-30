---
title: "Query SQL Penting Untuk Mengelola Database MySQL di phpMyAdmin"
date: "2023-01-30"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Pada tutorial kali ini kita akan belajar mengenai query SQL penting untuk mengelola database MySQL di phpMyAdmin"
thumbnail: "https://zalepik-studio.github.io/zalepik-learning/images/query-sql-penting-untuk-mengelola-database-mysql-di-phpmyadmin/thumbnail.png"
images: ["https://zalepik-studio.github.io/zalepik-learning/images/query-sql-penting-untuk-mengelola-database-mysql-di-phpmyadmin/images.png"]
banner: "https://zalepik-studio.github.io/zalepik-learning/images/query-sql-penting-untuk-mengelola-database-mysql-di-phpmyadmin/banner.png"
topik: "MySQL"
tags: 
- MySQL
- phpMyAdmin
- SQL
- Query
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

---