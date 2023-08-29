import { RecoilRoot } from "recoil";

import { Todo } from "@/features/todo/Todo";

export const App = () => {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
};
