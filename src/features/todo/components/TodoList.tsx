import { useRecoilValue } from "recoil";

import { todoListState } from "@/features/todo/states/todoState";

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="todoList">
      <ul>
        {todoList.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
