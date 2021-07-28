import React, {useState, useEffect} from "react";

import Score from './score';
import Cards from './cards';

import '../styles/game.css';
import uniqid from 'uniqid';

const Game = () => {
    const [score, setScore] = useState(0);
    const [cards, setCards] = useState([{
        text: 'Ben Simmons',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/simmobe01.jpg',
        id: 1,
    }, {
        text: 'Charles Barkley',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/barklch01.jpg',
        id: 2,
    }, {
        text: 'Damian Lillard',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/lillada01.jpg',
        id: 3,
    }, {
        text: 'Dwyane Wade',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/wadedw01.jpg',
        id: 4,
    }, {
        text: 'Tacko Fall',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/fallta01.jpg',
        id: 5,
    }, {
        text: 'Kevin Durant',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/duranke01.jpg',
        id: 6,
    }, {
        text: 'Lebron James',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/jamesle01.jpg',
        id: 7,
    }, {
        text: 'James Harden',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/hardeja01.jpg',
        id: 8,
    }, {
        text: 'P.J. Tucker',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/tuckepj01.jpg',
        id: 9,
    }, {
        text: 'Klay Thompson',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/thompkl01.jpg',
        id: 10,
    }, {
        text: 'Joel Embiid',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/embiijo01.jpg',
        id: 11,
    }, {
        text: 'Keljin Blevins',
        img: 'https://www.basketball-reference.com/req/202106291/images/players/blevike01.jpg',
        id: 12,
    }]);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        randomizeCardOrder();
    }, [score])

    const incrementScore = () => {
        setScore(score+1);
    }

    const resetScore = () => {
        setScore(0);
    }

    const handleScoreChange = (id) => {
        const foundCard = selectedCards.filter(card => card === id);
        if(foundCard.length === 0) {
            incrementScore();
            setSelectedCards([id, ...selectedCards]);
        } else {
            resetScore();
            setSelectedCards([]);
        }
    }

    const randomizeCardOrder = () => { //refactor
        let tempCards = cards;
        for(var i = tempCards.length-1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = tempCards[i];
            tempCards[i] = tempCards[j];
            tempCards[j] = temp;
        }
        setCards(tempCards);
    }

    return(
        <div className = 'game-content'>
            <Score currentScore={score}/>
            <Cards className='cards' cards={cards} handleScoreChange={handleScoreChange}/>
        </div>
    )

}

export default Game;