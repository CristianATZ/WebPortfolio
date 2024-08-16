import React from 'react';
import SocialButton from '../header/SocialButton'
import ImageContainer from '../header/ImageContainer';

function Header() {
  return (
    <header className='bg-background-light dark:bg-background-dark w-[99vw] h-[100vh] flex flex-col items-center justify-center space-y-10'>
      <div className='w-[75%] h-[75%] flex flex-row'>
        <div className='h-full w-[45%]'>
          <ImageContainer/>
        </div>
  
        <div className='flex flex-col h-full w-[70%] items-center justify-center'>
          <div className='w-[90%] rounded-lg my-5 flex flex-col'>
            <h5 className='text-surface-variant-dark/25 text-8xl font-thin mb-5 text-center'>Welcome!</h5>
            <div className='text-on-background-light w-full text-justify text-lg'>
              <p>My name is Cristian Alexis Torres Zavala. I'm an Android mobile developer based on Guanajuato, Mexico. I have developed couple applications using Kotlin and Jetpack Compose.</p>
              <p><br/>I like to search ways to get more experience and learn how to use new tools that it can help me to create apps.</p>
            </div>
          </div>
  
          <div className='space-x-10'>
              <SocialButton name="instagram" href='https://www.instagram.com/me.scarr/'/>
              <SocialButton name="linkedin" href='https://www.linkedin.com/in/cristian-alexis-torres-zavala-a405a628a/'/>
              <SocialButton name="github" href='https://github.com/CristianATZ'/>
              <SocialButton name="facebook" href='https://www.facebook.com/cris.torres.1610092'/>
              <SocialButton name="gmail" href=''/>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;