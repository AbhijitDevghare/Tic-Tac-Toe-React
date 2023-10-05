import { useState } from 'react'

import Grid from './Grid/Grid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid numOfCards={9}/>
    </>
  )
}

export default App
