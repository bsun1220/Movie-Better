import React, {useEffect, useState} from "react";
import GenreAnalysis from "./genre_analysis";
import ActorAnalysis from "./actor_analysis";
import DirectorAnalysis from "./director_analysis";

export default function MovieDesc(props){
    const [page, setPage] = useState("start");
    const [pageElement, setPageElement] = useState("");

    useEffect(() => {
        if (page === "start"){
            const element = <div></div>
            setPageElement(element);
        }
        else if (page === "genre"){
            const element = <GenreAnalysis genre = {props.genre}/>;
            setPageElement(element);
        }
        else if (page === "actors"){
            const element = <ActorAnalysis actors = {props.actors}/>
            setPageElement(element);
        }
        else if (page === "directors"){
            const element = <DirectorAnalysis directors = {props.directors}/>
            setPageElement(element);
        }

    }, [page]);

    const setGenre = (e) =>{
        setPage("genre");}
    const setDirectors = (e) =>{
        setPage("directors");}
    const setActors = (e) =>{
        setPage("actors");}

    return(
        <div style = {{"width":"100%", "display":"flex", "flexDirection":"column", "alignItems":"center"}}>
            <div className = "desc">
                <h1>{props.title} (2023)</h1>
                <p> <i>{props.genre}</i></p>
                <hr/>
                <p>{props.des}</p>
                <div className = "space"/>
                    <p style = {{"fontSize":"12px"}}>Directors: {props.directors}</p>
                    <p style = {{"fontSize":"12px"}}>Actors: {props.actors}</p>
                </div>
            <div className = "buttonSelection">
                <button onClick = {setGenre}>Genre</button>
                <button onClick = {setDirectors}>Directors</button>
                <button onClick = {setActors}>Actors</button>
            </div>
            {pageElement}
        </div>)
}