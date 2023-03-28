import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'

export function NavBar() {
  const location = useLocation()
  
  return (
      <Navbar bg="primary" variant="primary">
          <Navbar.Brand href="/">Iron Bank of Braavos</Navbar.Brand>
          <Nav className="me-auto">

            <OverlayTrigger
              placement={'bottom'}
              overlay={
                <Tooltip >
                  Home page.
                </Tooltip>
              }
            >
            <Nav.Link as={Link} to="/" className={location.pathname === "/" ? 'navbar-active' : ''}>Home</Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger
              placement={'bottom'}
              overlay={
                <Tooltip >
                  Create and manage accounts
                </Tooltip>
              }
            >
            <Nav.Link as={Link} to="/create-account" className={location.pathname === "/create-account" ? 'navbar-active' : ''}>Create Account</Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
              placement={'bottom'}
              overlay={
                <Tooltip >
                  Deposit funds
                </Tooltip>
              }
            >
            <Nav.Link as={Link} to="/deposit" href="/deposit" className={location.pathname === "/deposit" ? 'navbar-active' : ''}>Deposit</Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger
              placement={'bottom'}
              overlay={
                <Tooltip >
                  Witdraw funds
                </Tooltip>
              }
            >
            <Nav.Link as={Link} to="/withdraw" className={location.pathname === "/withdraw" ? 'navbar-active' : ''}>Withdraw</Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger
              placement={'bottom'}
              overlay={
                <Tooltip >
                  View all data
                </Tooltip>
              }
            >
            <Nav.Link as={Link} to="/all-data" className={location.pathname === "/all-data" ? 'navbar-active' : ''}>All Data</Nav.Link>
          </OverlayTrigger>

          </Nav>
      </Navbar>
  )
}
