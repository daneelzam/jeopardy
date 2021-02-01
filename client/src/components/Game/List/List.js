/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGameFetchAC, rightAnsAC } from '../../../redux/actionCreators/gameAC';
import Card from '../Card/Card';

function List() {
  const score = useSelector((state) => state.game.score);
  const gameError = useSelector((state) => state.game.gameError);
  const frontCards = useSelector((state) => state.game.frontCards);
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (games && games.length > 0) {
      games.forEach((game) => {
        if (game.user._id === user._id) {
          dispatch(rightAnsAC(game.score, game.status));
        }
      });
    }
  }, [games]);

  useEffect(() => {
    dispatch(initGameFetchAC());
  }, []);

  return (
    <div style={{ minHeight: '300px', padding: '30px' }}>
      <div className="new badge red">{gameError && gameError}</div>
      {frontCards && frontCards.map((card) => <Card key={card.id} card={card} status={true}/>)}
      <p style={{ fontSize: '24px', color: 'red' }}>Очки: {score}</p>
    </div>
  );
}

export default List;
