import React, { useRef } from 'react';
import Item from '../Item/Item'

function Card({card}) {
    const btn = useRef();
  return (
    <div>
      <h1>{card.title}</h1> 
      <ul>
          {card.questions.map(question => (
           <li key={question.id}>
              <button ref={btn} data-target={`modal${question.id}`} className="btn modal-trigger">{question.cost}</button>
              <div id={`modal${question.id}`} className="modal">
                <Item btn={btn} key={question.id} question={question}/>
              </div>
          </li>))}
      </ul>
    </div>
  );
}

export default Card;

// <button>{question.cost}</button> 
// <Item key={question.id} question={question}/>
