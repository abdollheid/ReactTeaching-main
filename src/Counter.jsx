import { useState } from "react";

export default function Counter() {
    const [newRes, setNewRes] = useState(0);
    return <>
        {/* <h1>{res}</h1> */}
        <h1>{newRes}</h1>
        <button onClick={() => {
        //    res = res + 1;
            setNewRes(newRes  + 1 )
           console.log(res);
        }}>increment</button>

        <button onClick={()=>{
            setNewRes(newRes - 1);
        }}>decrement</button>
    </>;
}
// challenge make two new button, 
// one button named multiply by two 
// and other named divide by Two

// one button named multiply by five 
// and other named divide by five

// one button named multiply by ten 
// and other named divide by ten