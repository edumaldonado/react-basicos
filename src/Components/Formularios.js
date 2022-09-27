import React,{useState} from "react";

export default function Formularios(){
    const {nombre,setNombre} =useState("");

    return(
        <>
            <h2>Formularios</h2>
            <br/>
            <br/>
            <br/>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type ="text" id="nombre" name="nombre" value={nombre}  onChange={(e)=>setNombre(e.target.nombre)}/>
            </form>
        </>
    )
}