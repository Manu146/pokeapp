import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 80%;
  min-height: 70vh;
  flex-direction: column;
  gap: 2rem;
  margin: 5rem auto 0 auto;
  border-radius: 1rem;
  background-color: #28293d;
  box-shadow: 0 20px 20px #14141b, 0px 0px 50px #14141b;
  padding: 1.5rem;
  color: white;
  & > div {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
    gap: 2rem;
    max-width: 768px;
    flex-direction: row;
    & > div {
      width: 50%;
    }
    & > div:last-child {
      position: relative;
    }
  }
`;
