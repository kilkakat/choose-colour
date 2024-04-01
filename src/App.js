import {useState, useEffect} from "react"
import './App.css';

function App() {
  const [chooseColor, setChooseColor] = useState("");
  // const [query, setQuery] = useState('');

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const colorParam = urlParams.get('color');

    if (colorParam && ['red', 'green', 'yellow'].includes(colorParam)) {
      setChooseColor(colorParam);
    }
  }, []);


  const colorChange = (event) => {
    const newColor = event.target.value;
    
    setChooseColor(newColor);
    const newUrlParams = new URLSearchParams();
    newUrlParams.set('color', setChooseColor);
    window.history.pushState({newUrlParams});
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
  
        {/* <h1>{query}</h1> */}

      </div>
    </div>
  )
  }
  
  export default App;
  
