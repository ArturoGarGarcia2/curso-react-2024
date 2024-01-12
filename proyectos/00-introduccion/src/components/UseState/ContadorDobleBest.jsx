import { useState } from 'react';

const initialState = {
    Crisóstomo:0,
    Higinio:3,
    Silfredo:5,
    Eliodoro:2,
};

const ContadorDobleBest = () => {
    const [friends, setFriends] = useState(initialState);

    function handleIncrement(friendName) {
        setFriends({
            ...friends,
            [friendName] : friends.friendName +1,
        });
    }

    return (
        <>
            <div>
                <span>Crisóstomo tiene: <strong>{friends.Crisóstomo}</strong> amigos</span>
                <button onClick={()=>handleIncrement('Crisóstomo')}>Añadir amigo</button><br/><br/>
                <span>Higinio tiene: <strong>{friends.Higinio}</strong> amigos</span>
                <button onClick={()=>handleIncrement('Higinio')}>Añadir amigo</button><br/><br/>
                <span>Silfredo tiene: <strong>{friends.Silfredo}</strong> amigos</span>
                <button onClick={()=>handleIncrement('Silfredo')}>Añadir amigo</button><br/><br/>
                <span>Eliodoro tiene: <strong>{friends.Eliodoro}</strong> amigos</span>
                <button onClick={()=>handleIncrement('Eliodoro')}>Añadir amigo</button><br/><br/>
            </div>
        </>
    )
}

export default ContadorDobleBest
