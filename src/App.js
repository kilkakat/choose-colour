import {useState} from "react"
import './App.css';

function App() {
  const [chooseColor, setChooseColor] = useState("");
  
  const colorChange = (event) => {
    setChooseColor(event.target.value)
  };
  
  return (
  <div class="App">
  
  <h1>Color Selector</h1>
  
      <div class="colorSelector">
  
        <select class="dropdownButton" value={chooseColor} onChange={colorChange}>
         
          <option value="">Choose Here!</option>
          <option value="green">GREEN</option>
          <option value="red">RED</option>
          <option value="yellow">YELLOW</option>
  
        </select>
  
        <div class="square" style={{backgroundColor: chooseColor}}></div>
  
      </div>
    </div>
  )
  }
  
  export default App;
  
