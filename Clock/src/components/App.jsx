import React from "react";

function App() {
  const [time, setTime] = React.useState(
    new Date().toLocaleTimeString("en-GB")
  );

  setInterval(incTime, 1000);

  function incTime() {
    setTime(new Date().toLocaleTimeString("en-GB"));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={incTime}>Get Time</button>
    </div>
  );
}

export default App;
