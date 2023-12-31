import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

// .beat{
//     animation-name: heart;
//     animation-duration: 1000ms;
//     animation-iteration-count: infinite;
// }

// @keyframes heart{
//     0%{
//         transform: scale(1);
//     }

//     90%{
//         transform: scale(0.7);
//     }

    
// }

  return(
     <footer className='bg-dSec text-white txt-sha text-md  border-t-2 p-2 md:flex items-center justify-around text-center font-disp'>
       
         <h1 className='text-'>Made With&nbsp; <FontAwesomeIcon icon={faHeart} className='text-red-500 beat text-md beat -z-10'/> &#38; &#129504; &nbsp; By Subham Gourisaria </h1>
         <h1>Reach Me On <a href='https://twitter.com/Subham_Coder' rel="noopener noreferrer" target={'_blank'}>< FontAwesomeIcon icon={faTwitter} className='text-blue-500  text-xl mx-1'/></a> <a href='https://github.com/SubhamBnk' rel="noopener noreferrer" target={'_blank'}>< FontAwesomeIcon icon={faGithub} className='text-xl  mx-1 bg-white text-black rounded-full '/></a> <a href='https://www.linkedin.com/in/subham-gourisaria-a13418201/' rel="noopener noreferrer" target={'_blank'}> < FontAwesomeIcon icon={faLinkedin} className='text-xl  mx-1 text-blue-700 bg-white '/></a></h1>

     </footer>);
};

export default Footer;