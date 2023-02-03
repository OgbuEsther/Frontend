import React from "react";
import styled from "styled-components";
import pic from "../../COMPONENTS/21.png"
import { Link } from "react-router-dom";

const Hero2 = () =>{
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
                    <Button1 to ="/signup">SignUp</Button1>
                    <Button2 to ="/signin">SignIn</Button2>
                </ButtonHold>

                {/* <DivFour>
            <AiOutlineMenu onClick={toggle} />
          </DivFour>
      {
        show ?     <DropDown /> : null
      } */}
            </Wrapper>

          </Container>
            <Container1>
                <Wrapper1>
<img src={pic} alt="" />
                </Wrapper1>
            </Container1>
        </div>
    )
}
export default Hero2;
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
height: 30px;
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
height: 30px;
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
  width: 100%;
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

const Wrapper1 = styled.div`
    width: 100%;
height: 500px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    `

const Container1 = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
  background-color: #0000004b;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    `