import React, {useEffect, useState, useContext} from "react";
import BetEdit from "./BetEdit";
import { UserProvider,UserContext } from '../../UserContext';


export default function VisualPage(props){
    const [betlist, setBetList] = useState("")
    const [user, setUser] =  useContext(UserContext);


    useEffect(() => {
        let i = 1;
        const list = [];
        props.bets.forEach((data) => {
            list.push(<BetEdit key = {i} data = {data} 
                index = {i} user = {props.user} 
                setUser = {props.setUser}/>)
            i+=1; 
        });
        setBetList(list);
    }, [props.bets, props.user, props.setUser]);

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