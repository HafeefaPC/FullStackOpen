const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <p>{part.name} {part.exercises}</p>
      ))}
    </>
  );
};
const Total = ({ parts }) => {
  const sum = parts.reduce((total, part) => total + part.exercises, 0);

  return <p>Total number of exercises: {sum}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const parts = [part1, part2, part3];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
