// src/components/SocialButton.js
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiOutlineFacebook, AiOutlineGithub, AiOutlineGitlab, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

const ICONS = {
  instagram: AiFillInstagram,
  linkedin: AiFillLinkedin,
  github: AiFillGithub,
  gmail: AiFillMail,
  facebook: AiFillFacebook
};

const SocialButton = ({ name, className = '', href = '#' }) => {
  const IconComponent = ICONS[name];

  if (!IconComponent) {
    console.error(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center p-2 rounded-3xl 
         ${className}`}
    >
      <IconComponent
        size={64}
        className="
        text-surface-variant-dark/25
        hover:text-on-primary-container-light
        "
      />
    </a>
  );
};

export default SocialButton;
