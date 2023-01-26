import { Todo } from "../utils/todos.ts";

const TodoItem = ({ text, _id, isCompleted }: Todo) => {
  const markCompleted = () => {
  };
  return (
    <div class="flex space-x-2">
      <div>
        {text}
      </div>
      <button>OK</button>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
