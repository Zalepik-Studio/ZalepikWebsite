---
title: "Membuat Realtime Chat Sederhana Menggunakan Socket.io"
date: "2023-01-26"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Dalam tutorial ini, kita akan belajar bagaimana membuat sebuah aplikasi chat sederhana menggunakan Socket.IO"
thumbnail: "https://mzainulmuttaqin.github.io/Zalepik_Images/artikel/tumbnail/zalepik_thumbnail_membuat_realtime_chat_sederhana_menggunakan_socket.io.png"
images: ["https://mzainulmuttaqin.github.io/Zalepik_Images/artikel/thumbnail/zalepik_thumbnail_membuat_realtime_chat_sederhana_menggunakan_socket.io.png"]
banner: "https://mzainulmuttaqin.github.io/Zalepik_Images/artikel/banner/zalepik_banner_membuat_realtime_chat_sederhana_menggunakan_socket.io.png"
topik: "Socket.io"
tags: 
- html
- css
- bootstrap
- tailwind css
- javascript
- php
- react
- codeigniter
- node js
- mysql
- flutter
- socket.io
---

Socket.IO adalah library JavaScript yang digunakan untuk membuat aplikasi realtime seperti chat. Dalam tutorial ini, kita akan belajar bagaimana membuat sebuah aplikasi chat sederhana menggunakan Socket.IO.

<div class="zbarisbaru"></div>

Pertama, buat sebuah folder baru dan buat file server.js di dalamnya. Kemudian, masukkan kode berikut ke dalam file tersebut:

<pre class="language-javascript">
  <code class="language-javascript">
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
  </code>
</pre>

Kode di atas merupakan kode dasar untuk menjalankan server Socket.IO. Kita menggunakan Express untuk menangani routing dan mengirimkan file index.html ke client saat client mengakses halaman '/'. Kemudian, kita menggunakan socket.io dengan http server.

<div class="zbarisbaru"></div>

Selanjutnya, buat file index.html di dalam folder yang sama dengan file server.js dan masukkan kode berikut ke dalam file tersebut:

<pre class="language-html">
  <code class="language-html">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Socket.io Realtime Chat</title>
  <style>
    body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }

    #form { background: rgba(0, 0, 0, 0.15); padding: 0.25rem; position: fixed; bottom: 0; left: 0; right: 0; display: flex; height: 3rem; box-sizing: border-box; backdrop-filter: blur(10px); }
    #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
    #input:focus { outline: none; }
    #form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; }

    #messages { list-style-type: none; margin: 0; padding: 0; }
    #messages > li { padding: 0.5rem 1rem; }
    #messages > li:nth-child(odd) { background: #efefef; }
  </style>
</head>
<body>
  <ul id="messages"></ul>
    <form id="form" action="">
      <input id="input" autocomplete="off" /><button>Send</button>
    </form>
    <script src="/socket.io/socket.io.js"></script>

    <script>
      var socket = io();

      var messages = document.getElementById('messages');
      var form = document.getElementById('form');
      var input = document.getElementById('input');

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value) {
          socket.emit('chat message', input.value);
          input.value = '';
        }
      });

      socket.on('chat message', function(msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      });
    </script>
</body>
</html>
  </code>
</pre>

Kode di atas adalah kode HTML untuk tampilan aplikasi chat kita. Kita menggunakan elemen ul dengan id "messages" untuk menampilkan pesan yang diterima, elemen form dengan id "form" untuk mengirim pesan dan elemen input dengan id "input" untuk mengetik pesan.

<div class="zbarisbaru"></div>

Setelah kita memahami kode di atas, kita dapat menjelaskan bagaimana aplikasi chat ini bekerja. Pertama, aplikasi mengeksekusi kode JavaScript yang mengatur event listener pada form. Setiap kali form dikirim (submit), event listener akan menjalankan fungsi yang mencegah aksi default dari form dan mengirim pesan yang ditulis di input ke server melalui socket.io dengan emit event "chat message" dan mengosongkan input.

<div class="zbarisbaru"></div>

Kemudian, server menerima event "chat message" dan mengirim pesan yang diterimanya kembali ke semua client yang terhubung dengan emit event "chat message" juga. Pada client, event listener ditambahkan pada socket untuk menerima event "chat message" dan menambahkan pesan tersebut ke dalam element ul dengan id "messages" dan mencakup tampilan.

<div class="zbarisbaru"></div>

Itulah cara kerja aplikasi chat sederhana menggunakan socket.io. Kamu dapat mencoba menjalankan aplikasi ini di localhost dengan menjalankan perintah "node server.js" di command prompt atau terminal dan mengunjungi http://localhost:3000/ di browser.

<div class="zbarisbaru"></div>

Demo aplikasi:
<img class="" src="https://zalepik-studio.github.io/zalepik-learning/images/membuat-realtime-chat-menggunakan-socket.io/Screenshot (1).png">

<div class="zbarisbaru"></div>

Referensi: <a class="text-blue-600 italic" href="https://socket.io/get-started/chat" target="_blank">👉https://socket.io/get-started/chat</a>

Source code: <a class="text-blue-600 italic" href="https://github.com/socketio/chat-example" target="_blank">👉https://github.com/socketio/chat-example</a>

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---