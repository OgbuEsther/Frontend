import React from "react";
import styled from "styled-components";
import pic from "../../COMPONENTS/21.png"

const Hero2 = () =>{
    return (
        <div>
            <Container>
                <Wrapper>
<img src={pic} alt="" />
<Shop>
    <h1>View Our Catalog Below</h1>
</Shop>
                </Wrapper>
            </Container>
        </div>
    )
}
export default Hero2;

const Shop = styled.div`
position: absolute;
top: 80%;
`

const Wrapper = styled.div`
    width: 100%;
height: 500px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    `

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
  background-color: #0000004b;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    ::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0000004b;
    }

    `