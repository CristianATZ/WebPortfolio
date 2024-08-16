import React from 'react';
import TaskifyIcon from '../../assets/t_noti.png'
import ProjectCard from './ProjectCard'

function BodyProjects() {
    return (
        <body className='bg-surface-variant-light h-screen w-full'>
            <div className='p-5 w-full flex justify-center'>
                <p className='text-on-secondary-container-light text-6xl font-black'>mobile developer portfolio</p>
            </div>

            <div className='w-full flex flex-row justify-center space-x-20 p-10'>
                <ProjectCard src={TaskifyIcon} text={'Taskify'}/>
                <ProjectCard src={TaskifyIcon} text={'Stream Routes'}/>
                <ProjectCard src={TaskifyIcon} text={'Acceso Login'}/>
            </div>
        </body>
    );
}

export default BodyProjects;