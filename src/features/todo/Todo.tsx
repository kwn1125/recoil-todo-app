import { TodoCount } from "@/features/todo/components/TodoCount";
import { TodoCreator } from "@/features/todo/components/TodoCreator";
import { TodoList } from "@/features/todo/components/TodoList";

export const Todo = () => {
  return (
    <div>
      <TodoCreator />
      <TodoCount />
      <TodoList />
    </div>
  );
};
