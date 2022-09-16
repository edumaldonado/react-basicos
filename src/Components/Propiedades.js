import React from "react";
export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + ' - ' + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(", ") }</li>
                <li>{props.elementoRact}</li>
                <li>{props.componenteRact}</li>
            </ul>
        </div>
    );
}

Propiedades.defaulProps={
    porDefecto :"Las Props",
};
/* Propiedades.propTypes={         // para que funcione correr : npm i -s prop-types
    numero:PropTypes.number,
}; */