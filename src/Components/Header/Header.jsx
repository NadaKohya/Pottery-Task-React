import { NavLink } from "react-router-dom";
import {Nav, Form, Button, FormControl} from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import "./Header.css";
export function Header () {
    return (
      <div className="d-flex">
             <img src="https://www.zarla.com/images/zarla-pottery-charm-1x1-2400x2400-20210604-gqyk88vg8dchdm73vywh.png?crop=1:1,smart&width=250&dpr=2"  style={{width:"6em",height:"4.5em",marginLeft:"2em",borderBottom:"1px solid goldenrod"}}></img>
      <Nav class="Nav" fill variant="tabs">
      <Nav.Item>
          <NavLink to="/home" style={{textDecoration:"none",margin:"3em", color:"goldenrod",fontWeight:"400"}}>Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <Link to="home/#albums" smooth style={{textDecoration:"none",margin:"3em", color:"goldenrod",fontWeight:"400"}}>Albums</Link>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/form" style={{textDecoration:"none",margin:"3em", color:"goldenrod",fontWeight:"400"}}>Login</NavLink>
      </Nav.Item>
    </Nav>
    </div>
  );
}