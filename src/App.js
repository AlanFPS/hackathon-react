import "./App.css";
import Signup from "./components/Signup";
import Checklist from "./components/Checklist";
// import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <p>TO DO LIST MANAGER</p>
        <nav>
          <a href="/">Go Home</a>
          {/* <Link to="/colors">Go to colors</Link> */}
          {/* <Link to="/count">Go to Count</Link> */}
          {/* <Link to="/signup">Go to Signup</Link> */}
        </nav>
      </header>
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

      {/* npm i react-router-dom */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Hover />} /> */}
      {/* <Route path="/greet/:name" element={<Greeting />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="/count" element={<Count />} /> */}
      {/* <Route path="/colors" element={<Checklist />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/*" element={<NotFound />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
