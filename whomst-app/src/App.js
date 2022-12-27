import './App.css';
import images from './images';
import React, { useState } from 'react';
import {shuffle} from 'lodash';
import title from './my_pics/title.PNG';

function App() {
  const [cards] = useState( shuffle([...images]) );

  return (
    <div>
      <img id="title" src={title} alt=""/>
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
