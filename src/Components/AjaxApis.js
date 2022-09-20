import React,{Component} from "react";

function Pokemon(props){
return(
    <figure>
        <img src={props.avatar} alt ={props.name}/>
        <figcaption>{props.name}</figcaption> 
    </figure>
)
}

export default class AjaxApis extends Component{
    state={
        pockemons:[]
    }
componentDidMount(){
    let url ="https://pokeapi.co/api/v2/pokemon";
    fetch(url)
    .then(res=> res.json())

}

render(){
    return(
        <>
        <h2>Peticiones Asincronas en componentes de clase</h2>
        </>
    
    )
}
}