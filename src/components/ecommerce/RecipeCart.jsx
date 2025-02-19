import { useState } from "react";

export default function RecipeCart({ data }) {
  return (
    <div>
      <div>
        <p> {data.quantity >= 1 ? `Quantity:${data.quantity}` : ""}</p>
        <p>Name : {data.name}</p>
        <p>Rating : {data.rating}</p>
        <p>Cusine : {data.cuisine}</p>
        <img src={data.image} alt="" height="200px" width="200px" />
        <br />
      </div>
    </div>
  );
}
