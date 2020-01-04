import React from 'react';

const userInput = props => {
  const style = {
    backgroundColor: 'lightgray',
    width: '100%',
    padding: '10px 0',
    border: '2px solid black'
  };

  return (
    <div style={style}>
      <input type="text" onChange={props.changed} value={props.changedName} />
    </div>
  );
};

export default userInput;
