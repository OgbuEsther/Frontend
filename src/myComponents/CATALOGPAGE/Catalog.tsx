import React from "react";
import styled from "styled-components";
import pic from "../../COMPONENTS/30.png"
import axios from "axios"
import { useNavigate ,Link, useParams } from "react-router-dom";
import {AiFillDelete} from "react-icons/ai"
interface gears {
    name: string;
    _id : string;
    image : string;
    price : string;
    status : boolean
   
}

const Catalog = () =>{
    const [userData , setUserData] = React.useState<gears[]>([])
const {id} = useParams()
  
const remove = async() =>{
    await axios.delete(`https://beauty-q7ww.onrender.com/api/remove/${id}`).then((res)=>{
        console.log(res.data)
    })
}
 
    const fetchData = async() =>{
        await axios.get("https://beauty-q7ww.onrender.com/api/getall").then((res) =>{
            console.log(res.data.data)
            setUserData(res.data.data)

            
        })
    }

    React.useEffect(()=>{
        fetchData()
        
    },[])

    const removing = async(id :any) =>{
        userData.filter((el) => el._id === id)
        }
     
    return (
        <div>
           
           <Container>
     {
        userData.map((props)=>(
            <Wrapper   key={props._id}>
               <Icon>
               <AiFillDelete onClick={()=>{
                console.log("deleted")
                axios.delete(`https://beauty-q7ww.onrender.com/api/remove/${props._id}`).then((res)=>{
                    console.log(res.data)
                    window.location.reload()
                    
                })
               }} />
               </Icon>
            <CardHold>
            <img src={props.image} alt="" />
            </CardHold>
            <TitleHold to={`/gears/${props._id}/details`}>
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

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    font-size: 50px;
    position: absolute;
    z-index: 111;
    /* top: 20px; */
/* background-color: red; */
    :hover{
     opacity: 1;
    }
`

const Title = styled.div`
text-align: left;
`

const TitleHold = styled(Link)`
text-decoration: none;
color: black;
width: 300px;
height: 20%;
/* background-color: blue; */
`
const CardHold = styled.div`
width: 300px;
height: 400px;
background-color: #03030321;
position: relative;
box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1);
/* background-color: blue; */

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const Wrapper = styled.div`
width: 300px;
height: 500px;
text-decoration: none;
color: black;
margin: 20px;
/* background-color: red; */
/* background-color: darkgray; */
box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1);

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