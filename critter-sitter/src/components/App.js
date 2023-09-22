import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import PetProfileControl from './PetProfileControl';
import PetProfileList from './PetProfileList';
import ReactDOM from 'react-dom'
import GetStarted from './GetStarted'

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/add" element={<PetProfileControl />} />
        <Route path="/view" element={<PetProfileList />} />
        </Routes>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
