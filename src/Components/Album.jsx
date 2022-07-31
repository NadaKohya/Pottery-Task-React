import React from 'react';
import { Card, Button} from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';

export function Album(props) {
    let{album}=props;
    let{userId,id,title}=album;
 
    return (
    <div style={{marginBottom:"3em"}} className="col-4">
    <div style={{display:"flex",marginLeft:"3em",width:"80%"}}>
        <div>
            <Card style={{ width: '18rem',margin:"01.5em", height:"25em" }}>
                <Card.Img variant="top" />
                <Card.Body>
                <Card.Img variant="top"  style={{height:"15em"}} src="https://cdn.shopify.com/s/files/1/1228/3134/products/image_c3c8a4de-3087-41bc-9952-91bde1efa5e4_900x.jpg?v=1640083642" />
                    <Card.Title style={{fontSize:"1.3em",marginTop:"1em",marginLeft:".2em",marginBottom:"1em"}}>{title}</Card.Title>
                    <Button style={{backgroundColor:"goldenrod", border:"1px solid goldenrod",marginLeft:"4.4em"}}><Link to={`details/${id}`} style={{color:"white",fontWeight:"700"}}>Details</Link></Button>
                </Card.Body>
            </Card>
        </div>
        </div>
        </div>  
        );
}