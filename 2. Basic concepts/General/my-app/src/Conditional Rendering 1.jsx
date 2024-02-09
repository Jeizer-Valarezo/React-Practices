import { Age } from "./Age";

export function Conditional_Rendering_1({name, age }) {
  return (
    <div>
      <Age age={age} />

      {age > 18 && <Age age={age} />}

      {Boolean (age) && <Age age={age} />}

      {age > 18 && age < 65 && <Age age={age} />}

      {age > 18 && age < 65 && name === "John" && <Age age={age} />}
    </div>
  );
}
