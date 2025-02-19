import { useState, useEffect } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </>
  );
}
