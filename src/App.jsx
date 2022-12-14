import {useState} from "react";

import DataContext from "./components/DataContext";
import Section from "./components/Section";

import './App.css'

function App() {
  const [user, setUser] = useState([])


  return (
    <DataContext.Provider value={{ user, setUser}}>
      <div className="App">
      <Section/>
    </div>
    </DataContext.Provider>
    
  )
}

export default App
