import React from "react";
import Task from "./Task";

const Tasklist = ({ tasks }) => {
  return (
    <>
      <h1>Las tareas son: </h1>
      {tasks.map((task) => {
        return <Task key={task} task={task} />;
      })}
    </>
  );
};

export default Tasklist;
