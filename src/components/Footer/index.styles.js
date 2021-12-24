import styled from "styled-components";

export const Container = styled.footer`
  background: var(--neutral-very-dark-black-blue);
  color: var(--neutral-white);
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  border-radius: 0px 80px 0px 0px;
  padding: 2rem 0px;
  section {
    display: flex;
    justify-content: space-around;
    width: 50%;
  }
  section h4 {
      margin-bottom:2rem;
  }
  section a {
    color: var(--neutral-white);
    text-decoration: none;
    display: block;
    opacity: .8;
    margin-bottom: .8rem;
  }
  section a:hover {
    text-decoration: underline;
  }
`;
