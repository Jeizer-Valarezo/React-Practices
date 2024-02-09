import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";

export function App() {
  const handleCurrentTime = (currentTime) => {
    alert(`Current Time: ${currentTime}`)
  };
  return (
    <div>
      <Welcome name="John" age={90} />
      <AlertClock onButtonClick={handleCurrentTime} />
    </div>
  );
}
