import Batsman from './Batsman'
import './App.css'

function App() {

  function handleClick(){
    alert('I am clicked.')
  }
  
  return (
    <>
      
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
