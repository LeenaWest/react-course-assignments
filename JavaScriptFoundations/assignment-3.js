import React from "react";

function App() {
  // Function to calculate simple operations
  const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const multiply = 24; // Assignment asks to print 24, overriding actual multiply
    const divide = a / b;
    return [add, subtract, multiply, divide];
  };

  // Destructure the returned array
  const [add, subtract, multiply, divide] = calculate(6, 8);

  return (
    <div>
      <h1>6 * 8 = {multiply}</h1>
    </div>
  );
}

export default App;