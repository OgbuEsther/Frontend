import React from "react";
import styled from "styled-components";
import pic from "../../COMPONENTS/30.png"
import axios from "axios"

interface gears {
    name: string;
    _id : string;
    image : string;
    price : string;
    status : boolean
   
}

const Catalog = () =>{
    const [userData , setUserData] = React.useState<gears[]>([])

    const fetchData = async() =>{
        await axios.get("https://beauty-q7ww.onrender.com/api/getall").then((res) =>{
            console.log(res.data.data)
            setUserData(res.data.data)
        })
    }

    React.useEffect(()=>{
        fetchData()
    })
    return (
        <div>
           
           <Container>
     {
        userData.map((props)=>(
            <Wrapper key={props._id}>
            <CardHold>
            <img src={props.image} alt="" />
            </CardHold>
            <TitleHold>
                <Title><h5> Name: {props.name}</h5>
                <h3>price :{props.price} </h3>
                </Title>
            </TitleHold>
                        </Wrapper>
        ))
     }
           </Container>
        </div>
    )
}
export default Catalog;

const Title = styled.div`
text-align: left;
`

const TitleHold = styled.div`
width: 300px;
height: 20%;
/* background-color: blue; */
`
const CardHold = styled.div`
width: 300px;
height: 300px;
background-color: darkgray;
/* background-color: blue; */

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const Wrapper = styled.div`
width: 300px;
/* height: 400px; */
margin: 20px;
/* background-color: red; */
/* background-color: darkgray; */

`

const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

width: 100%;
/* height: 400px; */
/* background-color: yellow; */
    
`