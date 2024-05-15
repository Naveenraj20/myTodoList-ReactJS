import { useState } from "react";
import style from "./content.module.css"

export default function Content(){
    const [text,setText] = useState("white")
    const [invert,setInvert] = useState("black")

    function handleClick(){
        invert==="black"?setInvert("white"):setInvert("black")        
    }

    return <main>
        <div className={style.elements}>
            <div className={style.clrDisplay} style={{background:text,color: invert}}>{text.length==0?("Enter Color in below input box"):(text)}</div>
            <div className={style.innerDiv}>
                <input type="text" onChange={(e)=>(setText(e.target.value))} className={style.inputBlock} placeholder="Add color name..."/>
            </div>
            <button className={style.btn3} onClick={handleClick} >Toggle text color</button>
        </div>
    </main>
}