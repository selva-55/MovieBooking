import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/Login'
import MovieBooking from "./components/booking/movieBooking";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/movieBooking" element={< MovieBooking/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
