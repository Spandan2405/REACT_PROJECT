// Footer.js
import React from 'react';
import { BsInstagram,BsFacebook,BsGithub,BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <div style={footerStyle}>
         <BsInstagram/> &nbsp; &nbsp; 
         <BsGithub/> &nbsp; &nbsp; 
         <BsFacebook/> &nbsp; &nbsp;  
         <BsLinkedin/> 
      <div>© 2023 Movie Booking System .All rights reserved.</div>
    </div>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  display:"inline-block"
};

export default Footer;
