import { Todo } from "../utils/todos.ts";
import DeleteTodo from "./DeleteTodo.tsx";

const TodoItem = ({ text, _id, isCompleted }: Todo) => {
  const markCompleted = () => {
  };
  return (
    <div class="flex space-x-2">
      <div>
        {text}
      </div>
      <button>OK</button>
      <DeleteTodo _id={_id} />
    </div>
  );
};

export default TodoItem;
