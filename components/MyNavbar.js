import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const MyNavbar = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">I Cape Agency</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
          <Link href="/study">
            <a className="nav-link">Study</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <style jsx>{``}</style>
  </div>
);

export default MyNavbar;
