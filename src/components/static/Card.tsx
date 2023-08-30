// import React from 'react';
import "./Card.css";

interface cardProp {
    icons?: any;
    card1?: string;
    card2?: string;
}

const Card:React.FC<cardProp> = ({icons, card1, card2}) => {
  return (
    <div className="card">

        <div className="icon">
            {icons}
        </div>

        <div className="cardText">{card1}</div>

        <div className="cardText2">
            {card2}
        </div>

    </div>
  )
}

export default Card