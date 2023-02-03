import React from "react"
import styled from "styled-components"

const Footer = () =>{
return (
    <div>
        <Container>
            <Wrapper>
                <Logo>Beauty</Logo>
                <View>
                    <h3>catalogs</h3>
                </View>
                <Contact>
                    <h3>follow us on instagram</h3>
                </Contact>
                <Uploads>
                    <h3>upload</h3>
                </Uploads>
            </Wrapper>
        </Container>
    </div>
)
} 

export default Footer

const Container = styled.footer`
    background-color: black;
    color: white;
    width: 100%;
    height: 200px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;


    `

    const Wrapper = styled.div`
    display: flex;
    width: 80%;
    height: 200px;
    justify-content: space-between;
    align-items: center;

    
   
    `

    const View = styled.div``
    const Logo = styled.div``
    const Contact = styled.div``
    const Uploads = styled.div``    

    