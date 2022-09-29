import React from "react";
import "./Estilos.css"
import moduleStyles from  "./Estilos.module.css"

export default function Estilos(){
    let myStyles={
        borderRadius: ".5rem",
        margin:"2rem auto",
        maxWidth: "50%"
    };
    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>   
            <h3 className ="bg_react">Estilo en hoja CSS externa</h3>     
            <h3 className ="bg_react" style={{borderRadius:".25rem", margin : "1rem"}}>Estilo en linea(atributo Style)</h3>     
            <h3 className ="bg_react" style={myStyles} >Estilo en linea con variable creada e Interpolada</h3>     
            <h3 className ="bg_react">
                Agregando Normalize
                <br/>
                <code>@import-normalize;</code>    
            </h3>   
            <h3 className={moduleStyles.error}>Estilos con Módulos</h3>  
            <h3 className={moduleStyles.success}>Estilos con Módulos(hay que agregar @import-normalize; en index.css)</h3>  
        </section>

    )
}