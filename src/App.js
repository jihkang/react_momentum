import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./components/Login/Login"
import Main from "./components/Main/Main"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="./" element={<Login />} />
        <Route exact path="./main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
