import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Header = () =>{
    return (
        <div>
          <Container>
            <Wrapper>
                <Logo>
                    <h1>Beauty</h1>
                </Logo>
                <NavLinks>
                    <Navs to = "/home">Home</Navs>
                    <Navs to = "/catalog">Catalog</Navs>
                    <Navs to = "/contact">Contact</Navs>
                    <Navs to = "/upload">Upload</Navs>
                </NavLinks>

                <ButtonHold>
                    <Button1>SignUp</Button1>
                    <Button2>SignIn</Button2>
                </ButtonHold>
            </Wrapper>

          </Container>

        </div>
    )
}

export default Header
const Button2 = styled.button`

width: 120px;
height: 30px;
background-color: white;
color: black;
border: 1px solid black;
cursor: pointer;
font-weight: bold;
transition: all 350ms ease-in-out;
border-radius: 10px;
`

const Button1 = styled.button`
margin-right: 10px;
width: 120px;
height: 30px;
background-color: black;
color: white;
cursor: pointer;
font-weight: bold;
transition: all 350ms ease-in-out;
border-radius: 10px;
`

const ButtonHold = styled.div`

`

const Navs = styled(Link)`
color: black;
font-weight: bold;
text-decoration: none;
margin-right: 20px;

`

const NavLinks = styled.div`


`
const Logo = styled.div`
    
`

const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    
    width: 100%;
    height: 70px;
    position: fixed;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
    z-index: 99999;

`