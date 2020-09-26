import React from 'react';
import '../css/videoRow.css';

export default function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
  return (
    <div className="videoRow">
        <img 
        src={image}
        alt={title}
        />
        <div className="videoRow_text">
            <h3>{title}</h3>
            <p className="videoRow_headline">
            { channel }   
            {" "}
            .
            <span className="videoRow_subs">
                <span className="videoRow_subsNo">
                { subs } 
                </span>
                Subscribers
                {" "}
            </span>
            .   {views} Views  
            .   {timestamp}
            </p>

            <p className="videoRow_description">{description}</p>
        </div>
    </div>
  );
}
