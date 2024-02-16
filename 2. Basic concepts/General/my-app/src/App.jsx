import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import {FocusableInput} from "./FocusableInput";
import {MessageOnMount} from "./MessageOnMount";

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
      <UncontrolledLogin onLogin={onLogin}/>
      <FocusableInput/>
      <MessageOnMount/>
      <Counter initialCounter={0} incrementAmount={1} decrementAmount={1} resetAmount={0}/>
    </div>
  );
}
