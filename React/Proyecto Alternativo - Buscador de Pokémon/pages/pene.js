import React, { useState } from "react";
import Link from "next/link";
import Form from "../components/Form";
import Tasklist from "../components/Tasklist";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <Form addNewTask={addNewTask} />
      <Tasklist tasks={tasks} />
    </>
  );
};

export default Tasks;
