import React,{Component} from 'react';   // {Componente} es la estructuración para no tener que invovar así: React.Component


const Componente = props => <h2>{props.msg}</h2>

/* function Componente(props){
    return <h2>{props.msg}</h2>
}
 */
/*  class Componente extends Component{        // componente basado en clases
        render(){
            return <h2>{this.props.msg}</h2>;
        }
}  */



export default Componente;     // pongo default para no tener que destructurarlo al importar