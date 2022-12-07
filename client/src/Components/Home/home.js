import React , {useContext} from "react"
import { Link } from "react-router-dom";
import {UserContext } from '../../UserContext';



//Our landing page that describes our website and allows users
//To click a button to begin betting, takes them to a registration page
export default function HomePage(){
    const [user, setUser] =  useContext(UserContext);

    const Introbutton=()=>{
        if(!user){
            return(
            <Link
            to="/register"
            className="custom-btn btn white black-text" 
          >
            Start Betting!
          </Link>
            )
        } else{
            return(
            <Link
            to="/betting"
            className="custom-btn btn green black-text" 
          >
            Start Betting!
          </Link>
            )
        }
    }
    return(<div>
        <div className = {"frontpage"} style = {{"backgroundColor":"#5d47c7"}}>
            <div style = {{"display":"flex", "alignItems":"center"}}>
                <img src =  "icon.svg" height = "100px"/>
                <h1 style = {{"marginLeft": "20px"}}>Movie Better</h1>
            </div>
            <p style = {{"marginTop":"10px"}}>IMDB</p>
            <br></br>

           <Introbutton></Introbutton>

        </div>
        <div className = {"aboutpage"}>
            <div style = {{"display":"flex", "alignItems":"center"}}>
                <img src = "about.svg" height = "40px"/>
                <h1 style = {{"marginLeft": "20px"}}>Background</h1>
            </div>
            <hr/>
            <p> MovieBetter is a web application that allows users to bet on the ratings of movies to be released on IMDB. The metrics 
                exactly become what the IMDB rating of that movie will be 7 days after it is released. MovieBetter provides
                its users with various tools to study the distribution of ratings on existing IMDB movies. For example, on the 
                encyclopedia page, users can make various queries to MovieBetter's database of previously released movies to gain
                insight on the past. Moreover, DataVis provides users the ability to study future movies that users can bet on by 
                studying past actors, genre performance, and directors. 
            </p>
            <p>
                Betting on MovieBetter works as such. MovieBetter currently allows betting on the top 50 most anticipated movies of 2023. 
                Users will be able to bet on several ratings for any movie (given their money balance is above 0). Winners of the bet will 
                include everyone who has bet within 0.1 of the rating. Winnings will be allocated according to the original bet size one has placed.
                For example, if two people bet within 9.4 (the true rating) and person A bet $50 and person B bets $100. Person A will receive 33 percent of the winnings
                and the $50 back while person B will receive $100 back and 67 percent of winnings. Winnings will come from all of the losers of the bet. 
            </p>
            <p>
                To play this game, users will have to create an account and then go on the betting platform to manually put in their bets. 
                As a reminder, players are allowed to place bets on several ratings within the same movie. Creating an account is easy and 
                requires only that the users either goes to the MyAccounts page or Betting Platform page to set up a username and password
                with certain constraints. Before the user bets, they should carefully study by making queries on movie analysis. 
            </p>
        </div>
        <div className = {"aboutpage"} style = {{"backgroundColor":"#e6e8f4"}}>
            <div style = {{"display":"flex", "alignItems":"center"}}>
                <img src = "database.svg" height = "40px"/>
                <h1 style = {{"marginLeft": "20px"}}>Database</h1>
            </div>
            <hr/>
            <p> MovieBetter runs on MongoDB and stores various tables necessary for operations. First, MovieBetter has information for 
                20,000 movies stored across 5 different tables which include information about rating, number of IMDB votes, genre, director, 
                actor, and release year. MovieBetter also stores 60,000 important actors and directors and their corresponding information 
                including their birth year, death year, and most famous movies. Finally, MovieBetter stores important information for the 
                50 movies that users will actually be able to bet on which includes all of the information listed before. 
            </p>
            <p>
                On the user interface side, MovieBetter stores information for its endless amount of users who bet on the platform. This 
                includes login information, current balance amount, distribution of winnings and loses, and bet portfolios. For each 
                of the movies that can be betted on, MovieBetter stores information relating to current bet amount and where 
                people are placing their bets. All in all, the database has around 17 MB of data stored in total, largely originating
                from its large scraping of IMDB data with over 100,000 entries in the database. 
            </p>

        </div>
    </div>);
}