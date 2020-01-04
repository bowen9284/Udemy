import React from 'react';

const validation = props => {
  let lengthValidationMessage = 'Text too short';

  if (props.currentLength > 5) {
    lengthValidationMessage = 'Text too long';
  }

  return (
    <div>
      <p>{lengthValidationMessage}</p>
    </div>
  );
};

export default validation;
