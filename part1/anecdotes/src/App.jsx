import { useState } from "react";

const MostVote = ({ vote, anecdotes }) => {
  const highestCount = Math.max(...vote);
  const winnerIndex = vote.indexOf(highestCount);
  const winner = anecdotes[winnerIndex];
  if (highestCount === 0) {
    return <p>No votes yet</p>;
  }
  return (
    <div>
      <p>{winner}</p>
      <p> has vote {highestCount}</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
    console.log("vote", vote);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has vote {vote[selected]}</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <h1>Anacdote with most votes</h1>
      <MostVote vote={vote} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
