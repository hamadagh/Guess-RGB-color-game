import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [randomColors, setRandomColors] = useState([
    "rgb(152, 151, 181)",
    "rgb(141, 117, 32)",
    "rgb(191, 33, 2)",
    "rgb(87, 147, 173)",
    "rgb(40, 186, 66)",
    "rgb(200, 57, 247)",
  ]);
  const [colorToGuess, setColorToGuess] = useState("rgb(87, 147, 173)");
  const [reaction, setReaction] = useState("GUESS");

  useEffect(() => {
    setColorToGuess(randomColors[Math.floor(Math.random() * 5)]);
  }, [randomColors]);

  const randomColor = (index) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const generateRandomColor = () => {
    let colors = [];
    for (let i = 0; i < 6; i++) {
      colors.push(randomColor());
    }
    setRandomColors(colors);
  };

  const checkGuess = (e) => {
    if (e.target.style.backgroundColor === colorToGuess) {
      setReaction("Correct !!");
      setRandomColors([
        colorToGuess,
        colorToGuess,
        colorToGuess,
        colorToGuess,
        colorToGuess,
        colorToGuess,
      ]);
    } else {
      setReaction("Try Again :(");
      let index = randomColors.indexOf(e.target.style.backgroundColor);
      let colors = [...randomColors];
      let color = randomColors.indexOf(index);
      color = "rgb(0, 0, 0)";
      colors[index] = color;
      setRandomColors(colors);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <span id="colorToGuess">{colorToGuess}</span>
      </div>

      <div className="sub__header">
        <button onClick={generateRandomColor}>New colors</button>
        <h1 id="reaction">
          <b>{reaction}</b>
        </h1>
      </div>

      <div id="main_section">
        <div className="circles_container">
          <div
            className="circle"
            style={{ backgroundColor: `${randomColors[0]}` }}
            onClick={checkGuess}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: `${randomColors[1]}` }}
            onClick={checkGuess}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: `${randomColors[2]}` }}
            onClick={checkGuess}
          ></div>
        </div>
        <div className="circles_container">
          <div
            className="circle"
            style={{ backgroundColor: `${randomColors[3]}` }}
            onClick={checkGuess}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: `${randomColors[4]}` }}
            onClick={checkGuess}
          ></div>
          <div
            className="circle"
            style={{ backgroundColor: `${randomColors[5]}` }}
            onClick={checkGuess}
          ></div>
        </div>
      </div>
      <div className="footer">
        <span>Github Link</span>
      </div>
    </div>
  );
}

export default App;
