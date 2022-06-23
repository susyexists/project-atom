import styled from "styled-components";

// export function Button({ content }) {
//   return <StyledButton>{content}</StyledButton>;
// }

export const Button = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 2rem 0rem 2rem 0rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export const ConnectedButton = styled.button`
  background: linear-gradient(to right, green 0%, teal 50%, green 100%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 0.5rem 0rem 0rem 0rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
`;

export const NumberButton = styled.button`
  height: 3rem;
  width: 20%;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  display: flex;
  justify-content: center;
  font-size: 2rem;
  align-items: center;
  ${"" /* border-radius: 4rem; */}
  color: white;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  margin: 0 1rem 0 1rem;
`;

export const MintButton = styled.button`
  height: 3rem;
  width: 65%;
  background: red;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  ${"" /* font-size: 2rem; */}
  align-items: center;
  ${"" /* border-radius: 4rem; */}
  color: white;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  margin: 0 0 1rem 0;
`;

export const AmountButton = styled.button`
  height: 3rem;
  width: 65%;
  background: grey;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  align-items: center;
  color: white;
  border-radius: 0.5rem;
  border: none;
  margin: 0 0 1rem 0;
`;
