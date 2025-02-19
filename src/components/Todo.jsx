import { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
    setTodo;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, todo]);
  };
  const handleDelete = (ind) => {
    let filtered = list.filter((ele, i) => i !== ind);
    setList(filtered);
  };

  return (
    <>
      <h1>todo app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" value={todo} onChange={handleChange} />
        <button>Add Item</button>
      </form>
      <div>
        {list.map((ele, ind) => {
          return (
            <div key={ind}>
              <input style={{ color: "green" }} type="checkbox" name="" />
              <span style={{ backgroundColor: "blue", color: "white" }}>
                {ele}
              </span>
              <button onClick={() => handleDelete(ind)}>Delete Item</button>

              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
