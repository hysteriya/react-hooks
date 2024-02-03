// The useRef hook in React is a way to create a mutable object that persists across renders of a component. In simple terms, it provides a way to store and access values that don't trigger a re-render when they change.

//has to be used with .current
//retuns dom element when used in the element's ref attribute

import React, { useEffect, useRef, useState } from 'react'


//use case 1
// const useRefHook = () => {
//     const [name, setName]= useState('');
//     const inputRef = useRef()

//     function focusInput(){
//         inputRef.current.focus();
//     }
//   return (
//     <div>
//         <input ref={inputRef} value={name} onChange={e=> setName(e.target.value)}/>
//         <div>my name is {name}</div>
//         <button onClick={focusInput}>Focus</button>
//     </div>
//   )
// }


//use case 2
const useRefHook =() =>{
    const [name, setName]= useState('');
    const prevName= useRef('')

    useEffect(()=>{
        prevName.current = name
    }, [name]);

    return(
        <>
        <input value={name} onChange={e=> setName(e.target.value)}/>
        <div> Name: {name} Previous Name: {prevName.current}</div>
        </>
    )
}

export default useRefHook