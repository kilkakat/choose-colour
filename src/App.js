import {useState} from "react"
import './App.css';

function App() {
  const [chooseColor, setChooseColor] = useState("green");

  const colorChange = (event) =>
  setChooseColor(event.target.value);

return (
  <div class="App">

  <h1>Color Selector</h1>

  <div class="color-selector">

    <select class="dropdownButton" value={chooseColor} onChange={colorChange}>
      <option value="green">GREEN</option>
      <option value="yellow">YELLOW</option>
      <option value="red">RED</option>
    </select>

    <div class="squareColor" style={{ backgroundColor: chooseColor }}></div>
  </div>
</div>
);
}

export default App;
