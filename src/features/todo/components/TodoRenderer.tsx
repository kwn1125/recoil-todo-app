import { memo } from "react";

import { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
};

export const TodoRenderer = memo((props: Props) => {
  return <li>{props.todo.title}</li>;
});
