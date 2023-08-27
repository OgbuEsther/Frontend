import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import {AiOutlineMenu} from "react-icons/ai"

const Header = () =>{

    const [show , setShow ] = React.useState(false)

const toggle = () =>{
  setShow(!show) 
}
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
                    <Navs to = "/uploads">Upload</Navs>
                </NavLinks>

                <ButtonHold>
                    <Button1 to ="/signup">SignUp</Button1>
                    <Button2 to ="/signin">SignIn</Button2>
                </ButtonHold>

                <DivFour>
            <AiOutlineMenu onClick={toggle} />
          </DivFour>
    
            </Wrapper>
            {
        show ?     <DropDown /> : null
      }
          </Container>

        </div>
    )
}

export default Header

const DivFour = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    /* display: flex; */
    /* justify-content: flex-end;
    align-items: flex-end; */
  }
`

const Button2 = styled(Link)`

width: 120px;
height: 40px;
background-color: white;
color: black;
border: 1px solid black;
cursor: pointer;
font-weight: bold;
transition: all 350ms ease-in-out;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
`

const Button1 = styled(Link)`
margin-right: 10px;
width: 120px;
height: 40px;
background-color: black;
color: white;
text-decoration: none;
cursor: pointer;
font-weight: bold;
transition: all 350ms ease-in-out;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`

const ButtonHold = styled.div`
display: flex;
@media screen and (max-width: 500px) {
  display: none;
}

`

const Navs = styled(Link)`
color: black;
font-weight: bold;
text-decoration: none;
margin-right: 20px;

`

const NavLinks = styled.div`
@media screen and (max-width: 500px) {
  display: none;
}


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

    @media screen and (max-width: 500px) {
  display: flex;
  width: 90%;
}

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