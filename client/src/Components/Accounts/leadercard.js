import React, {useState, useEffect} from "react";

export default function LeaderCard(prop) {

    const [data, setData] = useState("");


    useEffect(() => {
        const lst = []
        if (prop.data.length === 0){

            const content = prop.content;

            const lst = [];
            lst.push(<p key = {1}>-  </p>)
            lst.push(<p key = {2}>- </p>)
            lst.push(<p key = {"content"}>{content}</p>)
            lst.push(<p key = {3}>  -</p>)
            lst.push(<p key = {4}>-   </p>)
            setData(lst);
            return;
        }
        let i = 1
        let amount = prop.data;
        amount.forEach((point) => {
            const element = <p key = {i}>{i}. {point[0]} - {point[1]}</p>
            lst.push(element);
            i += 1;
        });
        setData(lst);
    }, [prop.data]);

    return(<div class="row">
    <div class="col s12 m3">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{prop.title}</span>
          {data}
        </div>
      </div>
    </div>
  </div>)

}