import { useEffect } from 'react'
import './App.css'
import { useScrow } from './hooks/useScrow'

function App() {
  const {client} = useScrow()

  useEffect(() => {
    console.log(client)
  }, [client])
  
  return (
    <>
      
    </>
  )
}

export default App
