import React from 'react';
import Item from '../Item/Item'

function Card({card}) {

  return (
    <div style={{display: 'flex'}}>
      <h5 style={{width: '250px'}}> {card.title}</h5> 
      <ul style={{display: 'flex'}}>
          {card.questions.map(question => (
           <li style={{marginLeft: '10px'}} key={question.id}>
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
