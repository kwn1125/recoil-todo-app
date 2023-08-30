import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { todoIdState, todoState } from "@/features/todo/states/todoState";

const getKey = () => Math.random().toString(32).substring(2);

export const TodoCreator = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoIds, setTodoId] = useRecoilState(todoIdState);
  const todoId = getKey();
  const setTodo = useSetRecoilState(todoState(todoId));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleClick = () => {
    setTodoId([...todoIds, todoId]);
    setTodo({ id: todoId, title: todoTitle });
    setTodoTitle("");
  };

  return (
    <div className="todoCreator">
      <input type="text" className="todoTitleInput" onChange={onChange} value={todoTitle} />
      <button type="button" className="addTodoButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
