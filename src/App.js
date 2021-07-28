import Header from './components/header';
import Game from './components/game';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Game/>
    </div>
  );
}

export default App;

/*
Arch:
  - header
  - game content
    functions:
      - randomize order of cards
      - render cards
      - increment score
      - set score to 0
      - checkIfCorrectPick
      - resetPicks


      return -> randomly ordered cards
      onclick of card:
        if id isnt in list of used ids, increase score
        if id is in list of used ids, set score to 0
        remount component



    - score
      - best score
      - current score
    - cards (randomize on mount, mount initially and remount onclick of card)
      - img
      - name
  - footer
*/
