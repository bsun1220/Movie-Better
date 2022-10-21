import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

export default function GenreData(props){
    const data1 = [["data"], [1], [2], [3], [4], [5], [6]];
    const histogramChartOption = {
        title : `${props.data.genre} Histogram`
    };

    return(
        <div className = "datachart">
            <p>Hi</p>
            <h1>hi</h1>
            <Chart 
                chartType = "Histogram"
                options = {histogramChartOption}
                data = {data1}/>
        </div>
    )
}