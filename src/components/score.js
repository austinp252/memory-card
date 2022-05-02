import React, {useState, useEffect} from "react";

const Score = (props) => {
    const [highScore, setHighScore] = useState(0);
    const {currentScore} = props;

    const testFeature = null;

    useEffect(
        () => {
            if(currentScore > highScore) {
                setHighScore(currentScore);
            }
        },
        [currentScore]
    );
    
    return(
        <div className='score-container'>
            <div className="current-score">
                Score: {currentScore}
            </div>
            <div className="high-score">
                High Score: {highScore}
            </div>
        </div>
    )
}

export default Score;