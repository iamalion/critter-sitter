import React from 'react';
import splashPageImgNew from '../images/splash/splashPageImgNew.svg'


function Splash() {
  const splashStyle = {
    backgroundImage: `url(${splashPageImgNew})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };
  return (
      <div style={splashStyle}>
      
      <h1>Track those tails!</h1>
  

      <p>Critter Sitter is the ultimate pet parent's companion. Whether you're the proud owner of a fiesty Fido or a fluffy Fifi, this app is your go-to solution for staying on top of all your pet's needs. With Critter Sitter, you can effortlessly track feeding schedules, daily walks, grooming and vet appointments, and more!
      </p>
      <p>Experience peace of mind and pet care made easy with Critter Sitter. Sign up now and give your furry family member the attention they deserve! 
      </p>

    </div>
  );
}

export default Splash;