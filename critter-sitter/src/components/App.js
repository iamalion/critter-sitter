import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import PetProfileControl from './PetProfileControl';
import PetProfileList from './PetProfileList';
import ReactDOM from 'react-dom'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/view-pet-profiles">
            <PetProfileList />
          </Route>
          <Route path="/pet-profile-form">
            <PetProfileControl />
          </Route>
          <Route path="/">
            <PetProfileControl />
          </Route>
        </Routes>
    </Router>
  );
}
// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
