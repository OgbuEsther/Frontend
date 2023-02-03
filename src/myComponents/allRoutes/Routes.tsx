import React from "react";
import { useRoutes } from "react-router-dom";
import SignIn from "../AUTH/SignIn";
import SignUp from "../AUTH/SignUp";
import ViewScreen from "../CATALOGPAGE/ViewScreen";
import Contact from "../CONTACT/Contact";
import LandingPage from "../PAGEONE/LandingPage";
import Uploads from "../Uploads/Uploads";


const Routes :React.FC = ()=>{
    let elements = useRoutes([
        { path:"/home",element : <LandingPage />},
        {path : "/" , element : <LandingPage />},
        {path : "/catalog" ,element : <ViewScreen /> },
        {path : "/contact" ,element : <Contact /> },
        {path : "/signin" , element : <SignIn />},
        {path : "/signup" , element : <SignUp />},
        {path : "/uploads" , element : <Uploads />}
    ])
return (
<div>{elements} </div>
)
}

export default Routes