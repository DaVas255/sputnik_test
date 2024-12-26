import { TodoListPage } from "../pages/todo-list"

fetch("http://localhost:3001/tasks").then(res => res.json()).then(data => console.log(data))

function App() {

  return (
    <TodoListPage />
  )
}

export default App
