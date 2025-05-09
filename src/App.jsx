import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Components/Sidebar";
import Experience from "./Components/Experience";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Mynavbar";
import NotFound from "./Components/NotFound";
import ExperienceDelite from "./Components/ExperienceDelite";
import Footer from "./Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ProfileSection from "./Components/ProfileSection";
import CompanySearchResults from "./Components/result";
import ScrollActionBar from "./Components/Scrollbar";
import ProfileDetails from "./Components/ProfileDetails";
import Details from "./Components/Details";
import Lavoro from "./Components/Lavoro";
import Messaggistica from "./Components/Messaggistica";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <MyNavbar />
          <ScrollActionBar />
          <main className="flex-grow-1 ">
            <Routes>
              <Route
                path="/"
                element={
                  <Container fluid className="my-4">
                    <Row>
                      <Col
                        sm={12}
                        lg={9}
                        className="d-flex flex-column align-items-center"
                      >
                        <ProfileSection />
                        <Experience />
                        <ProfileDetails />
                      </Col>
                      <Sidebar />
                    </Row>
                  </Container>
                }
              />
              <Route path="experience/:expID" element={<ExperienceDelite />} />
              <Route path="/results" element={<CompanySearchResults />} />
              <Route path="/dev" element={<Lavoro />} />
              <Route path="/details/:detID" element={<Details />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Messaggistica />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
