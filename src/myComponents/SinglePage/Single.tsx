import React from "react"
import styled from "styled-components"

const Single = () =>{
    return(
        <div>
           <Container>
            <Row>
                <Col>
                    <h1>Single Page</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>This is a single page</p>
                </Col>
            </Row>
            <Row></Row>
           </Container>
        </div>
    )
}
export default Single


const Col = styled.div``

const Row = styled.div``

const Container = styled.div`
    background-color: aliceblue;
    width: 100%;
    height: 100vh;
    `