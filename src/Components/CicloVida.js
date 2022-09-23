import React, {Component} from  "react";

class Reloj extends Component{
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        //console.log(1, "El componente ha sido eliminado de DOM");         
    }
    render(){
        return(<h3>{this.props.hora}</h3>);
    }
}

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        //console.log(0, "El componente se inicializa, aún no esta en el DOM");
        this.state ={
            hora: new Date().toLocaleTimeString(),
            visible: false,
        }
        this.temporizador=null;
    }
    componentDidMount(){
        //console.log(3, "El componente ya se encuentra en el DOM");

    }

    componentDidUpdate(prevProps,prevState){
        //console.log(1, "El Estado o las props del componente han cambiado"); 
        //console.log(prevProps); 
        //console.log(prevState); 
    }


    tictac= ()=>{
        
        this.temporizador = setInterval(() => {
            this.setState=({
                    hora: new Date().toLocaleTimeString(),
            });
        }, 1000);
    };
    iniciar= ()=>{
        this.tictac();
        this.setState({
            visible:true,
        })
      
    };
    detener= ()=>{
        this.setState({
            visible:false,
        });
        clearInterval(this.temporizador);
    };
    render(){
        //console.log(4, "Elcomponente se dibuja o redibuja por algun cambio en el DOM");
        return(
            <>
                <h2> Ciclo de Vida de loa componentes de Clase</h2>
                {this.state.visible && <Reloj hora = {this.state.hora}/>  }
                <button onClick = {this.iniciar}>Iniciar</button>
                <button onClick = {this.detener}>Detener</button>
            </>
        );
    }

}