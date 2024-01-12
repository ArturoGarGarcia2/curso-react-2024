import { useState } from "react"

// ----- DECLARACIÓN VARIABLES GLOBALES -----
const initialState = {
    name: '',
    email: '',
    password: '',
}

const RegistrarFormulario = () => {
    // ----- ESTADOS -----
    // ----- DECLARACIÓN DE HOOKS -----
    const [formData, setFormData] = useState(initialState);
    
    // ----- DECLARACIÓN DE FUNCIONES -----
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Las credenciales son: ',formData);
        setFormData(setFormData);
    }
    function handleChange(e) {
        e.preventDefault();
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    }

    return (
        <div className='max-w-md mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md'>
            <h1 className='text-3xl mb-4 font-bold'>
                Formulario de Registro
            </h1>
            <form >
                <div className='max-w-md mx-auto mt-4 p-6 bg-slate-200 shadow-md rounded-md'>
                    <label className='mx-4 text-2xl'>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='flex-1 p-2 border rounded-md focus:outline-none focus:border-blue-500' />
                    </label>
                </div>
                <div className='max-w-md mx-auto mt-4 p-6 bg-slate-200 shadow-md rounded-md'>
                    <label className='mx-4 text-2xl'>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='flex-1 p-2 border rounded-md focus:outline-none focus:border-blue-500' />
                    </label>
                </div>
                <div className='max-w-md mx-auto mt-4 p-6 bg-slate-200 shadow-md rounded-md'>
                    <label className='mx-4 text-2xl'>
                        Contraseña:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className='flex-1 p-2 border rounded-md focus:outline-none focus:border-blue-500' />
                    </label>
                </div>
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors delay-75 duration-100' >Registrar usuario</button>
            </form>
        </div>
    )
}

export default RegistrarFormulario