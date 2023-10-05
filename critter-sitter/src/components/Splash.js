import React from 'react';
import splashPageImgNew from '../images/splash/splashPageImgNew.svg'
import NewSplash from '../images/splash/NewSplash.svg'
import { Container } from '../styles/Container.style';
import { Logo } from '../styles/Navigation.style';


function Splash() {
  const splashStyle = {
    backgroundImage: `url(${NewSplash})`,
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
      
      <Logo>Track those tails!</Logo>
  
      <Container>
      <p>Critter Sitter is the ultimate pet parent's companion. Whether you're the proud owner of a fiesty Fido or a fluffy Fifi, this app is your go-to solution for staying on top of all your pet's needs. With Critter Sitter, you can effortlessly track feeding schedules, daily walks, grooming and vet appointments, and more!
      </p>
      <p>Experience peace of mind and pet care made easy with Critter Sitter. Sign up now and give your furry family member the attention they deserve!
        
      </p>
      </Container>

    </div>
  );
}

export default Splash;