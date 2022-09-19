import React,{Component} from "react";

export  class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state ={
            contador: 0,
        }
        this.sumar =this.sumar.bind(this);       //al metodo sumar le bindea, enlaza el elemento this. Hay que hacer esto cada vez que defino un evento en un componente basado en clases
        this.restar =this.restar.bind(this);     //al metodo restar le bindea, enlaza el elemento this. Hay que hacer esto cada vez que defino un evento en un componente basado en clases
    }
    sumar(e){
        this.setState({
            contador : this.state.contador +1,      
        });
    }
    restar(e){
        this.setState({
            contador : this.state.contador -1,      
        });

    }
   render(){
        return(
            <div>
                <h2> Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick ={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>                
                <h3>{this.state.contador}</h3>

            </div>
        )

   } 
}


// Con Properties Inicializer
export  class EventosES7 extends Component{

        state ={
            contador: 0,
        }

    sumar= (e)=>{
        this.setState({
            contador : this.state.contador +1,      
        });
    }
    restar= (e)=>{
        this.setState({
            contador : this.state.contador -1,      
        });

    }
   render(){
        return(
            <div>
                <h2> Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick ={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>                
                <h3>{this.state.contador}</h3>

            </div>
        )

   } 
}

function Boton(props){                                   // Defino el componente llamado Boton, no creo un archivo independiente espara tener junto por ahora no es recomendable
    return(
        <button onClick={props.myOnClick} >Botón hecho Componente </button>
    )
}

export class MasSobreEventos extends Component{
    handleClick(e){
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
    }
    handleClick2(e,mensaje){
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }

render(){
    return(
        <div>
            <h2> Más Sobre Eventos  </h2>
            <button onClick={this.handleClick}>Saludar</button>
            <button onClick={(e) => this.handleClick2(e,"parametro pasado, desde un evento")}>Saludar2</button>
            {/* Evento perzonalozado*/}
            <Boton myOnClick={(e) => this.handleClick2(e,"parametro pasado, desde un evento")} />
        </div>
    )
}    
}