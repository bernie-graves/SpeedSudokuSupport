// import logo from "./logo.svg";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
// import Support from "./Pages/Support";
// import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">
//       <Link to="privacy-policy">Click to view our priovacy policy page</Link>
//       <Link to="support">Click to view our support page</Link>
//       <Routes>
//         <Route path="privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="support" element={<Support />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home"; // Adjust the path as necessary
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Support from "./Pages/Support";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-dark">
        <Container fluid>
          <Navbar.Brand href="/">Speed Sudoku</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/support">Support</Nav.Link>
              <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
