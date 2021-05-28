import {Link} from "react-router-dom";
import {Navbar , Nav} from "react-bootstrap";

export default function MainNav() {
	return(
		<Navbar bg="light" expand="md">
		  <Navbar.Brand as={Link} to="#home">React-Bootstrap</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link as={Link} to="/transactions">Transactions</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart(0)</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}