import React,{useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from "react-bootstrap";
export function Details() {
    const {id} = useParams()
    const[data,setData]=useState({});
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums"+"/"+id)
        .then((Data)=>{
            console.log(Data)
            setData(Data.data)})
    },[id])
    return (  
        <div style={{ width: '40em',marginLeft:"20em", marginTop:"3em", marginBottom:"3em",border:"1px solid goldenrod", height:"15.1em",display:"flex" }}>
            
              <div><img style={{height:"15em",width:"18em"}} src="https://cdn.shopify.com/s/files/1/1228/3134/products/image_c3c8a4de-3087-41bc-9952-91bde1efa5e4_900x.jpg?v=1640083642" /></div> 
              <div style={{margin:"auto"}}>
                 <div style={{fontSize:"1.3em",marginTop:"1em",marginLeft:".2em",marginBottom:"1em"}}> <span style={{fontWeight:"700"}}>Title: </span>{data.title}</div>
                <div style={{fontSize:"1.3em",marginTop:"1em",marginLeft:".2em",marginBottom:"1em"}}><span style={{fontWeight:"700"}}>ID: </span>{data.id}</div>
                <div style={{fontSize:"1.3em",marginTop:"1em",marginLeft:".2em",marginBottom:"1em"}}><span style={{fontWeight:"700"}}>User ID: </span>{data.userId}</div>
              </div>
        </div>
    );
}
