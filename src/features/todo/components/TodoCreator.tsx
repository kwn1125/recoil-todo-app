import { useState } from "react";
import { useRecoilState } from "recoil";

import { todoListState } from "@/features/todo/states/todoState";

const getKey = () => Math.random().toString(32).substring(2);

export const TodoCreator = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleClick = () => {
    setTodoList([...todoList, { id: getKey(), title: todoTitle }]);
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
