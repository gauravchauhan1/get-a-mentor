import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <div>
          <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet"/>

            <footer>

              <div class="row-footer">
                <div class="site-logo">
                  <span>CodePy</span>
                  <ul class="main-nav">
                    <li class="item1">
                      <span>C</span>
                    </li>
                    <li class="item2">
                      <span>O</span>
                    </li>
                    <li class="item3">
                      <span>D</span>
                    </li>
                    <li class="item4">
                      <span>E</span>
                    </li>
                  </ul>
                </div>
                <div class="site-links">
                  <span>Languages</span>
                  <ul class="list-links">
                    <li><a>Python</a></li>
                    <li><a>Java</a></li>
                    <li><a>JavaScript</a></li>
                    <li><a>HTML & CSS / SCSS</a></li>
                  </ul>
                </div>
                <div class="adr-email">
                  <span>Address</span>
                  <ul class="">
                    <li class="location"><a><i class="fas fa-map-pin"></i>Casablanca, Morocco</a></li>
                    <li class="email"><a href="mailto:ashishad14@gmail.com?subject=subject text">ashishad14@gmail.com</a></li>
                  </ul>
                </div>
                <div class="subscribe-form">
                  <input type="email" placeholder="Your E-Mail Address"/>
                  <button type="submit">Subscribe</button>
                  <p>I respect your privacy. Unsubscribe at any time.</p>
                </div>
              </div>

              <hr/>

              <div class="row-footer">
                <div class="follow-icons">
                  <li><span>Follow me here</span></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-github"></i></a></li>
                  <li><a href="#"><i class="fab fa-stack-overflow"></i></a></li>
                  <li><a href="#"><i class="fab fa-codepen"></i></a></li>
                </div>
              </div>


              <div class="row-footer">
                <div class="right-dis">Made with <i style="color: red; font-size: 12px;" class="fas fa-heart"></i> by <strong>Meriem Barhoumi</strong></div>
                <div class="left-dis">Copyright <strong>CodePy</strong> © 2021. All the rights are reserved.</div>
              </div>

            </footer>
    </div>
  )
}

export default Footer
