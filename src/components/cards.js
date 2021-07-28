import React, {useState, useEffect} from 'react';

import '../styles/card.css';

function Cards(props) {
    console.log('rendered')

    const {cards, handleScoreChange} = props;

    return( //address warning message
        <div className="cards">
            {cards.map((card) => {
                return(
                    <div className="card" onClick={() => {handleScoreChange(card.id)}}>
                        <h1>{card.text}</h1>
                        <img src={card.img} alt="ss" />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;

/*
issue: how to update that card has been selected/
    check that selected card has not already been selected
    pass function to this file that will update/initiate reset based on outcome

make card onclick change score and remount

on mount, render cards in random order

*/