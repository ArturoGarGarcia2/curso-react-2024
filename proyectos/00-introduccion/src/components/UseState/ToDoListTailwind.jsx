import { useState } from "react";
import { idGenerator } from "../../helpers/idGenerator";

const initialState = [
    {
        id: 1,
        title: 'Comprar pan',
        completed: false
    },
    {
        id: 2,
        title: 'Pasear al perro',
        completed: true
    },
    {
        id: 3,
        title: 'Reclamar Jerusalén',
        completed: false
    },
]

const ToDoListTailwind = () => {
    const [tasks, setTasks] = useState(initialState);
    const [newTask, setNewTask] = useState('');

    function handleAddTask() {
        if(newTask.trim() != ''){
            const newTaskObject = {
                id:idGenerator(),
                title: newTask.trim(),
                completed: false,
            };
            setTasks([...tasks,newTaskObject]);
            setNewTask('');
        }
    }

    function handleRemoveTask(taskId) {
        //Filtro el array buscando ese ID y lo guardo en una variable,
        //después seteo el estado con la nueva variable filtrada.
        const updateTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updateTasks);
    }

    function handleToggleCompleted(taskId) {
        //Cada vez que hacemos click en el check me pone la tarea completada,
        //modificando el estado y cabiando la clase
        const updateTasks = tasks.map((task) => (
            task.id === taskId ? {...task,completed: !task.completed} : task
        ))
        setTasks(updateTasks);
    }

    return (
        <div
            className="max-w-md mx-auto mt-8 p-6
                    bg-yellow-100
                    shdow-md rounded-md"
        >
            <h1 className="text-2xl mb-4 font-bold uppercase">To Do List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Nueva Tarea"
                    className="flex-1 mr-2 p-2 border rounded-md
                    focus:outline-none focus:border-blue-500"
                    value={newTask}
                    onChange={(e)=>setNewTask(e.target.value)}
                    // onKeyDown={}
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md
                hover:bg-blue-800 transition-colors duration-150">
                    Agregar Tarea
                </button>
            </div>
            <div>
                <ul>
                    {
                        tasks.map(task =>(
                            <li key={task.id} className="flex items-center mb-2">
                                <input
                                    onChange={()=>handleToggleCompleted(task.id)}
                                    type="checkbox"
                                    className="mr-2"
                                    checked={task.completed}
                                />
                                <span
                                    className={task.completed? "line-through text-gray-600" : ""}>
                                        {task.title}
                                </span>
                                <button
                                    onClick={()=>handleRemoveTask(task.id)}
                                    className='ml-auto bg-red-500 text-white px-3 py-1
                                    rounded-md hover:bg-red-900 transition-colors duration-150'>
                                        Borrar
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ToDoListTailwind
