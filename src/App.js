import { useState } from "react";
import { handleMint, readSupply } from "./Contract.js";
import { handleDecrement, handleIncrement, connectAccount } from "./Utils.js";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  MainContainer,
  Text1,
  Text3,
  InputContainer,
  ButtonContainer,
  HorizontalRule,
  IconsContainer,
  Waiting,
  Spinner,
  AtomText,
} from "./components/Components";
import {
  Button,
  NumberButton,
  MintButton,
  ConnectedButton,
  AmountButton,
} from "./components/Button.js";
import {
  Icon,
  FacebookBackground,
  TwitterBackground,
  InstagramBackground,
} from "./components/Icon.js";
import { Input } from "./components/Input.js";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [maxSupply, setMaxSupply] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);
  const [status, setStatus] = useState(true);

  readSupply(maxSupply, setMaxSupply, totalSupply, setTotalSupply);

  return (
    <MainContainer>
      <AtomText>project atom</AtomText>
      {isConnected ? (
        <ButtonContainer>
          <ConnectedButton>Connected</ConnectedButton>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Text3>Please connect to mint</Text3>
          <Button
            type="button"
            onClick={() => connectAccount(accounts, setAccounts)}
          >
            Connect with a wallet
          </Button>
        </ButtonContainer>
      )}

      {isConnected ? (
        <ButtonContainer>
          <InputContainer>
            <NumberButton
              type="button"
              onClick={() => handleDecrement(mintAmount, setMintAmount)}
            >
              -
            </NumberButton>
            <Input readOnly={true} placeholder={mintAmount} />
            <NumberButton
              type="button"
              onClick={() => handleIncrement(mintAmount, setMintAmount)}
            >
              +
            </NumberButton>
          </InputContainer>
          <ButtonContainer>
            <AmountButton>Total Price: {mintAmount * 0.02} ETH</AmountButton>
            <MintButton
              type="button"
              onClick={() => handleMint(mintAmount, status, setStatus)}
            >
              Mint
            </MintButton>
          </ButtonContainer>
        </ButtonContainer>
      ) : (
        <div></div>
      )}

      <ButtonContainer>
        <ConnectedButton>
          Market Status : {totalSupply} / {maxSupply}
        </ConnectedButton>
      </ButtonContainer>
      <ButtonContainer>
        <ConnectedButton>Mint Status : Open</ConnectedButton>
      </ButtonContainer>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      {status ? (
        <div></div>
      ) : (
        <Waiting>
          <Spinner></Spinner>
          <Text1>Please wait</Text1>
          <Text3>Processing...</Text3>
        </Waiting>
      )}
    </MainContainer>
  );
}

export default App;
