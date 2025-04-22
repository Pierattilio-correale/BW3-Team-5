import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Components/Sidebar";
import Experience from "./Components/Experience";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExperienceDelite from "./Components/ExperienceDelite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Experience />
                <Sidebar />
              </>
            }
          />
          <Route path="experience/:expID" element={<ExperienceDelite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
