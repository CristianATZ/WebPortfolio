import React from 'react'

function ProjectCard({src, text}) {
    return (
        <div className='
        bg-surface-variant-dark 
        shadow-[0_0_10px_1px_rgba(0,0,0,0.5)] rounded-xl p-10 
        w-[30%] hover:scale-105
        flex flex-col items-center justify-center'>
            <img
                src={src} // Fuente de la imagen
                className='size-32' // Ajusta el tamaño de la imagen
            />
            <p className='text-on-primary-light text-2xl font-extrabold tracking-wide mt-5'>{text}</p>
        </div>
    );
};

export default ProjectCard;