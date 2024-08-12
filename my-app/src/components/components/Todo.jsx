import { useState } from "react";
import TodoMap from "./TodoMap";
import TodoForm from "./TodoForm";
import Footer from "./Footer";
import Search from "./Search";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [search,setSearch] = useState("")

  const count = todos.filter((item) => item.state).length;
  const totalCount = todos.length;
  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoMap todos={(search.length == 0)? todos :( todos.filter(item=>(item.name.toLowerCase().includes(search.toLowerCase()))) )} setTodos={setTodos} />
      <Footer count={count} totalCount={totalCount}/>
    </div>
  );
}
