import React from "react";

import TodoItem from "./TodoItem";

// Todo list items

const TodoList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
