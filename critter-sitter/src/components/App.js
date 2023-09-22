import React from 'react';
import '../App.css';
import PetProfileControl from './PetProfileControl';
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <PetProfileControl />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
