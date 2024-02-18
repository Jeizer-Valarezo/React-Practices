import React from "react";
import { Color } from "./Color";

export function Colors({ colorList }) {
  return (
    <div>
      <h1>Colors</h1>
      <ul>
        {colorList.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}
