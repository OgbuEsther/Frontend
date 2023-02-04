
import React from "react";
import styled from "styled-components";
import two from "../../COMPONENTS/22.png"
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div>
      <Holder>
      {/* <HeaderT /> */}
      <Container>
        <Wrapper>
          <DivOne>
            <TextHold>
              <TextOne>
             <span> You Think it</span> <br /> We Make it
              </TextOne>
              <Des>
              We have a collection of the best head gears and hand bags for you. 
              What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language.
              </Des>
            </TextHold>
            <button>
              <P to = "/catalog">Shop Now</P>
            </button>
          </DivOne>
          <DivTwo>
            <Bg src={two} />
            {/* <img src={two} alt="head gear" /> */}
          </DivTwo>
        </Wrapper>
      </Container>
      </Holder>

    </div>
  );
};

export default Hero;

const P = styled(Link)`
text-decoration : none;
display: flex;
justify-content: center ;
justify-content: center;

color: #494747;
    cursor: pointer;
    :hover{
      color: white;
    }
   
`

const Holder = styled.div`
    width: 100%;

  background-color: #F9F9F9;
`



const Bg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    
  }
`;

const TextHold = styled.div`
  text-align: left;
  z-index: 1;
  width: 400px;
  margin-top: -20px;
  @media screen and (max-width: 500px) {
 width: 300px;
}
`;

const TextOne = styled.h1`
  color: black;
  font-size: 54px;
  font-weight: 700;
  margin: 0;
  z-index: 1;

  span{
    font-size: 34px;
  }


  @media screen and (max-width: 500px) {
 width: 300px;
}
`;
const Des = styled.p`
  width: 450px;
  font-size: 18px;
  color: black;

  @media screen and (max-width: 425px) {
    width: 300px;
   
  }
`;

const DivOne = styled.div`
color: black;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background-color: white;
 
    color : black;
    cursor: pointer;
    font-weight: bold;
    transition: all ease-in-out 400ms;

    border-radius: 10px;
    border: 1px solid black;
transition: all 400ms ease-in-out;
    :hover{
        background-color: black;
        transform: scale(0.99);
        color: white;
    }

    /* color: black; */
  }
`;

const DivTwo = styled.div`

  width: 450px;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
margin-top: 35px;
  @media screen and (max-width: 960px) {
    width: 270px;
    height: 200px;
   
  }
`;

const Wrapper = styled.div`
  width: 80%;
  /* height: 500px; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 40px;
  /* padding-bottom: 30px; */

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  /* padding-top: 40px; */
`;
