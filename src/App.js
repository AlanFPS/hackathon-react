import "./App.css";
import Signup from "./components/Signup";
import Checklist from "./components/Checklist";

function App() {
  return (
    <div>
      <nav>
        <h1>Sign Up</h1>
        <Signup />
        <br />
        {/* <nav> */}
        <h1>To-do List</h1>
        {/* </nav> */}
        <Checklist />
      </nav>
    </div>
  );
}

export default App;
