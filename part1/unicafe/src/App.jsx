import { useState } from "react";
const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad;
  const average = total > 0 ? (clicks.good * 1 + clicks.bad * -1) / total : 0;
  const positive = total > 0 ? (clicks.good * 100) / total : 0;
  return (
    <div>
      <p>all {total}</p>
      <p>average{average}</p>
      <p>positive{positive}</p>
    </div>
  );
};

const Button = ({ handleclick, text }) => {
  return (
    <div>
      <button onClick={handleclick}>{text}</button>
    </div>
  );
};

const App = () => {
  const [clicks, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const goodadd = () => {
    setClick({ ...clicks, good: clicks.good + 1 });
  };
  const neutraladd = () => {
    setClick({ ...clicks, neutral: clicks.neutral + 1 });
  };
  const badadd = () => {
    setClick({ ...clicks, bad: clicks.bad + 1 });
  };
 

  return (
    <div>
      <h1>give feedback"</h1>
      <Button handleclick={goodadd} text="good" />
      <Button handleclick={neutraladd} text="neutral" />
      <Button handleclick={badadd} text="bad" />
      <h1>statistics</h1>
      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>
      <Statistics clicks={clicks}/>
    </div>
  );
};

export default App;
