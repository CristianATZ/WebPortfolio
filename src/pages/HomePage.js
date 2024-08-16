import React from 'react';
import Header from '../components/header/Header';
import BodyProjects from '../components/body/BodyProjects';
import BodyAboutMe from '../components/body/BodyAboutMe.js'

function HomePage() {
  return (
    <div className='bg-background-light'>
      <Header/>
      <BodyProjects/>
      <BodyAboutMe/>
    </div>
  );
}

export default HomePage;
