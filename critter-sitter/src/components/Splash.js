import React from 'react';
import splashPage from '../images/splash/splashPage.svg'


function Splash() {
  const splashStyle = {
    backgroundImage: `url(${splashPage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensures the background covers the entire viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // color: 'white', // Text color on top of the background
    padding: '20px', // Add padding to center the content
  };
  return (
    <div>
      
      <h1>Track those tails!</h1>

      <p>Critter Sitter is the ultimate pet parent's companion. Whether you're the proud owner of a fiesty Fido or a fluffy Fifi, this app is your go-to solution for staying on top of all your pet's needs. With Critter Sitter, you can effortlessly track feeding schedules, daily walks, grooming and vet appointments, and more!
      </p>

      <p>Experience peace of mind and pet care made easy with Critter Sitter. Sign up now and give your furry family member the attention they deserve! 
      </p>

    </div>
  );
}

export default Splash;