import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Landing } from "./components/Landing";
import { Profile } from "./components/Profile";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/:uid" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};
