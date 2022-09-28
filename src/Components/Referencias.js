import React,{useRef} from "react";

export default function Referencias(){
let refMenu = useRef(),
    refMenuBtn = useRef();
    console.log(refMenuBtn);
const handleToggleMenu = (e)=>{

    if(refMenuBtn.current.textContent ==="menu"){
        refMenuBtn.current.textContent ="Cerrar";
        refMenu.current.style.display= "block"
    }
    else{
        refMenuBtn.current.textContent ="menu";
        refMenu.current.style.display= "none"        
    }    

}  
return(
    <>
    <h2>Referencias</h2>
    <button ref={refMenuBtn} onClick={handleToggleMenu} > Menú</button>
    <nav  ref={refMenu} display = {{display:"none"}}>
        <a href="#">Sección 1</a>
        <br/>
        <a href="#">Sección 2</a>
        <br/>
        <a href="#">Sección 3</a>
        <br/>
        <a href="#">Sección 4</a>
        <br/>
        <a href="#">Sección 5</a>
        <br/>
    </nav>
    </>
)
}


/************************ ESTA ES LA FORMA NO RECOMENDADA****************** */
/*
import React from "react";

export default function Referencias(){
const handleToggleMenu = (e)=>{
    const $menu  = document.getElementById("menu");
    if(e.target.textContent ==="menu"){
        e.target.textContent ="Cerrar";
        $menu.style.display= "block"
    }
    else{
        e.target.textContent ="menu";
        $menu.style.display= "none"        
    }
}  
return(
    <>
    <h2>Referencias</h2>
    <button id="menu-btn" onClick={handleToggleMenu} > Menú</button>
    <nav id = "menu" display = {{display:"none"}}>
        <a href="#">Sección 1</a>
        <br/>
        <a href="#">Sección 2</a>
        <br/>
        <a href="#">Sección 3</a>
        <br/>
        <a href="#">Sección 4</a>
        <br/>
        <a href="#">Sección 5</a>
        <br/>
    </nav>
    </>
)
}
*/