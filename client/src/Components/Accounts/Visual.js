import React, {useEffect, useState} from "react";
import BetEdit from "./BetEdit";


export default function VisualPage(props){
    const [betlist, setBetList] = useState("")


    useEffect(() => {
        let i = 1;
        const list = [];
        props.bets.forEach((data) => {
            list.push(<BetEdit key = {i} data = {data} 
                index = {i} user = {props.user} 
                setUserData = {props.setUserData}/>)
            i+=1; 
        });
        setBetList(list);
    }, [props.bets, props.user, props.setUserData]);

    return(
        <div className = {"vis"}>
            <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>Portfolio</h1>
            <p style = {{"marginBottom":"40px"}}>With a starting balance of $1000, 
            you now have ${props.user.balance}. You have {props.bets.length} bets.
            </p>
            {betlist}
        </div>
    )
}