import { useEffect, useState } from "preact/hooks";
import { trpc } from "@/src/trpc/client.ts";
import { Todo } from "@/utils/todos.ts";
import TodoItem from "@/islands/TodoItem.tsx";
import { todos } from "../utils/state.ts";

export default function TodoList() {
  useEffect(() => {
    const fetchedTodos = async () => {
      const t = await trpc.getAll.query();

      console.log("set", t);
      todos.value = t;
    };
    fetchedTodos().catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      {todos.value?.map((todo) => (
        <TodoItem
          text={todo.text}
          isCompleted={todo.isCompleted}
          _id={todo._id}
        />
      ))}
    </div>
  );
}
