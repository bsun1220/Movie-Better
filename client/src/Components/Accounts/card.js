import React from "react";
//Card used to show the current bets
export default function Card(prop) {
    return(<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{prop.data.username}</span>
          <p>Name : {prop.data.firstname} {prop.data.lastname}</p>
          <p>Start Date: {prop.data.start}</p>
          <p>Balance : ${prop.data.balance}</p>
        </div>
      </div>
    </div>
  </div>)

}