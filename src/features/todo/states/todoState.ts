import { atom, atomFamily, selector } from "recoil";

import { Todo } from "@/features/todo/types/Todo";

export const todoIdState = atom<string[]>({
  key: "todoIdState",
  default: [],
});

export const todoState = atomFamily<Todo, string>({
  key: "todoState",
  default: undefined,
});

export const todoCountState = selector<number>({
  key: "todoCountState",
  get: ({ get }) => {
    const todoIds = get(todoIdState);
    return todoIds.length;
  },
});
