import TodoList from "./TodoList";

export default function TodoMap({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.state) - Number(b.state));

  return sortedTodos.map((item) => (
    <div>
      <TodoList key={item.name} item={item} todos={todos} setTodos={setTodos} />
    </div>
  ));
}
