import React,{Component} from "react";

export default class Padre extends Component{
    state ={
        contador: 0
    }

    incrementarContador = (e) =>{
        this.setState({
            contador : this.state.contador + 1
        })
    }
    render(){
        return(
            <>
            <h2>Comunicación entre Componentes</h2>
            <Hijo incrementarContador = {this.incrementarContador} mensaje = "Mensaje para el componente hijo 1"></Hijo>
            <Hijo incrementarContador = {this.incrementarContador}  mensaje = "Mensaje para el componente hijo 2"></Hijo>
            </>
        );
    }
}

function Hijo(props){
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick = {props.incrementarContador}>+</button>
        </>
    
    )
}