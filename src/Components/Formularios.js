import React,{useState, useEffect} from "react";

export default function Formularios(){
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        console.log(e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        //console.log(form);
    };
    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        })
        //console.log(form);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }
    return(
        <>
            <h2>Formularios</h2>
            <br/>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                     type ="text" 
                     id="nombre" 
                     name="nombre" 
                     value = {form.nombre }
                     onChange={handleChange}
                />
                <p>Elegi tu sabor favorito</p>
                

                <input
                    type = "radio"
                    id="react"
                    name="sabor"
                    value="react"
                    onChange={handleChange}
                    
                />
                <label htmlFor="react">React</label>
                <input
                    type = "radio"
                    id="vanilla"
                    name="sabor"
                    value="vanilla"
                    onChange={handleChange}
                    defaultChecked                        

                />
                <label htmlFor="vanilla">Vanilla</label>
                <input
                    type = "radio"
                    id="angular"
                    name="sabor"
                    value="angular"
                    onChange={handleChange}
                />
                <label htmlFor="angular">Angular</label>
                <p>Elegi tu lenguaje de programación favorito</p>
                <select name="lenguaje" id="lenguaje" onChange = {handleChange}>
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="">GO</option>
                </select>
                <br/>
                <label htmlFor ="terminos">Acepto terminos y condiciones</label>
                <input type ="checkbox" id="terminos" name="terminos" onClick={handleChecked}/>
                <br/>
                <input type="submit"/>

            </form>
        </>
    )
}
/********* En esta opcion declaramos una variavle de estado por cada input, mejor hacer la de arriba que tiene una sola variable de estado *********/
/*
export default function Formularios(){
    const [nombre,setNombre] =useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }
    return(
        <>
            <h2>Formularios</h2>
            <br/>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                     type ="text" 
                     id="nombre" 
                     name="nombre" 
                     value={nombre}  
                     onChange={(e)=>setNombre(e.target.value)}
                />
                <p>Elegi tu sabor favorito</p>
                <p>mi sabor favorito es: {sabor}</p>
                

                <input
                    type = "radio"
                    id="react"
                    name="sabor"
                    value="react"
                    onChange={(e)=> setSabor(e.target.value)}
                    
                />
                <label htmlFor="react">React</label>
                <input
                    type = "radio"
                    id="vanilla"
                    name="sabor"
                    value="vanilla"
                    onChange={(e)=> setSabor(e.target.value)}
                    defaultChecked                        

                />
                <label htmlFor="vanilla">Vanilla</label>
                <input
                    type = "radio"
                    id="angular"
                    name="sabor"
                    value="angular"
                    onChange={(e)=> setSabor(e.target.value)}
                />
                <label htmlFor="angular">Angular</label>
                <p>Elegi tu lenguaje de programación favorito</p>
                <select name="lenguaje" id="lenguaje" onChange = {(e)=> setLenguaje(e.target.value) }>
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="">GO</option>
                </select>

                <p>Elegi tu sabor favorito</p>
                <label htmlFor ="terminos">Acepto terminos y condiciones</label>
                <input type ="checkbox" id="terminos" name="terminos" onClick={(e)=>setTerminos(e.target.checked)}/>
                <br/>
                <input type="submit"/>

            </form>
        </>
    )
}
*/