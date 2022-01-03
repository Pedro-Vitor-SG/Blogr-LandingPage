import React from "react";
import { Container } from "./index.styles";
import logo from "../../assets/logo.svg";


function Footer() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <section className="links_footer">
        <div>
          <p>
            <strong>Product</strong>
          </p>
          <a href="/">Overview</a> <a href="/">Pricing</a>
          <a href="/">Marketplace</a> <a href="/">Features</a>
          <a href="/">Integrations</a>
        </div>
        <div>
          <p>
            <strong>Company</strong>
          </p>{" "}
          <a href="/">About</a> <a href="/">Team</a> <a href="/">Blog</a>{" "}
          <a href="/">Careers</a>
        </div>
        <div>
          <p>
            <strong>Connect</strong>
          </p>{" "}
          <a href="/">Contact</a> <a href="/">Newsletter</a>{" "}
          <a href="/">LinkedIn</a>
        </div>
      </section>
    </Container>
  );
}

export default Footer;
