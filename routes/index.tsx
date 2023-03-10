import { Handlers, PageProps } from "$fresh/server.ts";
import AddTodo from "../islands/AddTodo.tsx";
import TodoList from "../islands/TodoList.tsx";

export default function Home() {
  return (
    <>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <TodoList />
        <AddTodo />
      </div>
    </>
  );
}
