import { useState } from 'react';

const initialState = 0;

const Contador = () => {
    // HOOKS
    const [counter, setCounter] = useState(initialState);

    // DECLARACIÓN DE FUNCIONES
    function handleIncrement() {
        // setCounter(counter+100);
        //Así se debería hacer para asegurarnos el traer siempre el último valor de la variable estado.
        setCounter(prevCounter => prevCounter + 100);
    }
    function handleDecrement(asd) {
        setCounter(counter-asd);
    }

    return (
        <>
            <h1>Ejemplo de contador en React</h1>
            <h2>El contador vale: {counter}</h2>
            <button onClick={handleIncrement}>Incrementar contador</button>
            <button onClick={()=>handleDecrement(document.getElementById('valorD').value)}>Decrementar contador</button><br></br>
            <input type="number" id='valorD'/>
        </>
    )
    };

export default Contador

//Decrementar sea un valor que le pase cómo parámetro