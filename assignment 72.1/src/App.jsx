import { useState } from 'react'
import './App.css'
import Header from './Header'
import CreateForm from './CreateForm'
import AddTodoBtn from './AddTodoBtn'

function App() {
  const [showForm, setShowForm] = useState(false);

  const [todos, setTodos] = useState(["Clean my computer", "Buy a keyboard"]);
  const [doneTodos, setDoneTodos] = useState(["Write an article about @xstate/test"]);

  function openForm() {
    setShowForm(true);
  }
  function closeForm() {
    setShowForm(false);
  }

  function addTodo(text) {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setShowForm(false);
  }

  function markAsDone(index) {
    const item = todos[index];
    setTodos(todos.filter((todo, i) => i !== index));
    setDoneTodos([...doneTodos, item]);
  }
  function markAsUndone(index) {
    const item = doneTodos[index];
    setDoneTodos(doneTodos.filter((donetodo, i) => i !== index));
    setTodos([...todos, item]);
  }

  return (
    <div>
      <Header />
      <div className='mx-36 my-8 px-12 flex flex-col gap-6'>
        <h1 className='font-bold text-3xl'>Things to get done</h1>

        <div>
          <h2 className='my-2 text-lg font-medium'>Things to do</h2>
          <ul className="space-y-2">
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={() => markAsDone(index)}
                  className="w-4 h-4"
                />
                {todo}
              </li>
            ))}
          </ul>
        </div>

        {!showForm && <AddTodoBtn onAddTodo={openForm} />}
        {showForm && <CreateForm onCancel={closeForm} onSave={addTodo} />}

        <div>
          <h2 className='my-2 text-lg font-medium'>Things done</h2>
          <ul className="space-y-2">
            {doneTodos.map((todo, index) => (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked
                  onChange={() => markAsUndone(index)}
                  className="w-4 h-4 accent-yellow-700"
                />
                {todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
