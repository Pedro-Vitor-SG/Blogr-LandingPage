import React, { useState } from "react";
import { Container } from "./index.styles";

import logo from "../../assets/logo.svg";
import icon_hamburger from "../../assets/icon-hamburger.svg";
import icon_close from "../../assets/icon-close.svg";
import arrow from "../../assets/icon-arrow-light.svg";
import arrowMobile from "../../assets/icon-arrow-dark.svg";

function Header() {
  const [btnMobile, setButtonMobile] = useState(false);
  const handleButton = () => {
    setButtonMobile(!btnMobile);
  };

  

  return (
    <Container>
      <div className="logo_btnMobile">
        <a href="/">
          <img src={logo} alt="logo blogr" />
        </a>
        <button onClick={handleButton}>
          {btnMobile ? (
            <img src={icon_close} alt="close nav" />
          ) : (
            <img src={icon_hamburger} alt="open nav" />
          )}
        </button>
      </div>

      <nav className={btnMobile ? "active" : ""}>
        <ul className="nav_list">
          <li>
            <a href="#">
              Product <img src={btnMobile  ? arrowMobile : arrow} alt="arrow" />
            </a>

            <ul className="dp_list">
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Company <img src={btnMobile ? arrowMobile : arrow} alt="arrow" />
            </a>
            <ul className="dp_list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Carees</a>
              </li>
              <li></li>
            </ul>
          </li>
          <li>
            <a href="#">
              Connect <img src={btnMobile ? arrowMobile : arrow} alt="arrow" />
            </a>
            <ul className="dp_list">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </li>
        </ul>

        <section className="links">
          <a className="btn_f" href="#">Login</a> <a className="btn_s" href="#">Sign Up</a>
        </section>
      </nav>

       <section className="texts_header">
        <h1> A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
      </section>

      <section className="buttons_start_learn">
        
          <a className="first" href="#">Start for Free</a>
        
          <a className="second" href="#">Learn More</a>
      
      </section> 
    </Container>
  );
}

export default Header;
