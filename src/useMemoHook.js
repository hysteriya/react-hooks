// const MyComponent = ({ data }) => {
//   // useMemo takes a function and an array of dependencies
//   const memoizedResult = useMemo(() => {
//     // Some expensive computation based on 'data'
//     return data.map(item => item * 2);
//   }, [data]); // The dependency array, 'data' in this case

//   // Rest of your component using memoizedResult...
//   return <div>{memoizedResult}</div>;
// };



import React, {useState, useMemo} from 'react'

const useMemoHook = () => {

  const [number, setNumber]= useState(0)
  const [dark, setDark]= useState(false)
  const  doubled= useMemo(()=> {
    return slowFunc(number) 
  }, [number])
  
  const themeStyle ={
    backgroundColor: dark ? "black" : "white",
    color : dark ?'white' : 'black'
  }


  return (
    <>
      <input type='number' value={number} onChange={e=> setNumber(parseInt(e.target.value))} />
      <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyle}>{doubled}</div>
    </>
  )
}

function slowFunc(num){
  console.log('slow func invoked')
  for (let i=0; i<=1000000000; i++){
    return num*2;
  }
}

export default useMemoHook