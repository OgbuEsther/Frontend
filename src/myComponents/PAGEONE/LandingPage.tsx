import React from "react";
import Display from "./Display";

import Display2 from "./Display2";
import Follow from "./Follow";
import Hero from "./Hero";


const LandingPage :React.FC =() =>{
return (
    <div>
        <Hero />
        <Display2 />
        <Display />
      <Follow />
    </div>
)
}

export default LandingPage