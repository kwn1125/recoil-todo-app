import { useRecoilValue } from "recoil";

import { todoCountState } from "@/features/todo/states/todoState";

export const TodoCount = () => {
  const todoCount = useRecoilValue(todoCountState);

  return <div className="todoCount">Todo: {todoCount}</div>;
};
