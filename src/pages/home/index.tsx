import React, { useRef } from "react";

import { useSpring, to } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import * as S from "./styles";

const tasks = [
  { name: "Pay for rent", done: false },
  { name: "Check emails", done: false },
  { name: "Lunch with emma", done: true },
  { name: "Meditation", done: false },
  { name: "Task 5 1", done: true },
  { name: "Task 6 2", done: false },
  { name: "Lunch with emma 3", done: true },
  { name: "Meditation 4", done: false },
  { name: "Task 5 5", done: true },
  { name: "Task 6 6", done: false },
  { name: "Lunch with emma 7", done: true },
  { name: "Meditation 7", done: false },
  { name: "Task 5 8", done: true },
];

const Home = () => {
  const contentRef = 520;
  const pageRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ down, movement: [, my] }) => {
      const limitBottom = 485 - pageRef.current.getBoundingClientRect().height;

      if (!down && my > 0) {
        set({ y: 0 });
      } else if (!down && my < limitBottom) {
        set({ y: limitBottom });
      } else {
        set({ y: my });
      }
    },
    { initial: () => [0, y.get()] }
  );

  return (
    <S.Home
      ref={pageRef}
      {...bind()}
      style={{ transform: to(y, (y) => `translate3d(0px,${y}px,0)`) }}
    >
      <S.Title>Welcome back :)</S.Title>

      <S.List>
        <h2>Today's tasks </h2>

        {tasks.map(({ name, done }) => (
          <S.Task key={name}>
            <S.TaskCheck checked={done} />
            {name}
          </S.Task>
        ))}
      </S.List>
    </S.Home>
  );
};

export default Home;
