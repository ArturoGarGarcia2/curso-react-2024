import { useState } from 'react';

const Logueado = () => {
    const [logged, setLogged] = useState(false);
    function handleLogin() {
        logged? setLogged(false) : setLogged(true);
    }

    return (
        <>
        <h1>Ejercicio 1</h1>
            <p>{logged? 'Bienvenido' : 'Por favor, inicia sesión'}</p>
            <button onClick={handleLogin}>{logged? 'Desloguearse' : 'Loguearse'}</button>
        </>
    )
}

export default Logueado
