import { useState } from "react";
import Box from "./components/Box";
import Input from "./components/Input";
import Text from "./components/Text";

function App() {
  const items = ["One", "Two", "Three", "Four"];

  const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
  const boxes = Array.from({ length: 10 }, () => ({
    number: Math.floor(Math.random() * 100),
    color: getRandomColor()
  }));

  const [text, setText] = useState("");

  return (
    <div>
      {items.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {boxes.map((box, index) => (
          <Box key={index} number={box.number} color={box.color} />
        ))}
      </div>

      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Text value={text} />
    </div>
  );
}

export default App;
