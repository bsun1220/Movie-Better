import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieInfoCard from '../Components/InfoCards/MovieInfoCard';

export default function TitleSearch() {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState("");
    const [titleData, setTitleData] = useState("");
    const [movieForm, setMovieForm] = useState("");

    const handleSubmit = async (e) => {
        if (startDate > endDate){
            setError("START DATE CANNOT BE AFTER END DATE");
            setTitleData("");
            setMovieForm("");
            return;
        }
        const body = { "startYear": startDate, "endYear": endDate };
        const request = await axios.post(`http://localhost:5001/time`, body);
        const data = request.data;
        if (data.length === 0) {
            setError("MOVIES NOT FOUND");
            setTitleData("");
            setMovieForm("");
        }
        else {
            setError("");
            setTitleData(data);
        }
    }

    useEffect(() => {
        if (titleData !== "") {
            const list = []
            titleData.forEach((data) => {

                const { title, year, length, tid, votes, rating } = data;

                list.push(
                    <MovieInfoCard key={tid} title=
                        {title} year={year} length={length}
                        rating={rating} votes={votes} />
                )
            })
            setMovieForm(list);
        }
    }, [titleData])

    return (
        <div className = "body">
                <h1  style = {{"marginTop":"40px"}} >Time Frame Search</h1>
                <p>Find the top 10 movies from a given time frame</p>
                <div className="hi">
                <div className = "row"></div>
                    <form>
                        <input 
                            id = "start"
                            type="number" 
                            min="1900" 
                            max="2023" 
                            step="1" 
                            placeholder={1990}
                            value = {startDate}
                            onChange = {e => setStartDate(e.target.value)}
                            />
                        <label for="start">Start Year</label>
                        <div className = "row"></div>
                         <input 
                            id = "end"
                            type="number" 
                            min="1900" 
                            max="2023" 
                            step="1" 
                            placeholder={2023}
                            value = {endDate}
                            onChange = {e => setEndDate(e.target.value)}
                            />
                        <label for="end">End Year</label>
                    </form>
                    <div className = "row"></div>
                    <button className = "custom-btn btn amber black-text " style={{ "width": "30.5vw" }} onClick={handleSubmit}>
                        Submit</button>
                </div>
                <br></br>
                {movieForm}
                <p style={{ marginTop: "30px", color: "red" }}>{error}</p>
        </div>
    )
}