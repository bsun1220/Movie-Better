import React, { useEffect } from "react";
import Chart from "react-google-charts";

export default function DirectorData(props){
    const histogramChartOption = {
        title : `${props.data.director} Rating Histogram`,
        legend: { position: 'top', maxLines: 2 },
        colors: ['#5D47C7'],
        interpolateNulls: false,
    };
    const lineChartOption = {
        title: `${props.data.director}'s Ratings Over Time`,
        legend: {position: 'top', maxLines : 2},
        colors: ['#5D47C7'],
        interpolateNulls: false,
    }
    useEffect(() => {
        console.log(props.data)
    }, [])

    return(
        <div className = "datachart">
            <div style = {{"justifyContent":"flex-start", "backgroundColor":"white", "padding":"10px", "borderStyle":"solid"}}>
                <h1 style = {{"fontSize":"20px", "marginBottom":"10px"}}>Descriptive Statistics</h1>
                <p style = {{"textAlign":"left"}}>Min Rating: {props.data.min}</p>
                <p style = {{"textAlign":"left"}}>Max Rating: {props.data.max}</p>
                <p style = {{"textAlign":"left"}}>Median Rating: {props.data.median}</p>
                <p style = {{"textAlign":"left"}}>Mean Rating: {props.data.mean}</p>
                <p style = {{"textAlign":"left"}}>Standard Deviation: {props.data.std}</p>
            </div>
            <div style = {{"borderStyle":"solid", "marginLeft":"20px"}}><Chart 
                chartType = "Histogram"
                options = {histogramChartOption}
                loader={<div>Loading Chart...</div>}
                width={'40vw'}
                height={'20vh'}
                data = {props.data.rating_list}/>
            </div>
            <hr/>
            <div style = {{"borderStyle":"solid", "marginRight":"20px"}}><Chart 
                chartType = "LineChart"
                options = {lineChartOption}
                loader={<div>Loading Chart...</div>}
                width={'30vw'}
                height={'20vh'}
                data = {props.data.line_list}/>
            </div>
            <div style = {{"justifyContent":"flex-start", 
                            "backgroundColor":"white", "padding":"10px", 
                            "borderStyle":"solid", "textAlign":"left"
                            }}>
                <h1 style = {{"fontSize":"20px", "marginBottom":"10px"}}>Most Recent Movies</h1>
                <p style = {{"textAlign":"left"}}>1: {props.data.rec_five[0]["title"]} ({props.data.rec_five[0]["year"]})</p>
                <p style = {{"textAlign":"left"}}>2: {props.data.rec_five[1]["title"]} ({props.data.rec_five[1]["year"]})</p>
                <p style = {{"textAlign":"left"}}>3: {props.data.rec_five[2]["title"]} ({props.data.rec_five[2]["year"]})</p>
                <p style = {{"textAlign":"left"}}>4: {props.data.rec_five[3]["title"]} ({props.data.rec_five[3]["year"]})</p>
                <p style = {{"textAlign":"left"}}>5: {props.data.rec_five[4]["title"]} ({props.data.rec_five[4]["year"]})</p>
            </div>
        </div>
    )
}