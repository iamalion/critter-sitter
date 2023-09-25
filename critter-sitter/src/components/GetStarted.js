import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function GetStarted() {
  return (
    <div>
      <h1>Critter Sitter</h1>
      {/* <p>Choose an option below:</p> */}
      <Link to="/add">
        <button>Get Started</button>
      </Link>
      <Link to="/view">
        <button>View Pet Profiles</button>
      </Link>
    </div>
  );
}

export default GetStarted;