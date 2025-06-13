
import Todoitems from "./Todoitems";
const Todolist = ({ todos, deleteTodo, toggleComplete, editTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todoitems
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    ))}
  </ul>
);

export default Todolist;
