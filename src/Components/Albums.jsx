import React,{useState,useEffect} from "react";
import {Album} from "./Album";
import axios from "axios";

export function Albums() {
    let[album,setAlbum]=useState([])
   let getAllAlbums= async () => {
    try{
    let response = await axios.get("https://jsonplaceholder.typicode.com/albums");
    setAlbum(response.data);
    } catch(error){
        console.log(error);
    }
};
useEffect(()=>{
    getAllAlbums();
},[])
    return (  
        <section id="albums" className="row">
            {album &&
            album.map((album,index)=>{
       return <Album key={index} album={album}></Album>
            })}
        </section>
    );
}
