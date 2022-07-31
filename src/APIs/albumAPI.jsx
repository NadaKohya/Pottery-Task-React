import axios from "axios";
let baseUrl ="https://jsonplaceholder.typicode.com/albums";
let get =()=>axios.get(`${baseUrl}/album`);
let getAlbumByID=(id)=>axios.get(`${baseUrl}/album/${baseUrl}`);

export let AlbumAPI={
    get,
    getAlbumByID
};