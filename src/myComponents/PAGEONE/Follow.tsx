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
{/* <h1>FOLLOW US ON INSTAGRAM</h1>
<pre>@yourinstagram</pre> */}
{/* <a href="https://www.instagram.com/yourinstagram"></a> */}

<Slider {...settings}>
          <Div>
           <img src={pic} alt="" />
          </Div>
          <Div>
          <img src={pic1} alt="" />
          </Div>
          <Div>
          <img src={pic2} alt="" />
          </Div>
          <Div>
          <img src={pic3} alt="" />
          </Div>
          <Div>
          <img src={pic4} alt="" />
          </Div>
          <Div>
          <img src={pic} alt="" />
          </Div>
        </Slider>
     

                </Wrapper>
            </Container>
        </div>
    )
}

export default Follow;

const Div = styled.div`
 display: flex;
 /* justify-content: center;
 align-items: center; */
    width: 300px;
    height: 400px;
    /* background-color: yellowgreen; */
    margin: 20px;
   
    overflow: hidden;
    /* position: relative; */

    img{
        width: 70%;
        height: 70%;
        object-fit: cover;
       

    }
`



const Wrapper = styled.div`
width: 100%;
/* height: 500px; */
/* background-color: red; */



`

const Container = styled.div`
    display: flex;
    width: 100%;
  /* height: 500px; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    overflow: hidden;
    `