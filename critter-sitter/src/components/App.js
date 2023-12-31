import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetProfileControl from './PetProfileControl';
import Navigation from './Navigation';
import Splash from './Splash'
import SignIn from './SignIn';
import SignUp from './SignUp';
import NewPetProfileForm from './NewPetProfileForm'
import PetProfileDetail from './PetProfileDetail';
import UserLanding from './UserLanding';
import { toBeRequired } from '@testing-library/jest-dom/matchers';
import HealthForm from './HealthForm';

const rootElement = document.getElementById('root') || document.body;

function App() {

  return (
    <div>
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          
          <Route path="/add" element={<NewPetProfileForm />} />
          <Route path="/view" element={<PetProfileControl />} />
          <Route path="/pet-profile/:id" element={<PetProfileDetail />} />
          <Route path="/home" element={<UserLanding />} authenticated={toBeRequired} />
          <Route path="/health" element={<HealthForm />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;