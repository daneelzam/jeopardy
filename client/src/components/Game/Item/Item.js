import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rightAnsAC } from '../../../redux/actionCreators/gameAC';

function Item({ question }) {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const answerHandler = (event) => {
    const newState = event.target.value;
    setAnswer(newState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/api/game/${question.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (answer.trim().toLowerCase() === data.answer.trim().toLowerCase()) {
          dispatch(rightAnsAC(question.id, question.cost));
        } else {
          dispatch(rightAnsAC(question.id));
        }
      });
  };
  return (
    <div>
      <form onSubmit={submitHandler} style={{ minHeight: '300px', padding: '30px' }}>
       <span style={{ fontSize: '24px' }}>{question.title}</span>
        <input onChange={answerHandler} value={answer}/>
        <button className="modal-close waves-effect waves-green btn">Ответить</button>
      </form>
    </div>
  );
}

export default Item;
