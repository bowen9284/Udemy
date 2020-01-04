import React from 'react';
import './UserOutput.css';

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p onClick={props.click}>Here is paragraph 1 with user:{props.userName}</p>
      <p>Here is paragraph 2</p>
    </div>
  );
};

export default userOutput;
