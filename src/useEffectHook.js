import React, { useState, useEffect} from 'react'

const useEffectHook = () => {
    const [resourceType, setResourceType]= useState('post')

    useEffect(()=>{

    }, [resourceType])

    return (
        <>
        <div>
            <button onClick={()=> setResourceType('post')}>Posts</button>
            <button onClick={()=> setResourceType('users')}>Users</button>
            <button onClick={()=> setResourceType('comments')}>Comments</button>            
        </div>
        <h1>{resourceType}</h1>
        </>
    )
}

export default useEffectHook