import React from "react";
import styled from "styled-components";
import one from "../../COMPONENTS/21.png"
import two from "../../COMPONENTS/31.png"
import three from "../../COMPONENTS/18.png"


const Display2 : React.FC =() =>{



    return(
        <div>
            <Container>
               <h1> WHAT YOU GET AS A CUSTOMER</h1>
               <p>Shop for stunning handbags, purses, head gears, head bands and auto-gele for daytime wear, evenings, work events and the much loved weekend.
</p>
                <Wrapper>
                    <Image>
                        <img src={one} alt="head gear" />
                        
                       
                        
                    </Image>
                  
                    <Image>
                        
                        
                    <img src={three} alt="head gear" />
                
                    </Image>
                    <Image>
                    <img src={two} alt="head gear" />
         
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
margin-bottom: 30px;
flex-direction: column;

h1{
    margin: 0;
      @media screen and (max-width: 500px) {
 width: 250px;

 
 font-size: 18px;
}
      @media screen and (max-width: 768px) {
 width: 500px;
 
 font-size: 20px;
}
      @media screen and (max-width: 500px) {
 width: 290px;
 
 font-size: 20px;
}
}

p{
    font-weight: 600;
    font-size: 16px;
    text-align: center;
}

`

const Wrapper = styled.div`
width: 80%;
/* height: 500px; */
/* background-color: #f4f4f4; */
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
display: grid;
grid-gap: 20px;

grid-template-columns: repeat(3, 1fr);

@media screen and (max-width: 500px) {
    width: 300px;
    grid-template-columns: repeat(1, 1fr);
    /* height: 500px;
 
background-color: red; */


    
}

`

const Image = styled.div`
width: 300px;
height: 300px;
background-color: rgb(244, 244, 244);



@media screen and (max-width: 500px) {
    width: 250px;
    height: 300px;
    /* background-color: yellow; */
    grid-gap: 0;
    margin-bottom: 1px;
}
@media screen and (max-width: 768px) {
    width: 230px;
    height: 300px;
    /* background-color: yellow; */
    grid-gap: 0;
    margin-bottom: 1px;
}




    


img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    
}

`