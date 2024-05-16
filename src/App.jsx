
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick() {
    alert('clicked')
  }


  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>click</button>
    </>
  )
}



export default App
