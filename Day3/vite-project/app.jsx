import React from "./core/react.js";

function Count({ num }) {
  return <div>count:{num}</div>;
}

function CountContainer() {
  return <Count num={100} ></Count>;
}

function App() {
  return (
    <div>
      Hello React
      <CountContainer />
      <Count num={10} />
      <Count num={20} />
    </div>
  );
}

export default App;
