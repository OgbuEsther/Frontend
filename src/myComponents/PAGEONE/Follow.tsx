import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic from "../../COMPONENTS/22.png"
import pic1 from "../../COMPONENTS/twoo.png"
import pic2 from "../../COMPONENTS/20.png"
import pic3 from "../../COMPONENTS/22.png"
import pic4 from "../../COMPONENTS/22.png"
import {BsWhatsapp ,BsFacebook ,BsInstagram} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
const Follow = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        cssEase : "ease-in-out"
  
        
      }; 

    return(
        <div>
            <Container>
                <Wrapper>
<h1>FOLLOW US ON INSTAGRAM</h1>
<pre>@yourinstagram</pre>
{/* <a href="https://www.instagram.com/yourinstagram"></a> */}

<Hold>
    <Image>
        <img src={pic} alt="" />
    </Image>
    <Image>
        <img src={pic} alt="" />
    </Image>
    <Image>
        <img src={pic} alt="" />
    </Image>
    <Image>
        <img src={pic} alt="" />
    </Image>
</Hold>
     

                </Wrapper>
                <Content>
                    <One>
                        <BsWhatsapp />
                        <pre>Order On Whatsapp</pre>
                        <a href="https://www.whatsapp.com/yourinstagram">send a direct message to us</a>
                    </One>
                    <Two>
                        <BsFacebook />
                        <pre>View Page On FaceBook</pre>
                        <a href="https://www.facebook.com/yourinstagram">visit our page on facebook</a>
                    </Two>
                    <Three>
                        <BsInstagram />
                        <pre>ONLINE SUPPORT</pre>
                        <a href="https://www.whatsapp.com/yourinstagram">Support 24 hours a day</a>
                    </Three>
                    <Four>
                        <AiOutlineMail />
                        <pre>SEND AN EMAIL</pre>
                        <a href="https://www.gmail.com/yourinstagram">send an email to us </a>
                    </Four>
                </Content>
            </Container>
        </div>
    )
}

export default Follow;

const Four = styled.div`
width: 300px;
height: 300px;
`

const Three = styled.div`
width: 300px;
height: 300px;
`

const Two = styled.div`
width: 300px;
height: 300px;
`

const One = styled.div`
width: 300px;
height: 300px;
`

const Content =styled.div`
display: flex;
`

const Container = styled.div`
width: 100%;
height: 400px;
background-color: white;

`

const Hold = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
`

const Wrapper = styled.div``

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