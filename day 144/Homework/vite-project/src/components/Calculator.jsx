import React, { useState } from 'react';

const Calculator = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [res, setRes] = useState(0);

  function Plus() {
    const a = parseFloat(first);
    const b = parseFloat(second);
    setRes(a + b);
  }

  function Minus() {
    const a = parseFloat(first);
    const b = parseFloat(second);
    setRes(a - b);
  }

  function Multiply() {
    const a = parseFloat(first);
    const b = parseFloat(second);
    setRes(a * b);
  }

  function Divide() {
    const a = parseFloat(first);
    const b = parseFloat(second);
    if (b === 0) {
      setRes('Cannot divide by 0');
    } else {
      setRes(a / b);
    }
  }

  function Reset() {
    setFirst('');
    setSecond('');
    setRes(0);
  }

  return (
    <div className="text-center bg-cyan-200 h-screen">
      <input
        className="border h-13 pl-3"
        type="text"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        placeholder="First"
      />
      <input
        className="border h-13 pl-3"
        type="text"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
        placeholder="Second"
      />
      <p className="font-sans text-4xl">{res}</p>
      <button
        className="h-10 w-10 rounded-md bg-blue-500 mr-4 cursor-pointer hover:h-11 hover:w-11 hover:bg-blue-300 duration-200"
        onClick={Plus}
      >
        +
      </button>
      <button
        className="h-10 w-10 rounded-md bg-blue-500 mr-4 cursor-pointer hover:h-11 hover:w-11 hover:bg-blue-300 duration-200"
        onClick={Minus}
      >
        -
      </button>
      <button
        className="h-10 w-10 rounded-md bg-blue-500 mr-4 cursor-pointer hover:h-11 hover:w-11 hover:bg-blue-300 duration-200"
        onClick={Multiply}
      >
        *
      </button>
      <button
        className="h-10 w-10 rounded-md bg-blue-500 mr-4 cursor-pointer hover:h-11 hover:w-11 hover:bg-blue-300 duration-200"
        onClick={Divide}
      >
        /
      </button>
       <button
        className="h-10 w-10 rounded-md bg-blue-500 cursor-pointer hover:h-11 hover:w-11 hover:bg-blue-300 duration-200"
        onClick={Reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Calculator;
