import React, {useState, useEffect} from "react";
import axios from "axios";


export const LikeContext = React.createContext()

export default function CommentCard(prop){

  // const storedValueAsNumber = Number(localStorage.getItem('likes'+comID));
  const [likes, setLikes] = useState(
    prop.data.likes
    // Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  );


  const handleLikes = async (e) => {
    setLikes(likes+1);
    let url = "http://localhost:5001/editlikes/";
        url = url + prop.data.username + "/" + prop.data.content + "/";
        await axios.put(url);
        // setLikes(likes);
  }
  const handleDislikes = async (e) => {
    setLikes(likes-1);
    let url = "http://localhost:5001/editdislikes/";
        url = url + prop.data.username + "/" + prop.data.content + "/";
        await axios.put(url);

  }

  // useEffect(() => {
  //   localStorage.setItem('likes'+comID, String(likes));
  // }, [likes]);

    return(<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <LikeContext.Provider value={likes}>
        <div class="card-content white-text">
          <span class="card-title">{prop.data.username}</span>
          <p style = {{"color":"white"}}>{prop.data.content}</p>
          <p style = {{"color":"black", fontWeight: 'bold' }}>Likes: {likes}</p>
       
        </div>
        </LikeContext.Provider>
        <div>
         
        <button style={{height: '40px', width : '90px'}} className = "custom-btn-square btn amber black-text" onClick = {handleLikes}>Like</button>
        <button style={{height: '40px', width : '90px'}}className = "custom-btn-square btn amber black-text" onClick = {handleDislikes}>Dislike</button>
        <br></br>
        <br></br>
        </div>
        
      </div>
    </div>
  </div>)
}

