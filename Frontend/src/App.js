import Login from "./Screens/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Screens/Landing page/Landing";
import SignupMentee from "./Screens/registration/SignupMentee";
import Navbar from "./Components/Navbar";
import Domain from "./Screens/DomainSelect/Domain";
import { AuthProvider } from "./contexts/AuthContext";
import Courses from "./Screens/Courses/Courses";
import SelectedSubject from "./Screens/Courses/SelectedSubject/SelectedSubject";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup-mentee" element={<SignupMentee />}></Route>
          <Route path="/domain" element={<Domain />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route
            path="/courses/:coursename"
            element={<SelectedSubject />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
