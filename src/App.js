import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
