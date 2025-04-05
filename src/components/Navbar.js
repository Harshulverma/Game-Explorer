
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

const NavigationBar = ({ onSearch }) => {
  const { isSignedIn } = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        {/* Left Side - Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          🎮 Game Explorer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {isSignedIn && <Nav.Link as={Link} to="/library">📚 Library</Nav.Link>}
          </Nav>

          {/* Middle - Search Bar */}
          <Form className="d-flex mx-auto" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Search Games..."
              className="me-2"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="primary" type="submit">Search</Button>
          </Form>

          {/* Right Side - Authentication */}
          {isSignedIn ? <UserButton afterSignOutUrl="/" className="ms-3" /> : <SignInButton className="btn btn-primary text-white px-3 ms-2" />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
