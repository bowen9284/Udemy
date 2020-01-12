import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //http request could go here...
    // setTimeout(() => {
    //   alert('Saved Data');
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup in 2nd useEffect');
    };
  });

  // useEffect can be used as many times as you want

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength < 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
