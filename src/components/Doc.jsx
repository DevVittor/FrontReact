import { useState } from "react";

export default function Doc(){
    const [info,setInfo] = useState(false);

    return(
        <>
            {info && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, voluptatum.</p>}
            <button onClick={()=>setInfo(!info)}>Clicar</button>
        </>
    )

}