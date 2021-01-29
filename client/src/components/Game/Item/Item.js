import React from 'react';

function Item({question}) {
  return (
    <div>
      {question.title}
    </div>
  );
}

export default Item;
