import React from 'react';
import styled from 'styled-components';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import {  FiFacebook } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTwitter } from "react-icons/tb";
import {BiLocationPlus} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import { Link } from 'react-router-dom';
import {FaFacebook, FaTwitter, FaGithub, FaInstagram, FaYoutube} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";

function AndelaFooter() {
  return (
    <Container>
      <Wrapper>
      <FirstDiv>
                <Logo>Beauty</Logo>
                <Icons>
                    <FaFacebook />
                    <FaTwitter />
                  
                    <FaInstagram />
                   
                    
                </Icons>
            </FirstDiv>

            <SecondDiv>
                  <Box>
                      <h4>LINKS</h4>

                      <Nav>Catalog</Nav>

                      <Nav>Contact</Nav>

                      <Nav>Uploads</Nav>
                  </Box>

                  <Box>
              <h3>Contact Info</h3>
              <Div>
                <BiLocationPlus />
                <Nav1>17,college road</Nav1>
              </Div>
              <Div>
                <MdEmail />
                <Nav1>ogbuuzoma413@gmail.com</Nav1>
              </Div>
              <Div>
                <BsFillTelephoneFill />
                <Nav1>09078544231</Nav1>
              </Div>
          </Box>

              
            </SecondDiv>
      </Wrapper>
    </Container>
    )
}

export default AndelaFooter;


const Div = styled.div`
display: flex;
margin-left: 50px;

`

const Nav1 = styled.div`
    font-size :20px;
    margin-bottom: 15px;
    color: black;
    font-weight: bold;
    margin-left: 30px;
    transition: all 400ms;
    :hover{
        text-decoration: underline;
     
        transform: scale(0.99);
    }
`

const Nav = styled.div`
   padding-bottom: 20px;
    font-size: 20px;
    color: black;
    cursor: pointer;
    transition: all 400ms;
    font-weight  :bold   ;
    transition: all 400ms;
    :hover{
        text-decoration: underline;
       
        transform: scale(0.99);
    }
`;
const Box = styled.div`
/* display: flex;
flex-direction: column; */
div{
  /* display: flex; */
  /* margin-left: 15px; */
}

`;

const Container = styled.div`
  width: 100%;
  /* height: 50vh; */
  background-color: darkgray;

`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    margin-top: 30px;
    flex-wrap: wrap;
    color: black;

    @media screen and (max-width: 425px) {
        padding: 0;
    }
`;
const FirstDiv = styled.div`
    width : 200px;
    margin-top: 50px; 
`;
const SecondDiv = styled.div`
    width : 65%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
`;
const Logo = styled.h1`

`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: black;
    margin-top: 50px;
   font-size: 30px;
`;
