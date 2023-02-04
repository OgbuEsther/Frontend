import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic from "../../COMPONENTS/22.png"
import pic1 from "../../COMPONENTS/twoo.png"
import pic2 from "../../COMPONENTS/20.png"
import pic3 from "../../COMPONENTS/22.png"
import pic4 from "../../COMPONENTS/24.png"
import {BsWhatsapp ,BsFacebook ,BsInstagram} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
const Follow = ()=>{

    

    return(
        <div>
            <Container>
               <Holder>
               <Wrapper>
<h1>FOLLOW US ON INSTAGRAM</h1>
<pre>@yourinstagram</pre>
{/* <a href="https://www.instagram.com/yourinstagram"></a> */}

<Hold>
    <Image>
        <img src={pic} alt="" />
    </Image>
    <Image>
        <img src={pic1} alt="" />
    </Image>
    <Image>
        <img src={pic2} alt="" />
    </Image>
    <Image>
        <img src={pic4} alt="" />
    </Image>
</Hold>
     

                </Wrapper>
                <Content>
                    <One>
                       <Icn> <BsWhatsapp /></Icn>
                     <Texts>
                     <pre>Order On Whatsapp</pre>
                        <a href="https://www.whatsapp.com/yourinstagram">send a direct message to us</a>
                     </Texts>

                    </One>
                    <Two>
                      <Icn>  <BsFacebook /></Icn>

                       <Texts>
                       <pre>View Page On FaceBook</pre>
                        <a href="https://www.facebook.com/yourinstagram">visit our page on facebook</a>
                       </Texts>


                    </Two>
                    <Three>
                        <Icn>
                        <BsInstagram /></Icn>

                      <Texts>
                      <pre>ONLINE SUPPORT</pre>
                        <a href="https://www.whatsapp.com/yourinstagram">Support 24 hours a day</a>
                      </Texts>

                    </Three>
                    <Four>
                        <Icn><AiOutlineMail /></Icn>
                       <Texts>
                       <pre>SEND AN EMAIL</pre>
                        <a href="https://www.gmail.com/yourinstagram">send an email to us </a>
                       </Texts>
                    </Four>
                </Content>
               </Holder>
            </Container>
        </div>
    )
}

export default Follow;

const Holder = styled.div`
/* background-color: yellow; */
width: 100%;
`
const Texts = styled.div``

const Icn = styled.div`
    font-size: 40px;
    color: black;
    margin-top : 10px;
    /* margin-right: 5px; */
    margin-left: 10px;
`

const Four = styled.div`
width: 300px;
height: 300px;
display: flex;

a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 500px) {
    
    width: 300px;
    height: 100px;
}
`

const Three = styled.div`
width: 300px;
height: 300px;
display: flex;
a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 500px) {
    
    width: 300px;
    height: 100px;
}
`

const Two = styled.div`
width: 300px;
height: 300px;
display: flex;
a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 500px) {
    
    width: 300px;
    height: 100px;
}

`

const One = styled.div`
width: 300px;
height: 300px;
display: flex;
a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width: 500px) {
    
    width: 300px;
    height: 100px;
}

`

const Content =styled.div`
width: 100%;
/* height: 100%; */
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
flex-wrap: wrap;
@media screen and (max-width: 500px) {
    
    width: 500px;
    
}
`

const Container = styled.div`
width: 100%;
/* height: 400px; */
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const Hold = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
 margin: 20px;
`

const Wrapper = styled.div`
/* display: flex; */
`

const Image = styled.div`
width: 300px;
height: 300px;
background-color: #F2F2F2;


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

`