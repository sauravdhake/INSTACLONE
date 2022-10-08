import React from 'react'
import { useState } from 'react'
import Axios from "axios"
import "../CSS/addpost.css"
import Header from "./header";
import {useNavigate} from 'react-router-dom';

const Addpost = () => {
    const [name,setName] = useState("");
    const [location,setlocation] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState();
    const [saving,setSaving] = useState("");
    let navigate = useNavigate()
    const sendData = async (e) =>{
        e.preventDefault();
        setSaving("Saving...");
        const data = new FormData();
        data.append("name",name);
        data.append("location",location);
        data.append("description",description);
        data.append("PostImage",image);

        await Axios.post("https://instacloneesh.herokuapp.com/post",data)
        navigate("/postview");
        setSaving("");


    }
    

    
  return (
    <div>
        <Header/>
        <form className='addposts-form' encType="multipart/form-data">
            <div className="input-img">
                <input onChange={e=>setImage(e.target.files[0])} type="file" name="image" id="image" style={{"border":"1px solid black"}}/>
            </div>
            <div className="name-location-input">
                <input onChange={e=>setName(e.target.value)}  type="text" name="name" id="name" placeholder='Author'/>
                <input onChange={e=>setlocation(e.target.value)} type="text" name="location" id="location" placeholder='Location'/>
            </div>
            <div className="description-input">
                <input onChange={e=>setDescription(e.target.value)} type="text" name="description" id="description" placeholder='Description'/>
            </div>
            <button id='post-btn' onClick={sendData}>
                Post
            </button>
            <label>{saving===""?"":saving}</label>
            
        </form>
    </div>
  )
}

export default Addpost