import React, { useState } from 'react';

const TodoItem = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, { title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
