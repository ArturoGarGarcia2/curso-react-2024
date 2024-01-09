import { useState } from 'react'

const initialState = {
    Crisóstomo:0,
    Higinio:3,
    Silfredo:5,
    Eliodoro:2,
};

const ContadorDoble = () => {
    // HOOKS
    const [friends, setFriends] = useState(initialState);

    // DECLARACIÓN DE FUNCONES
    function handleIncrementCrisostomo() {
        setFriends({...friends,Crisóstomo: friends.Crisóstomo+1});
    }
    function handleIncrementHiginio() {
        setFriends({...friends,Higinio: friends.Higinio+1});
    }

    return (
        <>
            <div>
                <span>Crisóstomo tiene: <strong>{friends.Crisóstomo}</strong> amigos</span>
                <button onClick={handleIncrementCrisostomo}>Añadir amigo</button><br/><br/>
                <span>Higinio tiene: <strong>{friends.Higinio}</strong> amigos</span>
                <button onClick={handleIncrementHiginio}>Añadir amigo</button>
                <span>Silfredo tiene: <strong>{friends.Silfredo}</strong> amigos</span>
                <button onClick={handleIncrementSilfredo}>Añadir amigo</button>
                <span>Eliodoro tiene: <strong>{friends.Eliodoro}</strong> amigos</span>
                <button onClick={handleIncrementEliodoro}>Añadir amigo</button>
            </div>
        </>
    )
}

export default ContadorDoble
