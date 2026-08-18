import "./App.css";
import HomePage from "./component/HomePage";
import Login from "./component/login";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
