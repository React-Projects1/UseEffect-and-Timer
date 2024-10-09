import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // State 1
  // useEffect(()=>{
  //   console.log("useEffect");
  // },)

  // State 2
  // useEffect(()=>{
  //   console.log("useEffect");
  // },[])

  // State 3
  // useEffect(()=>{
  //   console.log("useEffect");
  // },[counter1])

  // State 4
  useEffect(() => {
    console.log("useEffect");
  }, [counter1, counter2]);

  // Timer
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  });

  return (
    <div className="App">
      <h2>{counter1}</h2>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        +
      </button>

      <br />

      <h2>{counter2}</h2>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        +
      </button>

      <hr />

      <h2>Timer</h2>
      <p>{timer} sec</p>
      <p> {Math.floor(timer / 60)} min</p>
      <p> {Math.floor(timer / 3600)} houre</p>
    </div>
  );
}

export default App;
