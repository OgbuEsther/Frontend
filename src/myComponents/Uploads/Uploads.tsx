import React from "react";
import styled from "styled-components";
import {BiImageAdd} from "react-icons/bi"
import axios from "axios";


const Uploads = () =>{
const [name , setName] = React.useState()
const [price, setPrice] = React.useState()
    const upload = async()=>{
        await axios.post(`` , {name , price})
    }

    return (
        <div>
            <Container>
                <Wrapper>
                    <h1>Upload new looks</h1>
                    <Box>
                        <BiImageAdd/>
                    </Box>
                    <input type="text" placeholder="Enter name" />
                    <input type="text" placeholder="Enter price" />
                </Wrapper>
            </Container>
        </div>
    )
}

export default Uploads

const Box = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 30px;
`

const Wrapper = styled.form`
width: 300px;
height: 500px;
box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

input{
    width: 200px;
    height: 30px;
    margin-bottom: 20px;
    outline-color: gray;

}
    
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    `