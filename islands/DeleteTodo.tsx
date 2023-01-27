import { X } from "@/components/Icons.tsx";
import { trpc } from "@/src/trpc/client.ts";
import { todos } from "../utils/state.ts";

const DeleteTodo = ({ _id }: { _id: string }) => {
  const handleDelete = async (_id: string) => {
    const deleted = await trpc.deleteOne.mutate(_id);
    if (deleted) {
      console.log("about to update", _id);
      todos.value = todos.value.filter((t) => t._id !== _id);
    }
  };
  return (
    <div class="flex space-x-2">
      <button onClick={() => handleDelete(_id)}>
        <X />
      </button>
    </div>
  );
};

export default DeleteTodo;
