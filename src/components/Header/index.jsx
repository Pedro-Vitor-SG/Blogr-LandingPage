import React from "react";
import logo from "../../assets/logo.svg";

import { Container } from "./index.styles";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo Blogr" />

      <nav>
        <ul className="main_list">
          <li className="item">
            Product
            <ul className="dropdown">
              <li>Product</li>
              <li> Overview </li>
              <li>Pricing </li>
              <li>Marketplace</li>
              <li> Features </li>
              <li>Integrations</li>
            </ul>
          </li>

          <li>
            Company
            <ul className="dropdown">
              <li>Company</li>
              <li> About </li>
              <li>Team</li>
              <li> Blog</li>
              <li> Careers </li>
              <li>Connect</li>
            </ul>
          </li>

          <li>
            Contact
            <ul className="dropdown">
              <li>Contact</li>

              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </li>
        </ul>

        <div className="buttons">
          <button>
            <a href="/">Login</a>
          </button>{" "}
          <button className="second">
            <a href="/">Sign Up</a>
          </button>
        </div>
      </nav>

      <section>
        <h1>A modern publishing platform</h1>
        <p> Grow your audience and build your online brand</p>
        <button className="btn_one">
          <a href="/">Start for Free</a>
        </button>{" "}
        <button className="btn_two">
          <a href="/">Learn More</a>
        </button>
      </section>
    </Container>
  );
};

export default Header;
