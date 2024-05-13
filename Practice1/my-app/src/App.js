import React from 'react'

function fetchTodos() {
  return [
    {
      id: 1,
      title: '吃饭',
      completed: false
    },
    {
      id: 2,
      title: '睡觉',
      completed: false
    },
    // ... more todo items
    {
      id: 3,
      title: '打豆豆',
      completed: false
    }
  ]
}
export default function App() {
  const todos = fetchTodos()
  console.log(todos)
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li>
            <input type='checkbox' checked={todo.completed} />
            <label>{todo.title}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
