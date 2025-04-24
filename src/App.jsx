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

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <ScrollActionBar />
        <Routes>
          <Route
            path="/"
            element={
              <Container fluid className="my-4">
                <Row>
                  <Col
                    sm={12}
                    md={9}
                    className="d-flex flex-column align-items-center"
                  >
                    <ProfileSection />
                    <Experience />
                  </Col>
                  <Sidebar />
                </Row>
              </Container>
            }
          />
          <Route path="experience/:expID" element={<ExperienceDelite />} />
          <Route path="/results" element={<CompanySearchResults />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
