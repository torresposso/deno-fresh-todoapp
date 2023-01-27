import { DataAPI } from "https://deno.land/x/mongodbdataapi@0.1.1/mod.ts";

export type Todo = {
  _id: string;
  text: string;
  isCompleted: boolean;
};

const instance = DataAPI.init(
  `${Deno.env.get("MONGODB_BASE_URL")}/action`,
  "Cluster0",
  "todo_db",
  Deno.env.get("MONGODB_DATA_API_KEY") || "",
);

export const getAll = async () => {
  const { documents } = await instance.find("todos", {});
  return documents as Todo[];
};

export const createOne = async (text: string) => {
  const document = {
    text,
    isCompleted: false,
  };
  const { insertedId } = await instance.insertOne("todos", document);

  const newTodo: Todo = { ...document, _id: insertedId };
  return newTodo;
};

export const getOne = async (id: string) => {
  const { document } = await instance.findOne("todos", {
    "_id": { "$oid": id },
  });

  return document;
};

export const updateOne = async (id: string, updatedData: unknown) => {
  const { matchedCount, modifiedCount } = await instance.updateOne(
    "todos",
    { "_id": { "$oid": id } },
    { "$set": updatedData },
  );

  return { matchedCount, modifiedCount };
};

export const deleteOne = async (_id: string) => {
  const { deletedCount } = await instance.deleteOne("todos", {
    "_id": { "$oid": _id },
  });

  return deletedCount;
};
