import React from "react";

export default function Card(props)
{
   return(
    <div className="card">
      <img src={props.imageUrl} className="card--img"/>
      <div className="card--info">
         <div className="card--header">
           <div>
              <img src="./images/Fill 219.png" /> 
              <span> {props.location}</span>
            </div> 
            <a  target="_blank" href={props.googleMapsUrl} className="google--map--link">View on Google Maps</a>
            </div>
         <h1 className="card--title">{props.title}</h1>
         <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
         <p  className="card--description">{props.description}</p>
         
      </div>
    </div>
   )
}