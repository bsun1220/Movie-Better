import React from "react";
import Chart from "react-google-charts";

export default function GenreData(props){
    const histogramChartOption = {
        title : `${props.data.genre} Rating Histogram`,
        legend: { position: 'top', maxLines: 2 },
        colors: ['#5D47C7'],
        interpolateNulls: false,
    };

    const lineChartOption = {
        title: `${props.data.genre} Expanding Mean Rating Time Series`,
        legend: {position: 'top', maxLines : 2},
        colors: ['#5D47C7'],
        interpolateNulls: false,
    }

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
                data = {props.data.rating_data}/>
            </div>
            <hr/>
            <div style = {{"borderStyle":"solid", "marginRight":"20px"}}><Chart 
                chartType = "LineChart"
                options = {lineChartOption}
                loader={<div>Loading Chart...</div>}
                width={'30vw'}
                height={'20vh'}
                data = {props.data.expanding_mean}/>
            </div>
            <div style = {{"justifyContent":"flex-start", 
                            "backgroundColor":"white", "padding":"10px", 
                            "borderStyle":"solid", "textAlign":"left"
                            }}>
                <h1 style = {{"fontSize":"20px", "marginBottom":"10px"}}>Most Popular Movies</h1>
                <p style = {{"textAlign":"left"}}>1: {props.data.popular[0][0]} ({props.data.popular[0][1]})</p>
                <p style = {{"textAlign":"left"}}>2: {props.data.popular[1][0]} ({props.data.popular[1][1]})</p>
                <p style = {{"textAlign":"left"}}>3: {props.data.popular[2][0]} ({props.data.popular[2][1]})</p>
                <p style = {{"textAlign":"left"}}>4: {props.data.popular[3][0]} ({props.data.popular[3][1]})</p>
                <p style = {{"textAlign":"left"}}>5: {props.data.popular[4][0]} ({props.data.popular[4][1]})</p>
            </div>
                
            
        </div>
    )
}