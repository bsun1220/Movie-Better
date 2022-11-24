import React, {useState, useEffect} from "react";



export default function CommentCard(prop){

  const storedValueAsNumber = Number(localStorage.getItem('likes'));
  const [likes, setLikes] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  );

  const handleLikes = () => {
    setLikes(likes + 1 );
  }
  const handleDislikes = (e) => {
    setLikes(likes-1);
  }

  useEffect(() => {
    localStorage.setItem('likes', String(likes));
  }, [likes]);

    return(<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{prop.data.username}</span>
          <p style = {{"color":"white"}}>{prop.data.content}</p>
          <p style = {{"color":"black", fontWeight: 'bold' }}>Likes: {likes}</p>
        </div>

        <div>

        <button style={{height: '40px', width : '100px'}} className = "custom-btn btn amber black-text" onClick = {handleLikes}>Like</button>
        <button style={{height: '40px', width : '100px'}}className = "custom-btn btn amber black-text" onClick = {handleDislikes}>Dislike</button>
     
        </div>
        
      </div>
    </div>
  </div>)
}

