import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function Like() {
    setCount(count + 1);
  }
  function Dislike() {
    setCount(count - 1);
  }
  return (
    <>
      <div>Count:{count}</div>
      <button
        onClick={() => {
          Like();
        }}
      >
        LIKE
      </button>
      <button
        onClick={() => {
          Dislike();
        }}
      >
        Dislike
      </button>
    </>
  );
};
