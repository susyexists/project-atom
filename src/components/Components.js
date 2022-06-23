import styled, { keyframes } from "styled-components";

export const Waiting = styled.div`
  background: rgba(50, 50, 50, 0.9);
  box-shadow: 50px 8px 32px 50px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  position: absolute;
  top: 10%;
  width: 80%;
  height: 80%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: black;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

export const Text1 = styled.h2`
  margin: 2.5rem 0 1rem 0;
`;

export const Text3 = styled.h3`
  margin: 1rem 0 1rem 0;
  color: purple;
  ${"" /* background: grey 1%; */}
`;

export const AtomText = styled.h3`
  margin: 3rem 0 2rem 0;
  font-size: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 2rem 0;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 0rem 0 rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0 0rem 0;
  width: 80%;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 90vh;
  }
`;
