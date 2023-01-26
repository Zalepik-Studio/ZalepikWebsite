---
title: "React Nodejs API"
date: "2023-01-11"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Pada kesempatan kali ini kita akan membahas bagaimana caranya mengambil data dari back end Node.js dan database MySQL"
thumbnail: "https://zalepik-studio.github.io/zalepik-learning/images/react-nodejs-api/thumbnail.png"
images: ["https://zalepik-studio.github.io/zalepik-learning/images/react-nodejs-api/images.png"]
banner: "https://zalepik-studio.github.io/zalepik-learning/images/react-nodejs-api/banner.png"
topik: "API"
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
- python
- nodejs
- denojs
- react
- mysql
- api
---

Pada kesempatan kali ini kita akan membahas bagaimana caranya mengambil data dari back end Node.js dan database 
MySQL menggunakan API di React. API (Application Programming Interface) adalah sebuah cara untuk mengakses data atau fitur dari sebuah aplikasi atau sistem. Perhatikan kode dibawah ini.

#### React

<pre class="language-javascript">
  <code class="language-javascript">
import React, { useState, useEffect } from 'react';

function DataList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/data-mahasiswa');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          {item.nama} 
          {item.npm}
          {item.jurusan} 
          {item.program_studi}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <DataList />
    </div>
  );
}

export default App;
  </code>
</pre>
Kode tersebut adalah contoh aplikasi React yang digunakan untuk mengambil data dari back-end Node.js dan database MySQL menggunakan API.

<div class="zbarisbaru"></div>

Pertama, komponen React DataList didefinisikan. Komponen ini menggunakan hook useState untuk mengelola data yang diambil dari back-end, error yang mungkin terjadi, dan status loading.

<div class="zbarisbaru"></div>

Kemudian, hook useEffect digunakan untuk mengambil data dari back-end ketika komponen pertama kali di-render. Dalam useEffect, kita menggunakan fungsi fetchData untuk mengirim permintaan HTTP ke back-end menggunakan fetch dan menangani respons yang diterima. Jika respons tidak ok maka akan dibuat error dengan statusText dan dimasukkan kedalam setError. Kemudian jika respons ok maka data akan di parsing menjadi JSON dan disimpan kedalam state data dengan setData(data).

<div class="zbarisbaru"></div>

Kemudian, kondisi ditambahkan pada komponen untuk menampilkan loading jika proses fetch data masih berlangsung, dan error jika terjadi error pada saat proses fetch data.

<div class="zbarisbaru"></div>

Jika data telah diterima dari back-end dan tidak ada error, data akan ditampilkan dalam bentuk list dengan menggunakan map function dan ditampilkan setiap item dari data yang diterima.

<div class="zbarisbaru"></div>

Dan pada function App, component DataList digunakan sebagai komponen utama yang akan di render di dalam div dengan class App.

<div class="zbarisbaru"></div>

Kode ini adalah contoh aplikasi React yang digunakan untuk mengambil data dari back-end Node.js dan database MySQL menggunakan API.

<div class="zbarisbaru"></div>

Pertama, komponen React DataList didefinisikan. Komponen ini menggunakan hook useState untuk mengelola data yang diambil dari back-end, error yang mungkin terjadi, dan status loading.

<div class="zbarisbaru"></div>

Kemudian, hook useEffect digunakan untuk mengambil data dari back-end ketika komponen pertama kali di-render. Dalam useEffect, kita menggunakan fungsi fetchData untuk mengirim permintaan HTTP ke back-end menggunakan fetch dan menangani respons yang diterima. Jika respons tidak ok maka akan dibuat error dengan statusText dan dimasukkan kedalam setError. Kemudian jika respons ok maka data akan di parsing menjadi JSON dan disimpan kedalam state data dengan setData(data).

<div class="zbarisbaru"></div>

Kemudian, kondisi ditambahkan pada komponen untuk menampilkan loading jika proses fetch data masih berlangsung, dan error jika terjadi error pada saat proses fetch data.

<div class="zbarisbaru"></div>

Jika data telah diterima dari back-end dan tidak ada error, data akan ditampilkan dalam bentuk list dengan menggunakan map function dan ditampilkan setiap item dari data yang diterima.

<div class="zbarisbaru"></div>

Dan pada function App, component DataList digunakan sebagai komponen utama yang akan di render di dalam div dengan class App.

<div class="zbarisbaru"></div>

Secara keseluruhan, aplikasi ini mengirim permintaan HTTP ke back-end menggunakan fetch, kemudian menerima dan menangani respons dari back-end, kemudian menyimpan data yang diterima dari back-end ke dalam state komponen dan menampilkannya ke layar pengguna melalui komponen DataList yang di render di dalam komponen App.

#### Node.js

<pre class="language-javascript">
  <code class="language-javascript">
const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_data_mahasiswa'
});

connection.connect();

app.get('/data-mahasiswa', (req, res) => {
  connection.query('SELECT * FROM data_mahasiswa', (error, results, fields) => {
    if (error) {
      throw error;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

  </code>
</pre>

Kode ditas adalah contoh kode untuk back-end dari aplikasi React yang digunakan untuk mengambil data dari database MySQL menggunakan Node.js. Pada kode ini, kita menggunakan library express dan mysql untuk membuat aplikasi back-end.

<div class="zbarisbaru"></div>

Pertama, kita import library express dan mysql dengan perintah const express = require('express'); dan const mysql = require('mysql'); . Kemudian kita membuat instance dari express dengan const app = express();

<div class="zbarisbaru"></div>

Setelah itu, kita membuat koneksi ke database MySQL dengan menggunakan mysql2.createConnection() method dan mengirimkan objek konfigurasi yang berisi informasi login dan nama database. Kemudian kita memanggil connection.connect() method untuk terhubung dengan database.

<div class="zbarisbaru"></div>

Selanjutnya,kita menambahkan route /data-mahasiswa pada express dengan app.get('/data-mahasiswa', (req, res) => {. Kemudian kita mengeksekusi query SELECT pada tabel data_mahasiswa. Jika terjadi error, maka akan dibuat error dengan throw error. Kemudian kita mengirim data hasil query yang diterima dari database dalam format json dengan res.json(results);.

<div class="zbarisbaru"></div>

Terakhir, kita membuat server untuk menjalankan aplikasi back-end dengan menggunakan app.listen(3000, () => { dan menampilkan pesan 'Server listening on port 3000' pada console saat server berhasil berjalan.

<div class="zbarisbaru"></div>

Berikut ini adalah source code lengkap dari script diatas.<a class="text-blue-600 italic" href="https://github.com/heriwahyudiono/react-nodejs-api" target="_blank">👉https://github.com/heriwahyudiono/react-nodejs-api</a>.

<div class="zbarisbaru"></div>

sumber gambar:
https://www.flaticon.com/free-icon/react_1183672?term=react&page=1&position=3&origin=search&related_id=1183672
https://www.flaticon.com/free-icon/api_4180439?term=rest+api&page=1&position=7&origin=search&related_id=4180439





