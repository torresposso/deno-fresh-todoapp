import { Todo } from "./todos.ts";
import { signal } from "@preact/signals";

export const todos = signal<Todo[]>([]);
