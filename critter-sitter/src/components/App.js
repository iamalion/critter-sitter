import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import PetProfileControl from './PetProfileControl';
import ReactDOM from 'react-dom'
import Navigation from './Navigation';
import HomePage from './HomePage'
import SignIn from './SignIn';
import SignUp from './SignUp';
import ReusableForm from './ReusableForm'
import PetProfileDetail from './PetProfileDetail';

function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/add" element={<ReusableForm />} />
          <Route path="/view" element={<PetProfileControl />} />
          <Route path="/pet-profile/:id" element={<PetProfileDetail />} />
          
          
        </Routes>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;