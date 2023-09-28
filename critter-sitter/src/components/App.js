import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import PetProfileControl from './PetProfileControl';
import ReactDOM from 'react-dom'
import GetStarted from './GetStarted'
import ReusableForm from './ReusableForm'

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/add" element={<ReusableForm />} />
        <Route path="/view" element={<PetProfileControl />} />
        </Routes>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;