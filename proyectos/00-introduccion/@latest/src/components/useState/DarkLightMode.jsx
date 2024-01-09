import { useState } from "react";

const DarkLightMode = () => {
    const [DarkMode, setDarkMode] = useState(false);

    function toggleTheme() {
        setDarkMode(!DarkMode);
    }

    return (
        <>
            <div className={`default ${DarkMode? 'dark' : 'light'}`}>
                <h1>Cambio del Tema</h1>
                <button onClick={toggleTheme}>{DarkMode? 'Modo claro' : 'Modo oscuro'}</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, illo. Voluptatem provident laborum repellendus debitis dolor
                    nostrum recusandae voluptates nesciunt eaque.
                    Voluptate aspernatur laboriosam sit delectus neque minima, incidunt perferendis?</p>
            </div>
        </>
    )
}

export default DarkLightMode
