import React, { useState } from "react";
// import "./Calculator.css";
import "./Calulator.css";


function Calculator() {
  const [inputValue, setInputValue] = useState("");

  function display(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Error");
    }
  }

  function clear() {
    setInputValue("");
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <form className="calculator" name="calc">
      <input
        type="text"
        className="value"
        value={inputValue}
        onChange={handleChange}
      />
      <span className="num clear" onClick={clear}>
        c
      </span>
      <span className="num" onClick={() => display("/")}>/</span>
      <span className="num" onClick={() => display("*")}>*</span>
      <span className="num" onClick={() => display("7")}>7</span>
      <span className="num" onClick={() => display("8")}>8</span>
      <span className="num" onClick={() => display("9")}>9</span>
      <span className="num" onClick={() => display("-")}>-</span>
      <span className="num" onClick={() => display("4")}>4</span>
      <span className="num" onClick={() => display("5")}>5</span>
      <span className="num" onClick={() => display("6")}>6</span>
      <span  className="plus num" onClick={() => display("+")}>
        +
      </span>
      <span className="num" onClick={() => display("1")}>1</span>
      <span className="num" onClick={() => display("2")}>2</span>
      <span className="num" onClick={() => display("3")}>3</span>
      <span className="num" onClick={() => display("0")}>0</span>
      <span className="num" onClick={() => display("00")}>00</span>
      <span className="num" onClick={() => display(".")}>.</span>
      <span  className="num equal" onClick={calculate}>
        =
      </span>
    </form>
  );
}

export default Calculator;
