import { useRecoilValue } from "recoil";

import { TodoRenderer } from "@/features/todo/components/TodoRenderer";
import { todoState } from "@/features/todo/states/todoState";

type Props = {
  todoId: string;
};

export const TodoItem = (props: Props) => {
  const todo = useRecoilValue(todoState(props.todoId));
  return <TodoRenderer todo={todo} />;
};
