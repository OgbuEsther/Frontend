import React from "react";
import styled from "styled-components";
import one from "../../COMPONENTS/21.png"
import two from "../../COMPONENTS/22.png"
import three from "../../COMPONENTS/23.png"


const Display2 : React.FC =() =>{



    return(
        <div>
            <Container>
               <h1> WHAT YOU GET AS A CUSTOMER</h1>
                <Wrapper>
                    <Image>
                        <img src={one} alt="head gear" />
                        <p>lorem</p>

                       
                        
                    </Image>
                  
                    <Image>
                        
                        
                    <img src={three} alt="head gear" />
                    <p>lorem</p>

                    </Image>
                    <Image>
                    <img src={two} alt="head gear" />
                  <p>lorem</p>

                    </Image>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Display2




const Container = styled.div`
width: 100%;
/* height: 500px; */
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
      @media screen and (max-width: 500px) {
 width: 300px;
 font-size: 20px;
}
}

`

const Wrapper = styled.div`
width: 80%;
height: 500px;
/* background-color: #f4f4f4; */
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
display: grid;
grid-gap: 20px;

grid-template-columns: repeat(3 , 1fr);

@media screen and (max-width: 500px) {
    width: 300px;
    grid-gap: 0;
    grid-template-columns: 1fr ;
    grid-template-rows: 1fr , 1fr;
}

`

const Image = styled.div`
width: 300px;
height: 300px;
background-color: rgb(244, 244, 244);
position: relative;


@media screen and (max-width: 500px) {
    width: 300px;
    grid-gap: 0;
    margin-bottom: 1px;
}

p{
    transition: all 0.5s ease-in-out;
    /* transform: translateY(100px); */
    width: 100%;
    height: 100%;
    z-index: 1;
  
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    /* bottom: 100%; */
    left: 0;
    align-items: center;
    display: flex;
    opacity: 0;
    cursor: pointer;
backdrop-filter: blur(5px);
    :hover{
      opacity: 1;
    }
    @media screen and (max-width: 500px) {
   display: none;
}

}


    


img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    
}

`