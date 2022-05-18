import React from 'react';

export default function EyesOnMe(){
    return <>
    <button onBlur={e => console.log('Hey! Eyes on me!')} onFocus={e => console.log('Good!')} type="button">Eyes on me</button>
    </>
}