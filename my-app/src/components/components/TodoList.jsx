import style from "./todoList.module.css";

export default function TodoList({ item, todos, setTodos }) {
  function delFun(item) {
    setTodos(
      todos.filter((i) => {
        return i.name !== item.name;
      })
    );
  }
  function handleClick(item) {
    setTodos(
      todos.map((i) =>
        i.name === item.name ? { ...i, state: !i.state } : { ...i }
      )
    );
  }
  const className = item.state ? style.cross : "";
  return (
    <h5 className={style.outer}>
      <div className={style.todoItems}>
        <span onClick={() => handleClick(item)} className={className}>
          {item.name}
        </span>
      </div>
      <div className={style.divBtn}>
        <button onClick={() => delFun(item)} className={style.btn}>
          X
        </button>
      </div>
    </h5>
  );
}
