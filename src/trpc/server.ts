import { initTRPC } from "@trpc/server";
import { Context } from "./fetch-context.ts";
import { z } from "zod";
import { createOne, deleteOne, getAll } from "../../utils/todos.ts";
import { todos } from "../../utils/state.ts";

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getAll: t.procedure.query(async () => {
    const fetchedTodos = await getAll();

    return fetchedTodos;
  }),
  createOne: t.procedure.input(z.string()).mutation(async (req) => {
    const newTodo = await createOne(req.input);
    return newTodo;
  }),

  deleteOne: t.procedure.input(z.string()).mutation(async ({ input }) => {
    return await deleteOne(input);
  }),
});

export type AppRouter = typeof appRouter;
