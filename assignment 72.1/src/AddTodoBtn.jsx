import React from 'react';

function AddTodoBtn({ onAddTodo }) {
  return (
    <button className='w-fit bg-yellow-500 hover:bg-yellow-600 text-sm text-white rounded-full px-4 py-2' onClick={onAddTodo}>+ Add a todo</button>
  );
}

export default AddTodoBtn;