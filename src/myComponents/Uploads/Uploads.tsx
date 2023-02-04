import React from "react";
import styled from "styled-components";
import {BiImageAdd} from "react-icons/bi"


const Uploads = () =>{
    return (
        <div>
            <Container>
                <Wrapper>
                    <h1>Uploads</h1>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Uploads

const Wrapper = styled.div`
width: 300px;
height: 300px;
box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.5);
    
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    `