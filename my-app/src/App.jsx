import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import UncontrolledInput from "./UncontrolledInput";

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <HelloWorld />
      <Counter />
      <TextInput />
      <h5 style={{ fontSize: "20px" }}>Login Form</h5>
      <LoginForm />
      <h5 style={{ fontSize: "20px" }}>Usare ref</h5>
      <UncontrolledInput />
    </div>
  );
}

export default App;
