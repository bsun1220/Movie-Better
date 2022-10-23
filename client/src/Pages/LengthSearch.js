import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieInfoCard from '../Components/InfoCards/MovieInfoCard';

export default function TitleSearch() {

    const [minLength, setMinLength] = useState(null);
    const [maxLength, setMaxLength] = useState(null);
    const [error, setError] = useState("");
    const [titleData, setTitleData] = useState("");
    const [movieForm, setMovieForm] = useState("");

    const handleSubmit = async (e) => {
        if (minLength > maxLength){
            setError("MINIMUM LENGTH CANNOT BE GREATER THAN MAXIMUM LENGTH");
            setTitleData("");
            setMovieForm("");
            return;
        }
        const body = { "minimumDuration": minLength, "maximumDuration": maxLength };
        const request = await axios.post(`http://localhost:5001/length`, body);
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
                <h1  style = {{"marginTop":"40px"}} >Length Search</h1>
                <p>Find the top 10 movies from a given duration bounds</p>
                <div className="hi">
                <div className = "row"></div>
                    <form>
                        <input 
                            id = "minimum"
                            type="number" 
                            min="40" 
                            max="240" 
                            step="5" 
                            placeholder={130}
                            value = {minLength}
                            onChange = {e => setMinLength(e.target.value)}
                            />
                        <label for="minimum">Minimum Length (minutes)</label>
                        <div className = "row"></div>
                         <input 
                            id = "maximum"
                            type="number" 
                            min="40" 
                            max="240" 
                            step="5" 
                            placeholder={160}
                            value = {maxLength}
                            onChange = {e => setMaxLength(e.target.value)}
                            />
                        <label for="end">Maximum Length (minutes)</label>
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