import { cleanup } from '@testing-library/react';
import React,{useState,useEffect} from 'react';

export default function ScrollHooks (props){
    const[scrollY,setScrollY] = useState(0);
    useEffect(()=>{
        console.log("Moviendo Scroll");

        const detectarScroll = ()=> setScrollY(window.pageYOffset)
        window.addEventListener("scroll",detectarScroll);
        return()=>{window.removeEventListener("scroll",detectarScroll)}   // (return)esta linea ejecuta el código en la fase de desmontaje
    },[scrollY]);       //este useEffect se va a ejecutar cuando la variable scrollY se actualice
    useEffect(()=>{
        console.log("Fase de Montaje");
    },[]);              //para que el useEffect se ejecute solo en la fase de montaje usar lista de dependencias vacia

    useEffect(()=>{
        console.log("Fase de actualizacion");
    });   
    useEffect(()=>{
        return()=>{      // (return)esta linea ejecuta el código en la fase de desmontaje
            console.log("Fase de desmontaje");

        }
    });               
    return(
        <>
        <h2> Hoock - useEffect y el Ciclo de Vida</h2>
        <p>Scroll Y del navegador: {scrollY}px</p>
        </>
    )
}