import React from 'react'
import useMemoHook from './useMemoHook'
import useRefHook from './useRefHook'
import ContextHooks from './ContextHooks'

const App = () => {
  return (
    <div>
      {/* add whichever hook */}
      {/* context hooks have a child component, so render it as a comopent not a function */}
      <ContextHooks/>
    </div>
  )
}
export default App 
