import { useRef } from "preact/hooks";
import { trpc } from "@/src/trpc/client.ts";
import { todos } from "../utils/state.ts";

const AddTodo = () => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const newTodo = await trpc.createOne.mutate(input.current?.value!);
        console.log("new todo", newTodo);
        todos.value = [...todos.value, newTodo];
        input.current!.value = "";
      }}
    >
      <input
        class="text-gray-800"
        type="text"
        ref={input}
      />
      <div>
        <input type="submit" value="enviar" />
      </div>
    </form>
  );
};

export default AddTodo;
