import "./App.css";
import Login from "./Components/Login/Login";
import MainPage from "./Components/MainPage/MainPage";
import Register from "./Components/Register/RegisterPage";
import Comics from "./Components/Comics/Comics";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/Home" element={<MainPage></MainPage>} />
        <Route path="/Register" element={<Register></Register>} />
        <Route path="/Comics" element={<Comics></Comics>} />
      </Routes>
    </div>
  );
}

export default App;
