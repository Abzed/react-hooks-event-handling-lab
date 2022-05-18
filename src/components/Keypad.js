import React, { useState } from 'react';


export default function Keypad(){
    const [password, setPassword] = useState('Entering password...')

    function handlePassword(event){
        event.preventDefault()
        setPassword(password => event.target.value)
        console.log(password);
    }

    return <>
    <input type="password" 
    id='password' value={password} 
    placeholder='Enter password' 
    onChange={handlePassword} />
    </>
}