import { atom, selector } from "recoil";

import { Todo } from "@/features/todo/types/Todo";

export const todoListState = atom<Array<Todo>>({
  key: "todoListState",
  default: [],
});

export const todoCountState = selector<number>({
  key: "todoCountState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    return todoList.length;
  },
});
