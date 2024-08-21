import React from "react";

export default function Card(props)
{
   return(
    <div className="card">
      <img src={props.imageUrl} className="card--img"/>
      <div className="card--info">
         <div className="card--header">
            <img src="./images/Fill 219.png" className="card--header--img" /> 
            <span>{props.location}</span> 
            <a  target="_blank" href={props.googleMapsUrl}className="google--map--link">View on Google Maps</a>
            <h1 className="card--title">{props.title}</h1>
            <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
            <p  className="card--des">{props.description}</p>
         </div>
      </div>
    </div>
   )
}