import React from "react";
import styled from "styled-components";
import pic from "../../COMPONENTS/twoo.png"
import pic2 from "../../COMPONENTS/20.png"
import pic3 from "../../COMPONENTS/three.png"

const Display :React.FC =() =>{
return (
    <div>
        <Container>
            <Wrapper>
<Hold>
<Texts>
<h4>STAND OUT</h4>
<h1>NEVER OUT OF STYLE,
<span>PASSION & FASHION</span></h1>
<p>head gears that are feather-light, that makes you feel <span>unique and good</span></p>
<button>SHOP NOW</button>
</Texts>
</Hold>
            </Wrapper>
        </Container>
    </div>
)
}

export default Display

const Hold = styled.div`
display: flex;
text-align: left;
margin-left: 30px;
z-index: 1111;

@media screen and (max-width: 500px) {
    z-index: 111;
width: 300px;
height: 400px;
background-color: #ffffff7a;
display: flex;
align-items: center;
margin-left: 20px;
}

`

const Texts = styled.div`
    z-index: 111;
  color: black;

  span{
    color: white;
  }
  
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background-color: black;
   color: white;
    cursor: pointer;
    font-weight: bold;
    transition: all ease-in-out 400ms;

    border-radius: 2px;
    border: 1px solid black;
transition: all 400ms ease-in-out;
    :hover{
        background-color: #0000005c;
        transform: scale(0.99);
    }
  }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    background-color: #f1f1f1;
    /* background-image: url(${pic}); */
    /* background-image: url(${pic2}); */
    background-image: url(${pic3});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
    backdrop-filter: blur(5px);
position: relative;
    ::before{
        content: "";
        width: 100%;
        height: 100%;
        background-color: #00000042;
        position: absolute;
        backdrop-filter: blur(5px);
    }
    `