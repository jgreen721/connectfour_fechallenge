import {Routes,Route} from "react-router-dom"
import {Title,Game,Rules} from "./pages"
import './App.css'

function App() {

  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Title/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/rules" element={<Rules/>}/>
        </Routes>
    </div>
  )
}

export default App
