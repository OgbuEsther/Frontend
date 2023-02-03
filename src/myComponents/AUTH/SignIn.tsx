import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  return (
    <div>
      <Container>
        <Card>
          <Details>
            <LogoHold>{/* <img src={pic} alt="" /> */}</LogoHold>
            <Text>
              <h1>Sign in </h1>
            </Text>
            <InputHold>
              <br />
              <input type="email" placeholder="Enter your email" />
              <br />
              <br />
              <input type="password" placeholder="Enter your password" />
              <br />
            </InputHold>
            <BtnHold>
              <Button>Back</Button>
              <Button1>Next</Button1>
            </BtnHold>
          </Details>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: darkgray;
  color: black;
  font-weight: bold;
  border: 0;
  margin-right: 5px;
`;
const Button1 = styled.button`
  width: 100px;
  height: 40px;
  background-color: #252424;
  color: white;
  font-weight: bold;
  border: 0;
`;

const LogoHold = styled.div`
  text-align: left;
`;

const Text = styled.div`
  text-align: left;
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
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Details = styled.div``;

const Card = styled.div`
  width: 400px;
  height: 350px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  border: none;
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
