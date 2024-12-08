import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Main from "./components/Main/Main.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
<>
   <Header/>
      <Navigation/>
        <Main/>
</>
  )
}
export default App
