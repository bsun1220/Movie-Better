import React, {useState, useEffect, useContext, useRef} from "react";
import axios from "axios";
import LikeContext from "./comment";


// export const LikeContext = React.createContext()

export default function CommentCard(prop){

  const [likes, setLikes] = useState(prop.data.likes);
  // const [current, setCurrent]= useState(prop)

  // console.log("starting likes", likes)
  // console.log(prop)


// useEffect(() => {
//   console.log('Fruit', likes, prop);
// },[current])

  // setLikes(prop.data.likes);

  const handleLikes = async (e) => {
    let url = "http://localhost:5001/editlikes/";
        url = url + prop.data.username + "/" + prop.data.content + "/";
        await axios.put(url);
        console.log("the id key")
        console.log(prop.data._id)
        const url2 = "http://localhost:5001/comment/" + prop.data._id+ "/"+ prop.data.content;
        const request = await axios.get(url2);
        const data = request.data;
        // var newData= {...current}
        // newData.likes = prop.likes +1 
        // console.log(data)
        // setCurrent(newData)
      
        setLikes(data);

        
  }
  const handleDislikes = async (e) => {
    let url = "http://localhost:5001/editdislikes/";
        url = url + prop.data.username + "/" + prop.data.content + "/";
        await axios.put(url);

        const url2 = "http://localhost:5001/comment/" + prop.data._id+ "/"+ prop.data.content;
        const request = await axios.get(url2);
        const data = request.data;
        console.log(data)
        // setCurrent(data)
        setLikes(data);

  }






  // console.log("this is it new run");
  // console.log(prop.data.content)
  // console.log(likes);
  // console.log(prop.data.likes)

    return( 
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{prop.data.username}</span>
          <p style = {{"color":"white"}}>{prop.data.content}</p>
          <p style = {{"color":"black", fontWeight: 'bold' }}>Likes: {likes}</p>
       
        </div>
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

