import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

export function App() {
  const handleCurrentTime = (currentTime) => {
    alert(`Current Time: ${currentTime}`)
  };
  const onLogin = (loginData) => {
    console.log("Login data:", loginData);
  };
  return (
    <div>
      <InteractiveWelcome/>
      <AlertClock onButtonClick={handleCurrentTime} />
      <UncontrolledLogin onLogin={onLogin}/>
    </div>
  );
}
