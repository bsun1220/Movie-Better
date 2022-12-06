import React, {useState, useEffect,useContext} from "react";
import axios from "axios";
import CommentCard from "./commentcard";
import { UserProvider,UserContext } from '../../UserContext';

// export const LikeContext = React.createContext(null)

export default function CommentSection(prop){

    const [content, setContent] = useState("");
    const [comments, setComments] = useState("");
    const [likes, setLikes] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [user] = useContext(UserContext);

    const handleChange = (e) => {
        setContent(e.target.value);
    }
    const handleEnter = async(e) => {
        const val = content.replace(/\s/g, '');
        if(!user){
            setErrorMessage(<p style = {{"color":"red"}}>Login to leave a comment</p>)
        } 
        else if(content.length<=10){
            setErrorMessage(<p style = {{"color":"red"}}>Comment must be greater than 10 characters</p>)
        } else{
            setErrorMessage("")
        if(val !== "" && content.length > 10){
            const req = {"username":prop.data.username, "content":content, "likes": likes};
            const url = ("http://localhost:5001/comment");
            await axios.put(url, req);

            const request = await axios.get(url);
            const data = request.data;
            const list = []
            data.forEach((element) => {
                const node = <CommentCard key = {element._id} data = {element} likes={element.likes}/>
                list.push(node)
            });
            setComments(list);
        }
    }
    }

    
    useEffect(() => {
        const func = async() => {
            setLikes(0);
            const url = ("http://localhost:5001/comment");
            const request = await axios.get(url);
            const data = request.data;
            const list = []
            data.forEach((element) => {
                const node = <CommentCard key = {element._id} data = {element} likes={element.likes}/>
                list.push(node)
            });
            setComments(list);
        }
        func();
    }, [])

    return(
        <div className = {"aboutpage"}>
            <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>Comment Section</h1>
            {errorMessage}
            <p style = {{"marginTop":"5px"}}>Submit your comment</p>
            <textarea type = "text" 
                onChange = {handleChange}
                value = {content}
                placeholder = "min 20 characters"
                style = {{"width":"20%"}}/>
        <br></br>
            <button className = "custom-btn btn amber black-text" onClick = {handleEnter}>Submit</button>
            {comments}
        </div>
    )
}