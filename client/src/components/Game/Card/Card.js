import React from 'react';
import Item from '../Item/Item'

function Card(props) {
  return (
    <div>
      <h1>Card name</h1> 
      <ul>
        <li>
          <Item/>
        </li>
      </ul>
    </div>
  );
}

export default Card;
