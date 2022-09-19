import React,{Component} from "react";
import data from "../helpers/data.json";

function ElementoLista(props){
    return(
        <li  key = {props.index}>
            <a href={props.el.web} target = "_blank" rel="noopener noreferrer">{props.el.name}</a>
        </li>
    );

}
export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state ={
            seasons: ["Primavera","Verano","Otoño","Invierno"],
        }
    }
    render(){
        return(
            <div>
                <h2>Renderizado Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((el,index) =>(<li key= {index}>{el}</li>))
                    }
                </ol>
                <h3>Frameworks Frontend JS </h3>
                <ul>
                {data.frameworks.map((el,index) => (<ElementoLista index ={index} el ={el} /> ))}
                </ul>
            </div>   
        );
    }
}