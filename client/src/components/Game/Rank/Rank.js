/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameListFetchAC } from '../../../redux/actionCreators/gameAC';

function Rank() {
  const games = useSelector((state) => state.game.games);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameListFetchAC());
  }, []);
  return (
    <ul className="collection">
      {games && games.map((game) => <li key={game._id} className="collection-item">
        <p>User: {game.user.username}</p>
        <p>Score: {game.score}</p>
        </li>)}
    </ul>
  );
}

export default Rank;
