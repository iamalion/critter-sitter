import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import PetProfileControl from './PetProfileControl';
import ReactDOM from 'react-dom'
import Navigation from './Navigation';
import Splash from './Splash'
import SignIn from './SignIn';
import SignUp from './SignUp';
import ReusableForm from './ReusableForm'
import PetProfileDetail from './PetProfileDetail';
import UserLanding from './UserLanding';
import { toBeRequired } from '@testing-library/jest-dom/matchers';

function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/add" element={<ReusableForm />} />
          <Route path="/view" element={<PetProfileControl />} />
          <Route path="/pet-profile/:id" element={<PetProfileDetail />} />
          <Route path="/home" element={<UserLanding />} authenticated={toBeRequired} />
        </Routes>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;