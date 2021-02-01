import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerFetchAC } from '../../../redux/actionCreators/gameAC';

function Item({ question }) {
  const [answer, setAnswer] = useState('');
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const answerHandler = (event) => {
    const newState = event.target.value;
    setAnswer(newState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(answerFetchAC({ question, answer, user }));
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
