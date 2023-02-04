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
    
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `