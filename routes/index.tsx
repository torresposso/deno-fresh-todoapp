import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import AddTodo from "../islands/AddTodo.tsx";
import TodoList from "../islands/TodoList.tsx";

import { getAll, Todo } from "../utils/todos.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const todos = await (await fetch(req.url + "api/todos")).json();

    return ctx.render({ todos });
  },

  async POST(req, ctx) {
    return await ctx.render();
  },
};

export default function Home({ data }: PageProps) {
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
