import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Sidebar from "./Components/Sidebar"
import Experience from "./Components/Experience"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyNavbar from "./Components/Mynavbar"
import NotFound from "./Components/NotFound"
import ExperienceDelite from "./Components/ExperienceDelite"
import Footer from "./Components/Footer"
import Messaggistica from "./Components/Messaggistica"
import "@fortawesome/fontawesome-free/css/all.min.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <MyNavbar />
          <main className="flex-grow-1 container mt-4">
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
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Messaggistica />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
