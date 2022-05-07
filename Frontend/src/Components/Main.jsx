import React from "react";
import "./main.css";
import Typed from "react-typed";
const Main = () => {
  return (
    <section className="main-container">
      <div className="left-content">
        <span>
          <Typed
            strings={["This is working"]}
            typeSpeed={40}
            startDelay={500}
            loop={true}
            loopCount={Infinity}
            backDelay={1000}
          />
        </span>
      </div>
      <div className="right-content">zvcXz</div>
      {/* <section class='landing'>
                                            <div class='landing-text'>
                                              <h1>More than just shorter links</h1>
                                              <p>
                                                Build your brand’s recognition and get detailed insights on how your links are performing.
                                              </p>
                                              <a href='#url-shorten-form' class='btn btn-lg'>Get Started</a>
                                            </div>
                                            <div class='landing-image'>
                                              <img src='https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/illustration-working.svg' alt='Working Illustration' />
                                            </div>
                                          </section>
                                          <section class='features' id='features'>
                                            <div class='container'>
                                              <div class='url-shorten-feature'>
                                                <form class='url-shorten-form' id='url-shorten-form'>
                                                  <div>
                                                    <input
                                                      type='text'
                                                      class='url-input'
                                                      placeholder='Shorten a link here...'
                                                      autocomplete='off' />
                                                    <span class='alert'></span>
                                                  </div>
                                                  <button type='submit' class='btn btn-lg btn-plus-icon'>
                                                    Shorten It!
                                                  </button>
                                                </form>
                                                <div class='url-shorten-results'></div>
                                              </div>
                                              <div class='more-features'>
                                                <div class='section-header'>
                                                  <h2>Advanced Statistics</h2>
                                                  <p>
                                                    Track how your links are performing across the web with our advanced statistics dashboard.
                                                  </p>
                                                </div>
                                                <div class='more-features-content'>
                                                  <div class='feature'>
                                                    <div class='feature-illustration'>
                                                      <img src='https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-brand-recognition.svg' alt='Feature Illustration Icon'
                                                      />
                                                    </div>
                                                    <div class='feature-details'>
                                                      <h3>Brand Recognition</h3>
                                                      <p>
                                                        Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <div class='feature'>
                                                    <div class='feature-illustration'>
                                                      <img src='https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-detailed-records.svg' alt='Feature Illustration Icon'
                                                      />
                                                    </div>
                                                    <div class='feature-details'>
                                                      <h3>Detailed Records</h3>
                                                      <p>
                                                        Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <div class='feature'>
                                                    <div class='feature-illustration'>
                                                      <img src='https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-fully-customizable.svg' alt='Feature Illustration Icon'
                                                      />
                                                    </div>
                                                    <div class='feature-details'>
                                                      <h3>Fully Customizable</h3>
                                                      <p>
                                                        Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                          <section class='pricing' id='pricing'>
                                            <div class='container'>
                                              <div class='section-header'>
                                                <h2>Boost your links today</h2>
                                                <a href='#' class='btn btn-lg'>Get Started</a>
                                              </div>
                                            </div>
                                          </section> */}
    </section>
  );
};

export default Main;
