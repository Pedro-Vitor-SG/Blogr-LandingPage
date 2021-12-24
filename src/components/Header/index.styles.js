import styled from "styled-components";
import bg from "../../assets/bg-pattern-intro-desktop.svg";

export const Container = styled.header`
  background-image: url(${bg}), radial-gradient(circle at 70%, #ff3d54, #ff8f70);
  font-family: "Overpass", sans-serif;
  border-radius: 0px 0px 0px 6rem;
  background-position: 18% 53%;
  background-size: 200%;
  padding: 3rem 8rem;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  img {
    margin-right: 50px;
  }

  nav {
    display: flex;
    width: 85%;
    justify-content: space-between;
}
  .buttons button {
    margin: 0px 10px;
    background: transparent;
    border-radius: 25px;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: 1rem;
    transition: 0.2s;
  }
  .buttons button:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .buttons button.second {
    background: var(--neutral-white);
    padding: 0.8rem 2.5rem;
  }
  .buttons .second:hover {
    background: rgba(255, 255, 255, 0.1);
    opacity: 1;
  }
  .buttons button a {
    color: var(--neutral-white);
    text-decoration: none;
    transition: 0.2s;
  }
  .buttons button.second a {
    color: var(--primary-light-red);
  }
  .buttons button.second:hover a {
    color: var(--neutral-white);
  }

  section {
    width: 100vw;
    margin: 6rem 0px;
    text-align: center;
    color: var(--neutral-white);
  }
  section h1 {
    font-size: 3.8rem;
  }
  section p {
    font-size: 1.3rem;
    margin: 20px 0px 40px 0px;
  }
  section button {
    outline: none;
    border: none;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    margin-right: 10px;
    transition: 0.2s;
  }
  section a {
    text-decoration: none;
    transition: 0.2s;
  }

  section .btn_one a {
    color: var(--primary-light-red);
  }
  section .btn_one:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  section .btn_one:hover a {
    color: var(--neutral-white);
  }
  section .btn_two {
    border: 2px solid var(--neutral-white);
    background-color: transparent;
  }
  section .btn_two a {
    color: var(--neutral-white);
  }
  section .btn_two:hover {
    background-color: var(--neutral-white);
  }
  section .btn_two:hover a {
    color: var(--primary-light-red);
  }
`;
