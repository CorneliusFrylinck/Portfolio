import React, { useContext, useState } from 'react';


function Card({
    card_details: { img_url, heading, heading_type, main_text}
}) {
    return (
        <div className="card">
            <img className="me" src={require(img_url)} alt="please use a different browser"/>
            {heading}
            {main_text}
        </div>
    );
}

export default Card;
