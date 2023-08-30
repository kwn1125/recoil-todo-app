import { useRecoilValue } from "recoil";

import { TodoItem } from "@/features/todo/components/TodoItem";
import { todoIdState } from "@/features/todo/states/todoState";

export const TodoList = () => {
  const todoIds = useRecoilValue(todoIdState);
  return (
    <div className="todoList">
      <ul>
        {todoIds.map((todoId) => (
          <TodoItem key={todoId} todoId={todoId} />
        ))}
      </ul>
    </div>
  );
};
