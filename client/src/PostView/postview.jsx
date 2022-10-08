import React, { useEffect, useState } from 'react';
import "../CSS/postview.css";
import Header from "./header";
export default function Postview() {
  const[data,setData] = useState([]);
  
  const getData = () =>{
    const url = "https://instacloneesh.herokuapp.com/post";
    const httpOptions = {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    }
    fetch(url,httpOptions)
    .then(data=>data.json())
    .then(data=>setData(data.data.reverse()));
  }

  useEffect(()=>{
    getData();
  },[]);
 
  return (
    <>
      <Header/>
     {data.map((item,i) =>
      <div key={i} className='post-conatiner'>
        <div className='post-header'>
          <div className='name-location'>
            <h2 className='name'>{item.name}</h2>
            <p className='location'>{item.location}</p>
          </div>
          <div className='menu-icon'>
            <img id='menu' src='/option.png' alt='menus'/>
          </div>
        </div>
        <div className='img'>
            <img id='post-img' src={`https://instacloneesh.herokuapp.com/post/images/${item.PostImage}`} alt='post-img'/>
        </div>
        <div className='like-msg-date-container common-padding'>
          <div className='like-and-msg'>
            <img className='heart' src='/heart.png' alt='like button'/>
            <img className='heart' src='/send.png' alt='Send button'/>
          </div>
          <div className='date location'>
            <p id='date'>{item.date.split("T")[0]}</p>
          </div>
        </div>
        <div className='likes-and-desc common-padding'>
          <p className='likes location'>{item.likes} likes</p>
          <h2 className='desc'>{item.description}</h2>
        </div>
      </div>)}
    </>
  );
}
