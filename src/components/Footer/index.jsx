import React from "react";
import { Container } from "./index.styles";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <Container>
      <img src={logo} alt="Logo Blogr" />
      <section>
        <div>
          <h4>Product</h4>
          <a href="/"> Overview</a>
          <a href="/">Pricing</a>
          <a href="/">Marketplace</a>
          <a href="/">Features</a>
          <a href="/">Integrations</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="/">About</a>
          <a href="/">Team</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
        </div>

        <div>
          <h4>Connect</h4>
          <a href="/">Contact</a>
          <a href="/">Newsletter</a>
          <a href="/">LinkedIn</a>
        </div>
      </section>
    </Container>
  );
}

export default Footer;
