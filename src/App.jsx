import "./App.css";
import HomePage from "./component/HomePage";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<HomePage />} path="/home" />
      </Routes>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
