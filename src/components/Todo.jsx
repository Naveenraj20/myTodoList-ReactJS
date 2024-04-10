import { useState } from "react";
import TodoMap from "./TodoMap";
import TodoForm from "./TodoForm";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const count = todos.filter((item) => item.state).length;
  const totalCount = todos.length;
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoMap todos={todos} setTodos={setTodos} />
      <Footer count={count} totalCount={totalCount}/>
    </div>
  );
}
