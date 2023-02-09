---
title: "Cara Membuat Routing di React"
date: "2023-02-03"
city: "Lampung"
writer: "Heri"
zname_writer: "Heri Wahyudiono"
zartikel: "artikel"
description: "Dalam artikel ini, kita akan membahas cara membuat routing di React dengan menggunakan React Router DOM"
thumbnail: "https://zalepik-studio.github.io/zalepik-learning/images/cara-membuat-routing-di-react/thumbnail.png"
images: ["https://zalepik-studio.github.io/zalepik-learning/images/cara-membuat-routing-di-react/images.png"]
banner: "https://zalepik-studio.github.io/zalepik-learning/images/cara-membuat-routing-di-react/banner.png"
topik: "Routing in React"
tags: 
- JavaScript
- React
- React Router DOM
- Routing
---

Routing adalah salah satu hal penting dalam pembuatan aplikasi web dengan React. Routing digunakan untuk mengatur alur aplikasi dan membuat halaman-halaman terpisah dalam aplikasi. Dengan routing, kita dapat membuat aplikasi yang lebih interaktif dan mudah dipahami oleh pengguna. Dalam artikel ini, kita akan membahas cara membuat routing di React dengan menggunakan React Router DOM.

#### Install Package React Router DOM

Untuk membuat routing di React kita membutuhkan package yaitu React Router Dom. Gunakan perintah berikut untuk menginstall React Router DOM:

<pre class="language-javascript">
  <code class="language-javascript">
npm install react-router-dom
  </code>
</pre>

#### Membuat Component

Langkah selanjutnya, yaitu membuat component-component yang akan kita gunakan sebagai halaman. Dalam hal ini, kita akan membuat tiga halaman: Home, Portofolio dan Blog.

Home.js
<pre class="language-javascript">
  <code class="language-javascript">
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
  </code>
</pre>

Portofolio.js
<pre class="language-javascript">
  <code class="language-javascript">
const Portofolio = () => {
  return (
    <div>
      <h2>Portofolio</h2>
    </div>
  );
};

export default Portofolio;
  </code>
</pre>

Blog.js
<pre class="language-javascript">
  <code class="language-javascript">
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;
  </code>
</pre>

#### Mengimpor Component

Setelah membuat component halaman, selanjutnya kita akan membuat routing pada App.js. Dalam App.js kita akan menggunakan BrowserRouter sebagai root dari routing. Kita juga akan menggunakan Route untuk menentukan path dan component yang akan ditampilkan pada halaman tertentu. Kemuadian, kita juga akan mengimpor component halaman yang sudah dibuat pada App.js

App.js
<pre class="language-javascript">
  <code class="language-javascript">
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' 
import Home from './pages/Home' 
import Portofolio from './pages/Portofolio' 
import Blog from './pages/Blog' 
 
const App = () => { 
  return ( 
    <Router> 
      <div> 
        <nav> 
          <ul> 
            <li> 
              <Link to="/">Home</Link> 
            </li> 
            <li> 
              <Link to="/portofolio">Portofolio</Link> 
            </li> 
            <li> 
              <Link to="/blog">Blog</Link> 
            </li> 
          </ul> 
        </nav> 
        <Routes> 
          <Route exact path='/' element={<Home />} /> 
          <Route path='/portofolio' element={<Portofolio />} /> 
          <Route path='/blog' element={<Blog />} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
} 
 
export default App; 
  </code>
</pre>

Untuk membuat link ke halaman lain, kita menggunakan component <Link> dari React Router DOM:

<pre class="language-javascript">
  <code class="language-javascript">
<Link to="/portofolio">Portofolio</Link>
  </code>
</pre>

Untuk membuat halaman baru, kita menggunakan component <Route> dari React Router DOM:

<pre class="language-javascript">
  <code class="language-javascript">
<Route path="/portofolio" component={Portofolio} />
  </code>
</pre>

Pada kode di atas, path adalah URL yang akan mengarahkan kita ke halaman Portofolio dan component adalah component yang akan digunakan untuk menampilkan halaman tersebut.

<div class="zbarisbaru"></div>
<div class="zbarisbaru"></div>

---

