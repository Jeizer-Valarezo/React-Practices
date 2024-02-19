import { Container } from "./Container";
import { InteractiveWelcome } from "./InteractiveWelcome";

export function App() {
  
  return (
      <Container title={<h1>My awesome Application</h1>}>
        <InteractiveWelcome/>
      </Container>
    
  );
}
