import React from "react";
import Header from "./Header";
import Content from "./Content"
import Total from "./Total"

const Course = (props) => {
  const { course } = props;
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(exercise => exercise['exercises'])} />
    </div>
  );
};

export default Course;
