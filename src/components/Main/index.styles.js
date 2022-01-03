import styled from "styled-components";

import editorDesktop from "../../assets/illustration-editor-desktop.svg";
import bgCircle from "../../assets/bg-pattern-circles.svg";
import laptopDesktop from "../../assets/illustration-laptop-desktop.svg";

export const Container = styled.main`
  font-family: "Overpass", sans-serif;
  color: var(--primary-very-dark-blue);
  margin-top: 3rem;

  .section_first {
    background: url(${editorDesktop}) no-repeat 57vw;
    background-size: 60%;
    padding: 5rem 0px 5rem 6rem;
  }
  .section_first h1 {
    text-align: center;
    margin: 0px 0px 3rem 0px;
    font-size: 2rem;
  }
  .section_first div {
    width: 50%;
  }
  .section_first div h2 {
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
  }
  .section_first div p {
    line-height: 28px;
    font-weight: bold;
    opacity: 0.6;
    width: 84%;
    margin-bottom: 5rem;
    color: var(--gradient-very-dark-gray-blue);
  }

  .section_second {
    background: url(${bgCircle}) var(--gradient-very-dark-gray-blue) no-repeat -18vw -80vh;

    color: var(--neutral-white);
    display: flex;
    align-items: center;
    height: 60vh;
    padding: 6rem;
    border-radius: 0px 100px 0px 100px;
  }

  .section_second img {
    position: relative;
    top: 20px;
  }
  .section_second div {
    margin-left: 3rem;
  }
  .section_second div h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  .section_second div p {
    font-size: 1.1rem;
    line-height: 28px;
    opacity: 0.8;
  }
  .section_third {
    padding: 10rem 0px;
    background: url(${laptopDesktop}) no-repeat -20vw;
    background-size: 70%;
    margin-top: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .section_third div {
    width: 50%;
    padding: 0px 6rem 0px 2rem;
  }
  .section_third div h2 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  .section_third div p {
    line-height: 28px;
    font-weight: bold;
    opacity: 0.8;
    margin-bottom: 4rem;
    width: 95%;
  }
  @media (max-width: 991px) {
    .section_first {
      background: none;
      padding: 0px;
    }
    .section_first h1 {
      font-size: 1.4rem;
    }
    .section_first img {
      width: 100%;
      margin-bottom: 2rem;
    }
    .section_first div {
      width: 100%;
      text-align: center;
      padding: 0px 2rem;
    }
    .section_first div h2 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      padding: 0px 2rem;
    }
    .section_first div p {
      margin-bottom: 2rem;
      width: 100%;
      font-size: 0.8rem;
      line-height: 22px;
      opacity: 0.6;
    }

    .section_second {
      background: url(${bgCircle}) var(--gradient-very-dark-gray-blue) no-repeat -30vw -30vh;
      background-size: 160%;
      color: var(--neutral-white);
      display: flex;
      flex-direction: column;
      border-radius: 0px 100px 0px 100px;
      margin-top: 10rem;
      height: 100vh;
      padding: 0px;
    }

    .section_second img {
      width: 100%;
      top: -20%;
    }
    .section_second div {
      margin-left: 0;
      text-align: center;
      position: relative;
      top: -20%;
    }
    .section_second div h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    .section_second div p {
      padding: 0px 2.5rem;
      font-size: 0.8rem;
      line-height: 28px;
      opacity: 0.8;
      line-height: 25px;
    }
    .section_third {
    padding: 0rem 0px;
    background: none;
    background-size: none;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section_third img{
    width: 140%;
  }
  .section_third div {
    width: 100%;
    text-align: center;
   padding: 0px 1.3rem;
   margin-top: 2rem;
  }
  .section_third div h2 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
  .section_third div p {
    line-height: 25px;
    font-size: .9rem;
    margin-bottom: 2rem;
    width: 100%;
  }
  }
  @media (min-width: 480px) and (max-width: 991px){
    .section_second img {
      width: 60%;
    }
  }
`;
