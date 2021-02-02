import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item/Item';

function Card({ card }) {
  const status = useSelector((state) => state.game.status);
  return (
    <div style={{ display: 'flex' }}>
      <h5 style={{ width: '250px' }}> {card.title}</h5>
      <ul style={{ display: 'flex' }}>
          {card.questions.map((question) => (
           <li style={{ marginLeft: '10px' }} key={question.id}>
           {status.includes(question.id)
             ? <button data-target={`modal${question.id}`} className='btn modal-trigger disabled'>{question.cost}</button>
             : <button data-target={`modal${question.id}`} className='btn modal-trigger'>{question.cost}</button>}
              <div id={`modal${question.id}`} className="modal">
                <Item key={question.id} question={question}/>
              </div>
          </li>))}
      </ul>
    </div>
  );
}

export default Card;
