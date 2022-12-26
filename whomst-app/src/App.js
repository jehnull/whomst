import './App.css';
import images from './images';
import React, { useState } from 'react';
import {shuffle} from 'lodash';

function App() {
  const [cards,setCards] = useState( shuffle([...images]) );

  return (
    <div>
      <h1>WHOMST</h1>
      <div className="board">
        {cards.map((card,index) => {
          return (
            <div className={"card-outer"}>
              <div className="card">
                <div className="front">
                  <img id="pic" src={card} alt=""/>
                </div>
                <div className="back">
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default App;
