import React from 'react';
import styled from 'styled-components';

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
                    <FaGithub />
                    <FaInstagram />
                    <FaYoutube />
                    <BsLinkedin />
                </Icons>
            </FirstDiv>

            <SecondDiv>
                  <Box>
                      <h6>Socials</h6>

                      <Nav>Facebook</Nav>

                      <Nav>Instagram</Nav>

                      <Nav>Whatsapp</Nav>
                  </Box>

                  <Box>
                      <h6>Catalog</h6>

                      <Nav>View All Designs</Nav>

                      <Nav>Upload </Nav>

                      <Nav>View One </Nav>

                      <Nav>Resources</Nav>
                  </Box>

              
            </SecondDiv>
      </Wrapper>
    </Container>
    )
}

export default AndelaFooter;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #141414c5;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    margin-top: 30px;
    flex-wrap: wrap;
    color: white;

    @media screen and (max-width: 425px) {
        padding: 0;
    }
`;
const FirstDiv = styled.div`
    width : 300px;
    margin-top: 50px; 
`;
const SecondDiv = styled.div`
    width : 65%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
`;
const Logo = styled.h1`

`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: white;
    margin-top: 50px;
   size: 150px;
`;
const Box = styled.div`
h6{
  font-weight: 900;
}

`;
const Nav = styled.div`
    padding-bottom: 20px;
    font-size: 12px;
    transition: all 350ms;

    :hover{ 
        cursor: pointer;
        text-decoration: underline;
    }
`;