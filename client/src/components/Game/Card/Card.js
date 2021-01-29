import React from 'react';
import Item from '../Item/Item'

function Card({card}) {

  return (
    <div>
      <h1>{card.title}</h1> 
      <ul>
          {card.questions.map(question => (
           <li key={question.id}>
              <button data-target={`modal${question.id}`} className="btn modal-trigger">{question.cost}</button>
              <div id={`modal${question.id}`} className="modal">
                <Item key={question.id} question={question}/>
              </div>
          </li>))}
      </ul>
    </div>
  );
}

export default Card;

// <button>{question.cost}</button> 
// <Item key={question.id} question={question}/>
