import React, { useState } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

function App() {
  const [myText, setMyText] = useState('');

  const handleTextChange = event => {
    setMyText(event.target.value);
  };

  const handleDeleteChar = index => {
    const textArray = myText.split('');
    textArray.splice(index, 1);

    const textString = textArray.join('');
    setMyText(textString);
  };

  let chars = (
    <div>
      {myText.split('').map((t, index) => {
        return (
          <Char key={index} click={() => handleDeleteChar(index)} letter={t} />
        );
      })}
    </div>
  );

  return (
    <div className="App">
      <ol>
        <li>
          Create an input field (in App component) with a change listener which
          outputs the length of the entered text below it (e.g. in a paragraph).
        </li>
        <li>
          Create a new component (=> ValidationComponent) which receives the
          text length as a prop
        </li>
        <li>
          Inside the ValidationComponent, either output "Text too short" or
          "Text long enough" depending on the text length (e.g. take 5 as a
          minimum length)
        </li>
        <li>
          Create another component (=> CharComponent) and style it as an inline
          box (=> display: inline-block, padding: 16px, text-align: center,
          margin: 16px, border: 1px solid black).
        </li>
        <li>
          Render a list of CharComponents where each CharComponent receives a
          different letter of the entered text (in the initial input field) as a
          prop.
        </li>
        <li>
          When you click a CharComponent, it should be removed from the entered
          text.
        </li>
      </ol>
      <hr />
      <input
        type="text"
        onChange={event => handleTextChange(event)}
        value={myText}
      />
      <p>{myText.length}</p>
      <Validation currentLength={myText.length} />
      {chars}
    </div>
  );
}

export default App;
