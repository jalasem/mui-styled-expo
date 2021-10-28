import Button from "./components/Button";
import TomatoButton from "./components/Button/TomatoButton";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Button>Click me</Button>
      <Button primary>Sign up</Button>
      <Button primary padding="0.75rem 1.5rem">
        Register
      </Button>
      <TomatoButton>Add tomatoes</TomatoButton>
      <TomatoButton padding="0.75rem 1.5rem">Add tomatoes</TomatoButton>
      <Button padding="1rem 2rem">Click me again</Button>
    </div>
  );
};

export default App;
