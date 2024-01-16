
const nombres = ['Adrián','Begoña','Crisóstomo','Dánae','Eliodoro','Fulgencia']

const Nombres = () => {
    return (
        <>
            <h1>Ejercicio 2</h1>
            <ul>
                {nombres.map((n,index) =>(
                    <li key={index}>{n}</li>
                ))}
            </ul>
        </>
    )
}

export default Nombres
