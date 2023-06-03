import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUpForm />
        {/* <LoginForm /> */}
      </header>
    </div>
  );
}

export default App;
