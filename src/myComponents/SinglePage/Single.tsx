import axios from "axios";
import React from "react"
import { useParams } from "react-router-dom";

import styled from "styled-components"


interface gears {
    name: string;
    _id : string;
    image : string;
    price : string;
    status : boolean
   
}

const Single = () =>{
    const [userData , setUserData] = React.useState<gears>()
    const { id } = useParams();
    const remove = async() =>{
        await axios.delete(`https://beauty-q7ww.onrender.com/api/remove/${id}`).then((res)=>{
            console.log(res.data)
        })
    }
    const fetchData = async() =>{
        await axios.get(`https://beauty-q7ww.onrender.com/api/getone/${id}`).then((res) =>{
            // console.log(res.data.data)
            setUserData(res.data.data)

            
        })
    }

    React.useEffect(()=>{
        fetchData()
        
    },[])
    return(
        <div>
           <Container>
            <Row>
                <Col>
                    <img src={userData?.image} alt="" />
                    <h1>price : {userData?.price}</h1>
                </Col>
            </Row>
            
           
           </Container>
        </div>
    )
}
export default Single


const Col = styled.div`
width: 100%;
/* height: 100vh; */
`

const Row = styled.div``

const Container = styled.div`
    background-color: aliceblue;
    width: 100%;
    /* height: 100vh; */
    `