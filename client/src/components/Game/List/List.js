import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGameAC } from '../../../redux/actionCreators/gameAC';
import Card from '../Card/Card';

function List() {
  const score = useSelector((state) => state.game.score);

  const frontCards = useSelector((state) => state.game.frontCards);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/game`)
      .then((res) => res.json())
      .then((data) => { dispatch(initGameAC(data)); })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ minHeight: '300px', padding: '30px' }}>
      {frontCards && frontCards.map((card) => <Card key={card.id} card={card} status={true}/>)}
      <p style={{ fontSize: '24px', color: 'red' }}>Очки: {score}</p>
    </div>
  );
}

export default List;
