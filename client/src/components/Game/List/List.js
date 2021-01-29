import React, { useEffect } from 'react';
import { initGameAC } from '../../../redux/actionCreators/gameAC';
import {useDispatch, useSelector} from "react-redux";
import Card from '../Card/Card'

function List(props) {

const frontCards = useSelector((state) => {
  return state.game.frontCards
})

const dispatch = useDispatch()

useEffect(() => {
  fetch(`${process.env.REACT_APP_URL}/api/game`)
    .then(res => res.json())
    .then(data => dispatch(initGameAC(data)))
    .catch(err => console.log(err))
}, [])

  return (
    <>
      {frontCards && frontCards.map(card => <Card key={card.id} card={card}/>)}
    </>
  );
}

export default List;
