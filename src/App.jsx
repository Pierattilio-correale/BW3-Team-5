import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Components/Sidebar";
import Experience from "./Components/Experience";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Mynavbar";
import NotFound from "./Components/NotFound";
import ExperienceDelite from "./Components/ExperienceDelite";


function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavbar/>
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
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    

  </>
  );
}

export default App;
