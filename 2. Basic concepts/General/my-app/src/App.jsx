import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {
  const handleCurrentTime = (currentTime) => {
    alert(`Current Time: ${currentTime}`)
  };
  return (
    <div>
      <Welcome name="John" age={90} />
      <AlertClock onButtonClick={handleCurrentTime} />
      <Counter initialCounter={0} incrementAmount={1} decrementAmount={3} resetAmount={10}/>
      <Clock/>
      <MouseClicker/>
    </div>
  );
}
