mport React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function GetStarted() {
  return (
    <div>
      <h1>Welcome to Pet Profiles!</h1>
      <p>Choose an option below:</p>
      <Link to="/pet-profile-form">
        <button>Get Started</button>
      </Link>
      <Link to="/view-pet-profiles">
        <button>View Pet Profiles</button>
      </Link>
    </div>
  );
}

export default GetStarted;