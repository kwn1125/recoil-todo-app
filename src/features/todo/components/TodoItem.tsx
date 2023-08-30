import { useRecoilValue } from "recoil";

import { todoState } from "@/features/todo/states/todoState";

import { TodoRenderer } from "./TodoRenderer";

type Props = {
  todoId: string;
};

export const TodoItem = (props: Props) => {
  const todo = useRecoilValue(todoState(props.todoId));
  return <TodoRenderer todo={todo} />;
};
