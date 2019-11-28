import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom' 

function App() {
  return (
    <Router>
      <Route exact path='/' component={NotesMenu}/>
      <Route exact path='/notes/edit/:id' component={NoteEdit}/>
      <Route exact path='/notes/create' component={NoteCreate}/>
    </Router>
  );
}

export default App;
