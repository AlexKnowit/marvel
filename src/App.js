import logo from "./logo.svg";
import "./App.css";
import { pulse } from "./ColorChars";

function App() {
  const colors = [65535, 25500, 46920, 65535, 25500, 46920];
  const characters = [
    { name: "Hulk", image: "", color: 25500 },
    { name: "Spiderman", image: "", color: 65535 },
    { name: "Ironman", image: "", color: 25500 },
    { name: "Black panther", image: "", color: 25500 },
  ];

  const generateChar = (min = 0, max = 3) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;

    return characters[rand];
  };

  console.log(characters[2]);
  const setColor = (color) => {
    pulse(color);
  };

  const loopColors = () => {
    var i = 0;

    while (i < 6) {
      (function (i) {
        const color = colors[i];
        setTimeout(function () {
          setColor(color);
        }, 1000 * i);
      })(i++);
    }
  };

  const handleOnClick = () => {
    loopColors();
    const char = generateChar();
    console.log(char);
  };

  return (
    <div className="App">
      <button onClick={() => handleOnClick()}>CLICK</button>
    </div>
  );
}

export default App;
