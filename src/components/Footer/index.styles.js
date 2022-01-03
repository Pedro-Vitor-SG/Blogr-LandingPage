import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--neutral-very-dark-black-blue);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 0px;
  font-family: "Ubuntu", sans-serif;
  margin-top: 5rem;
  border-radius: 0px 80px 0px 0px;

  section {
    color: var(--neutral-white);
    display: flex;
    justify-content: space-around;
    width: 60%;
    font-size: 0.9rem;
  }
  section div p {
    margin-bottom: 1.5rem;
  }
  section div a {
    text-decoration: none;
    display: block;
    color: var(--neutral-white);
    opacity: 0.7;
    margin-bottom: 0.8rem;
  }
  section div a:hover {
    text-decoration: underline;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;

    align-items: center;
  }
  section {
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
  }
  section div {
      margin-bottom: 2rem;
  }
`;
