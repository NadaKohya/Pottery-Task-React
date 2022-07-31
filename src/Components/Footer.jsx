import React from "react";
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
export function Footer() {
    return (  
        <div>
        <div style={{backgroundColor:"rgba(246, 248, 239, 0.72)",height:"15em",display:"flex"}}>
        <div>
            <img src="https://www.zarla.com/images/zarla-pottery-charm-1x1-2400x2400-20210604-gqyk88vg8dchdm73vywh.png?crop=1:1,smart&width=250&dpr=2" style={{width:"12em",height:"15em"}}></img>
            </div>
            <div className="col-4" style={{marginLeft:"1em",fontSize:"1em",marginTop:"5em"}}>
            <h1 style={{fontFamily:"Georgia, ''Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight:"bold",marginBottom:".8em"}}> Feel free to contact us</h1>
            </div>
            <div class="col-2 text-center" style={{marginTop:"4em"}}>
        <h6 class="text-uppercase mb-0 section"  style={{fontWeight:"bold", fontSize:"1.5em"}}>Menu</h6>
           <ul class="list-unstyled">
             <li>
             <span style={{fontSize:"1.2em"}}>About Us</span>
             </li>
             <li>
                <span style={{fontSize:"1.2em",marginTop:"1.2em"}}>History</span>
            </li>
        </ul>
    </div>
    <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-center" style={{marginTop:"4em"}}> 
        <h6 class="text-uppercase mb-0 section" style={{fontWeight:"bold",marginBottom:"1em", fontSize:"1.5em"}}>Discover</h6>
           <ul class="list-unstyled">
             <li>
             <span style={{fontSize:"1.2em",marginTop:"1.2em"}}>Customer</span>
             </li>
             <li>
                <span style={{fontSize:"1.2em",marginTop:"1.2em"}}>Privacy</span>
            </li>
            <li>
                <span style={{fontSize:"1.2em",marginTop:"1.2em"}}>FAQ's</span>
            </li>
        </ul>
    </div>
    <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-center" style={{marginTop:"4em"}}> 
        <h6 className="text-uppercase mb-0 section" style={{fontWeight:"bold",marginBottom:"1em", fontSize:"1.5em"}}>Follow Us</h6>
           <ul className="list-unstyled">
             <li>
             <span style={{fontSize:"1.2em",marginTop:"1.2em",color:"gold"}}><FaFacebook/></span> &nbsp;&nbsp;<span style={{fontSize:"1.2em",marginTop:"1.2em",color:"gold"}}> <FaTwitter/> </span> &nbsp;&nbsp; <span style={{fontSize:"1.2em",marginTop:"1.2em",color:"gold"}}> <FaInstagram/></span>
             </li>
        </ul>
    </div>
    </div>
        </div>
    );
}
