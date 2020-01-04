import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import EditExercise from './components/EditExercise';
import CreateEtudiant from './components/CreateEtudiant';
import CreateUser from './components/CreateUser';
import EtudiantList from './components/EtudiantList';

function App() {
  return (
    <Router >
      <Navbar />

      <div className="container">
        <Switch>
          <Route path='/' exact component={EtudiantList} />
          <Route path='/edit/:id' component={EditExercise} />
          <Route path='/create' component={CreateEtudiant} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
