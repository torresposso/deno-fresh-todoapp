import { useState } from "preact/hooks";
import { trpc } from "@/src/trpc/client.ts";
import { todos } from "../utils/state.ts";

const AddTodo = () => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const newTodo = await trpc.createOne.mutate(text);
        console.log("new todo", newTodo);
        todos.value = [...todos.value, newTodo];
        return setText("");
      }}
    >
      <input
        class="text-gray-800"
        type="text"
        value={text}
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
      />
      <div>
        <input type="submit" value="enviar" />
      </div>
    </form>
  );
};

export default AddTodo;
