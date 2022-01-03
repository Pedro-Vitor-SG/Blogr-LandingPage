import styled from "styled-components";
import bg from "../../assets/bg-pattern-intro-desktop.svg";
import bgMobile from "../../assets/bg-pattern-intro-mobile.svg";
export const Container = styled.header`
  background-image: url(${bg}), radial-gradient(circle at 70%, #ff3d54, #ff8f70);
  font-family: "Ubuntu", sans-serif;
  border-radius: 0px 0px 0px 6rem;
  background-position: 20% 53%;
  background-size: 200%;

  padding: 3rem 6rem 10rem;

  .logo_btnMobile {
    margin-right: 3rem;
    display: inline-block;
  }
  .logo_btnMobile button {
    cursor: pointer;
    border: none;
    background: transparent;
    display: none;
  }
  nav {
    position: relative;
    top: -10px;
    width: 85%;
    display: inline-block;
  }
  nav .nav_list {
    list-style: none;
    display: inline-block;
  }
  nav .nav_list > li {
    margin-right: 3rem;
    position: relative;
    color: rgba(255,255,255, .7);
    display: inline-block;
  }
 nav .nav_list > li:hover {
   cursor: pointer;
   text-decoration: underline;
   color: rgba(255,255,255, 1);

 }

  nav .nav_list li  .dp_list a {
    text-decoration: none;
    color: var(--neutral-white);
    font-weight: bold;
    transition: 0.2s;
  }
  nav .nav_list li .dp_list a:hover {
    text-decoration: underline;
    opacity: 1;
    font-weight: bold;
  }
  nav .nav_list li  img {
    margin-left: 5px;
    transition: 0.2s;
  }
  nav .nav_list li:hover img {
    transform: rotate(180deg);
  }
  nav .nav_list li .dp_list {
    list-style: none;
    position: absolute;
    background-color: var(--neutral-white);
    left: -10px;
    opacity: 1;
    width: 13vw;
    border-radius: 5px;
    padding: 1rem 1.5rem 0px;
    box-shadow: 0px 5px 20px var(--neutral-grayish-blue);
    display: none;
  }
  nav .nav_list li:hover .dp_list {
    display: block;
  }
  nav .nav_list .dp_list li {
    margin-bottom: 1rem;
  }
  nav .nav_list .dp_list li a {
    font-weight: 300;
    opacity: 1;
    color: var(--neutral-very-dark-black-blue);
  }
  nav .nav_list .dp_list li a:hover {
    text-decoration: none;
    font-weight: bold;
  }
  nav .links {
    display: inline-block;
    position: relative;
    left: 35%;
  }
  nav .links a {
    text-decoration: none;
    margin: 0px 10px;
    font-weight: bold;
  }
  nav .links .btn_f {
    color: var(--neutral-white);
    opacity: 0.7;
    transition: 0.2s;
  }
  nav .links .btn_f:hover {
    opacity: 1;
  }
  nav .links .btn_s {
    color: var(--primary-light-red);
    background: var(--neutral-white);
    padding: 0.8rem 2.3rem;
    border-radius: 30px;
  }
  nav .links .btn_s:hover {
    color: var(--neutral-white);
    background: rgba(255, 122, 133, 0.6);
  }

  .texts_header {
    margin: 6rem 0px 4rem;
    text-align: center;
    color: var(--neutral-white);
    font-family: "Overppas", sans-serif;
  }
  .texts_header h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  .texts_header p {
    font-size: 1.3rem;
    opacity: 0.7;
  }

  .buttons_start_learn {
    text-align: center;
  }

  .buttons_start_learn .first {
    text-decoration: none;
    background-color: var(--neutral-white);
    font-size: 1.2rem;
    color: var(--primary-light-red);
    font-weight: bold;
    padding: 1rem 1.5rem;
    border-radius: 30px;
    transition: 0.3s;

    margin-right: 20px;
  }
  .buttons_start_learn .first:hover {
    background: rgba(255, 122, 133, 0.6);
    color: var(--neutral-white);
  }
  .buttons_start_learn .second {
    text-decoration: none;
    background-color: transparent;
    border: 1px solid var(--neutral-white);
    font-size: 1.2rem;
    color: var(--neutral-white);
    font-weight: bold;
    padding: 1rem 1.5rem;
    border-radius: 30px;
    transition: 0.3s;
  }
  .buttons_start_learn .second:hover {
    background-color: var(--neutral-white);
    color: rgba(255, 122, 133, 1);
  }
  @media (max-width: 991px) {
    background-image: url(${bgMobile}), radial-gradient(circle at 70%, #ff3d54, #ff8f70);
    background-size: 300%;
    background-position: 30% 35%;
    height: 90vh;
    display: block;
    padding: 3rem 1.5rem;
    .logo_btnMobile {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

    }
    .logo_btnMobile button {
      display: block;
    }
    nav {
      display: flex;
      position: absolute;
      left: -100vw;
      top: 18%;
      width: 85vw;
      margin-top: 20px;
      background-color: var(--neutral-white);
      flex-direction: column;
      transition: 0.5s;
      padding: 2rem 1.5rem;
      border-radius: 5px;
      box-shadow: 0px 5px 15px var(--neutral-very-dark-black-blue);
    }

    nav .nav_list {
      border-bottom: 1px solid var(--neutral-grayish-blue);
      flex-direction: column;
      width: 100%;
      display: flex;
      text-align: center;
    }
    nav .nav_list > li {
      margin: 0 0 20px 0;
      color: var(--primary-very-dark-blue);
    }
    nav .nav_list > li:hover {
      text-decoration: none;
      color: var(--primary-very-dark-blue);
      font-weight: bold;
    }
 
    nav .nav_list li .dp_list {
      z-index: 1000;
      list-style: none;
      border-radius: 5px;
      margin-top: 20px;
      padding: 0.5rem;
      background-color: rgba(200, 200, 203, 0.3);
      box-shadow: none;
      transition: 0.5s;
    }
    nav .nav_list li .dp_list li {
      margin: 20px;
      display: block;
    }
    nav .nav_list li .dp_list li a {
      color: var(--primary-very-dark-blue);
      opacity: 0.8;
      text-decoration: none;
    }
    nav.active {
      left: 8vw;
    }

    nav.active li .dp_list {
      width: 100%;
      position: relative;
      left: 0px;
    }
    nav .links {
      margin-top: 30px;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      left: 0;
    }
    nav .links a {
      margin: 10px 0px;
      display: block;
    }
    nav .links .btn_f {
      opacity: 1;
      z-index: 1000;
      color: var(--primary-very-dark-blue);
    }
    nav .links .btn_s {
      background: linear-gradient(to left, #ff3d54, #ff8f70);
      color: var(--neutral-white);
    }
    nav .links .btn_s:hover {
      background: linear-gradient(to left, #ff3d54, #ff8f70);
    }
    .texts_header {
      margin-bottom: 3.5rem;
    }
    .texts_header h1 {
      font-size: 2rem;
    }
    .texts_header p {
      font-size: 1rem;
    }
    .buttons_start_learn .first,
    .buttons_start_learn .second {
      font-size: 1rem;
      margin: 0px 5px;
      padding: 0.9rem 0.9rem;
    }
  }
`;
