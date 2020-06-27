import React from 'react';
import './App.css';
import Person from "./Person/Person.js";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a react app</h1>
      <Person name="Max" age="28"/>
      <Person name="Manu" age="29">My hobbies are dope</Person>
      <Person name="Stephanie" age="26"/>
    </div>
  );
}

export default App;
