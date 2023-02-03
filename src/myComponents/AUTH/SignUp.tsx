import React from "react";
import styled from "styled-components";

// import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Container>
        <Card>
          <Details>
            <LogoHold>{/* <img src={pic} alt="" /> */}</LogoHold>
            <Text>
              <h1>Create Account</h1>
            </Text>
            <InputHold>
              <input type="text" placeholder="Enter your name" />
              <br />
              <input type="email" placeholder="Enter your email" />
              <br />
              <input type="password" placeholder="Enter your password" />
            </InputHold>
            <BtnHold>
              <button>Next</button>
            </BtnHold>
          </Details>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;

const LogoHold = styled.div`
  text-align: left;
  background-color: pink;
`;

const Text = styled.div`
  margin-left: 1px;
`;

const InputHold = styled.div`
  flex-wrap: wrap;

  input {
    width: 250px;
    height: 30px;

    border-color: transparent;
    border-bottom: 1px solid black;

    margin-bottom: 20px;
    outline: 0;
  }
`;

const BtnHold = styled.div`
  button {
    width: 100px;
    height: 40px;
    background-color: black;
    color: white;
    font-weight: bold;
    transition: all 400ms ease-in-out;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 90px;

    :hover{
        background-color: #0000008d;
        border-radius: 20px;
    }
  }
`;

const Details = styled.div``;

const CardHold = styled.div``;

const Card = styled.div`
  width: 400px;
  height: 350px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  padding: 20px 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
