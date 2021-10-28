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
      <Button primary>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        <span>Send now</span>
      </Button>
      <TomatoButton padding="0.75rem 1.5rem">Add tomatoes</TomatoButton>
      <Button padding="1rem 2rem">Click me again</Button>
    </div>
  );
};

export default App;
