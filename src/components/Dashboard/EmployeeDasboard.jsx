import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDasboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDasboard;
