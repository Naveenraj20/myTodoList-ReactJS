import { useState } from "react";
import style from "./todoForm.module.css";

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",state:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",state:false});
  }

  return (
    <form onSubmit={handleSubmit} className={style.todoForm}>
      <div style={{display:"flex"}}>
        <input
          type="text"
          onChange={(e) => setTodo({name:e.target.value,state:false})}
          value={todo.name}
          className={style.input}
          placeholder="Enter Todo items..."
          required
        />
        <button type="submit" className={style.btn}>
          ADD
        </button>
      </div>
    </form>
  );
}
