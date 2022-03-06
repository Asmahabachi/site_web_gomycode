import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Container, Nav,NavDropdown} from 'react-bootstrap'
import Logo from "./img/Logo.png";

function NavBar() {
  return (
    <Navbar className="navbackground" collapseOnSelect expand="lg" >
  <Container>
   <Navbar.Brand className="nav-logo" >
        <img src={Logo} width="100" height="100" className='logoarch'/>
      <div class="top-bar sticky">
            <span className="nav-title">LEYLA NJIM</span>
            <span className="nav-text">Architecte d'intérieur </span>
      </div>
   </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     
    <Nav>
    <Nav className="me-auto"> 
    <Nav.Link as={Link} to="/">Acceuil</Nav.Link>
    <Nav.Link as={Link} to='/LeylaNjim' >LeylaNjim</Nav.Link>
    
    <NavDropdown title={`Prestations`} id="collasible-nav-dropdown">
          <NavDropdown.Item as={Link} to='/Agencement & de locaux professionnels' >Agencement de locaux professionnelss</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/Décorattion & aménagement pour particulier' >Décorattion & aménagement pour particulier</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/Information' >Information</NavDropdown.Item>
          
        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
           <Nav.Link as={Link} to='/Forfaits' >Forfaits</Nav.Link>
           <Nav.Link as={Link} to='/Réalisations'>Réalisations</Nav.Link>
           <Nav.Link as={Link} to='/Devis'>Devis</Nav.Link>
           <Nav.Link as={Link} to='/Contacts' >Contacts</Nav.Link>
           </Nav> 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar