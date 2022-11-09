import React, {useState, useEffect} from "react";
import axios from "axios";
import CommentCard from "./commentcard";

export default function CommentSection(prop){

    const [content, setContent] = useState("");
    const [comments, setComments] = useState("");

    const handleChange = (e) => {
        setContent(e.target.value);
    }
    const handleEnter = async(e) => {
        const val = content.replace(/\s/g, '');
        if(val !== "" && content.length > 20){
            const req = {"username":prop.data.username, "content":content};
            const url = ("http://localhost:5001/comment");
            await axios.put(url, req);

            const request = await axios.get(url);
            const data = request.data;
            const list = []
            data.forEach((element) => {
                const node = <CommentCard key = {element.username} data = {element}/>
                list.push(node)
            });
            setComments(list);
        }
    }

    useEffect(() => {
        const func = async() => {
            const url = ("http://localhost:5001/comment");
            const request = await axios.get(url);
            const data = request.data;
            const list = []
            data.forEach((element) => {
                const node = <CommentCard key = {element.username} data = {element}/>
                list.push(node)
            });
            setComments(list);
        }
        func();
    }, [])

    return(
        <div className = {"aboutpage"}>
            <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>Comment Section</h1>
            <p style = {{"marginTop":"5px"}}>Submit your comment</p>
            <textarea type = "text" 
                onChange = {handleChange}
                value = {content}
                placeholder = "min 20 characters"
                style = {{"width":"20%"}}/>
            <button className = "custom-btn btn amber black-text" onClick = {handleEnter}>Submit</button>
            {comments}
        </div>
    )
}