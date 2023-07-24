import React from 'react'
import './New.css';
// import Contact from './contact';
// import './plant01.jpg';
// import './plant.png';
// import Navbar from './Navbar';
function New() {
  return (
    <div>
      {/* <Navbar/> */}
  <header class="header">
  <img src="C:\Users\ashuk\gardens\src\plant.png" width={100}></img>
    <a href="home" class="logo">Plant-Me</a>
    <nav class="nav-items">
      <a href="#">Garden Planning</a>
      <a href="#">Season</a>
      <a href="#">Remainder</a>
      <a href="#">Garden Journal</a>
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="createac">Register</a>
      
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>Welcome To Plant-Me</h1>
      <p></p>
      {/* <button>Explore</button> */}
    </div>
    {/* <div class="about-me">
    </div> */}
    <div className="image-links-home">
      <a href="link1">
        {/* <img src={} width={100} className='image-link'/> */}
      </a>
      <a href="link2">
        <img src="image2.jpg" className="image-link" />
      </a>
      </div>
    </main>
  
  </div>
)
}

export default New;