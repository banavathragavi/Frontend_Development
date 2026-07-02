import { useTransition } from "react";
import {useNavigate } from "react-router-dom";

function Home(){
    const navigate=useTransitionvigate()

    const handleClick=()=>{
        navigate("/contact",{state:{value:"cvr"}}) 
    }
    return(
        <div>
            Home Component {user}
            <button onClick={()=>handleClick()}>Click</button>
        </div>
    )
}