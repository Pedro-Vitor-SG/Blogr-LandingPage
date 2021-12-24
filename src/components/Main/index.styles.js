import styled from "styled-components";

import img1 from "../../assets/illustration-editor-desktop.svg";
import img2 from "../../assets/bg-pattern-circles.svg";
import img3 from "../../assets/illustration-laptop-desktop.svg";

export const Container = styled.main`
  margin-top: 2rem;
  font-family: "Overpass", sans-serif;
  color: var(--primary-very-dark-blue);

  .introducion {
    background: url(${img1}) no-repeat;
    background-position: 60vw;
    background-size: 55vw;
    padding: 6rem;
  }
  .introducion h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 4rem;
  }
  .introducion .texts {
    width: 50%;
  }
  .introducion .texts h2 {
    font-size: 1.9rem;
    margin-bottom: 1rem;
  }
  .introducion .texts p {
    font-size: 1.1rem;
    margin-bottom: 5rem;
    line-height: 1.6rem;
    font-weight: 600;
    color: var(--neutral-very-dark-black-blue);
    opacity: 0.6;
  }

  .state {
    background: url(${img2}) var(--gradient-very-dark-gray-blue) no-repeat;
    background-position: -20vw -80vh;
    color: var(--neutral-white);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65vh;
    border-radius: 0px 80px 0px 80px;
    margin-top: 1rem;
  }
  .state .img {
    position: relative;
    top: 25px;
  }
  .state .texts {
    padding: 2rem;
    width: 45%;
  }
  .state .texts h2 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }
  .state .texts p {
    font-size: 1.1rem;
    line-height: 26px;
  }
  .free_open_simple {
    background: url(${img3}) no-repeat;
    background-position: -16vw;
    background-size: 55vw;
    margin-top: 6rem;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .free_open_simple .texts {
    width: 56%;
  }
  .free_open_simple .texts h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .free_open_simple .texts p {
    margin-bottom: 3rem;
    line-height: 26px;
    width: 65%;
  }
  
`;
