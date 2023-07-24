import React, { Component } from 'react'
import '../../css-components/Navi.css';
import { Link } from 'react-router-dom';

class Navi extends Component {
    state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <>
        <div className="bodyyy">
        <header class="hed1">
            <div className="log21"></div>
            {/* <a href="#" className="logo">ChefFinder</a> */}
            <nav class="nav-ite">
            <div>
            <ul id="navbar" className={this.state.clicked ? 
            "#navbar active" : "#navbar"}>
                <li><a  className="active"href="#">Home</a></li>
                <Link to="/Login1"><li><a href="#">Chef</a></li></Link>
                <Link to="/Login"><li><a href="#">User</a></li></Link>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar"
          className={this.state.clicked ? 
            'fas fa-times':'fas fa-bars'}>
        </i>
        </div>
            </nav>
        </header>
        <main>
            <div class="intro">
            <h1>CHEF FINDER</h1>
            <p>A Chef must think like a scientist, Organize like an accountant</p><p>Plate like an Artist, Cook like our Grandma</p>
            {/* <button>Learn More</button> */}
            </div>
            <div class="achievements">
            <div class="work">
                <div className="img1"></div>
                <p class="work-heading">CHEF</p>
                <p class="work-text">The professional chefs cook all type of cuisines such as south Indian, north Indian,South Indian etc., They will cook and decorate food in an attractive manner. The chefs are well-educated persons with a passion to cook food..</p>
            </div>
            <div class="work">
            <div className="img2">
                </div>
                <p class="work-heading">FAST APPROACH</p>
                <p class="work-text">Fasts approach in our application. We will find the fast method to find the best chef our the location to your location.</p>
            </div>
            <div class="work">
            <div className="img3"></div>
                <p class="work-heading">EXPERIENCE</p>
                <p class="work-text">We have the experienced chef in our application. We give the best and quality chef that i will make event more grantful.</p>
            </div>
            </div>
            <div class="about-me">
            <div class="about-me-text">
                <h2>A LITTLE ABOUT US</h2>
                <p>This is a application based on finding a suitable chef our event. You can find well experienced chef in our application.We only refer to best Chef in our application.
                    Our application select finely filtered chef around us.We believe that we give our best option.
                </p>
            </div>
            <img src="https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3298637.jpg&fm=jpg" alt="me"/>
            </div>
        </main>
        <footer class="footer">
            <div class="copy">© 2023 Developer</div>
            <div class="bottom-links">
            {/* <div class="links">
                <span>More Info</span>
                <br></br><br></br>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <br></br> */}
            <div class="links">
                <span>Social Links</span>
                <br></br><br></br>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            </div>
        </footer>
        </div>
      </>
    )
  }
}

export default Navi;