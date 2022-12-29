---
title: "Cara Menjalankan PHP Tanpa Web Server Apache atau XAMPP"
date: "2022-12-27"
city: " Bandar Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Pada kesempatan kali ini kita akan belajar bagaimana caranya menjalankan PHP tanpa web server Apache atau menggunakan XAMPP"
thumbnail: "https://mzainulmuttaqin.github.io/Zalepik-Studio/Zalepik_Images_heri/blob/main/2cara_menjalankan_php_tanpa_web_server_apache_atau_xampp/zalepik_thumbnail_cara_menjalankan_php_tanpa_web_server_apache_atau_xampp.png"
images: ["https://mzainulmuttaqin.github.io/Zalepik-Studio/Zalepik_Images_heri/blob/main/2cara_menjalankan_php_tanpa_web_server_apache_atau_xampp/zalepik_thumbnail_cara_menjalankan_php_tanpa_web_server_apache_atau_xampp.png"]
banner: "https://mzainulmuttaqin.github.io/Zalepik_Images_heri/2cara_menjalankan_php_tanpa_web_server_apache_atau_xampp/zalepik_banner_2cara_menjalankan_php_tanpa_web_server_apache_atau_xampp.png"
topik: "PHP"
tags: 
- html
- js
- javascript
- library
- css
- aos
- aos cdn
- animate
- frontend
- speedup
- php
---

Pada kesempatan kali ini kita akan belajar bagaimana caranya menjalankan PHP tanpa web server Apache atau menggunakan XAMPP. Sebenarnya PHP mempunyai server bawaan sendiri untuk dapat dijalankan. Pada versi PHP 5.4.0 tersedia fitur build-in web server yang memungkinkan kita untuk menjalankan PHP menggunakan perintah command line (CLI).

<div class="zbarisbaru"></div>

#### Apa kelebihannya?
Dengan menggunakan PHP built-in web server ini kita tidak perlu meletakkan file PHP kita jauh didalam folder htdocs untuk dapat dijalankan, kita bisa meletakkannya didirektori mana pun yang kita mau. Selain itu, karena web server ini berjalan di console kita bisa langsung mengetahui jika terjadi error disana.

#### Membuat Server dengan Perintah CLI
Pastikan kamu menggunakan versi **PHP 5.4.0** atau yang lebih baru, setelah itu ketikkan perintah berikut di terminal:
<pre class="language-javascript">
  <code class="language-javascript">
php -S localhost:8000
  </code>
</pre>
Kita juga bisa mengubah alamat portnya. Misalkan, kita ingin mengubah portnya menjadi **5000**, kita bisa merubah argumennya menjadi seperti berikut:
<pre class="language-javascript">
  <code class="language-javascript">
php -S localhost:5000
  </code>
</pre>
Untuk mengarahkannya ke direktori atau file lain kita tinggal menambahkan tanda "/" lalu nama direktori atau filenya, contohnya seperti dibawah ini:
<pre class="language-javascript">
  <code class="language-javascript">
 php -S localhost:5000/direktori/nama-file.php
  </code>
</pre>

###### Catatan:
Web server bawaan PHP ini tidak direkomendasikan untuk digunakan pada lingkungan produksi (prodcution).

Nah, seperti itu lah cara menjalankan PHP tanpa menggunakan web server Apache atau XAMPP. Untuk lebih lengkapnya bisa dilihat didokumentasi PHP pada link berikut: 
<a class="text-blue-600 italic" href="https://www.php.net/manual/en/features.commandline.webserver.php" target="_blank">👉https://www.php.net/manual/en/features.commandline.webserver.php</a>.

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---