import React from "react";
import styled from "styled-components";

import axios from "axios";
import { useNavigate } from "react-router-dom";


const Uploads = () =>{
    const navigate = useNavigate();
const [name , setName] = React.useState("")
const [price, setPrice] = React.useState("")
const [image , setImage] = React.useState("")
const [preview , setPreview] = React.useState("")

const handleImage = (e: any) => {
    const file = e.target.files![0];
    console.log(file);
    const previewUrl = URL.createObjectURL(file);
e.preventDefault()
    setImage(file);
    setPreview(previewUrl);
    console.log(preview);
  };

const uploadData = async (e:any) => {
    e.preventDefault()
    console.log("Data Posted")
    
    const formData = new FormData();

    formData.append("image" , image);
    formData.append("price", price);
    formData.append("name", name);
  

    await axios
      .post(`https://beauty-q7ww.onrender.com/api/newgear`, formData)
      .then((res) => {
        console.log("this is new data :", res.data);
        alert("upload successfull");
        
        navigate("/");
      }).catch((error) => {
        console.log("error :", error);
      })
  };


    return (
        <div>
            <Container>
                <Wrapper>
                    <h1>Upload Products</h1>
                              
          <Circle>
            <Img src={preview} />
          </Circle>
                  
                  <Box onChange={handleImage} id= "pix" type="file" />
                  
          
                        
                    
                    <Button htmlFor = "pix">ADD IMAGE</Button>
                    <input value={name}   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value)}} type="text" placeholder="Enter name" />
                    <input value={price}   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPrice(e.target.value)}} type="text" placeholder="Enter price" />

               {name !== "" &&
          image !== "" &&
          price !== "" 
          ? (
            <Button2 onClick={uploadData} cp="pointer" bg="black">
              Submit
            </Button2>
          ) : (
            <Button2 cp="not-allowed" bg="silver">
              Submit
            </Button2>
          )}
                </Wrapper>
            </Container>
        </div>
    )
}

export default Uploads


const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;


`

const Circle = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 5px;

  background-color: #e6e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  flex-direction: column;
  font-size: 30px;
  margin-bottom: 20px;
  span {
    font-size: 12px;
  }
`;

const Button2 = styled.button<{ bg: string; cp: string }>`
  height: 40px;
  width: 150px;
  background-color: ${(props) => props.bg};
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  cursor: ${(props) => props.cp};
  margin-top: 10px;
  :hover {
    transform: scale(0.95);
  }
  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;


const Button = styled.label`
width: 150px;
height: 50px;
display: flex;
justify-content : center;
align-items: center;
margin-bottom: 30px;
border-radius: 30px;
background-color : black;
color: white;
border: none;
outline: none;


`

const Box = styled.input`
display: none;
    /* width: 200px;
    height: 300px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    background-color: red;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
border: none;
    font-size: 30px; */
`

const Wrapper = styled.form`
width: 300px;
/* height: 500px; */
margin-top: 70px;
box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 5px;
padding-bottom: 20px;

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