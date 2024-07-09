import React from 'react'
import insta from './image/Instagram_logo.png';
import linkin from './image/linkedin_logo.png';
import mail from './image/gmail_logo.png';
import Github from './image/github_logo.png'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
         <div><a href='https://www.linkedin.com/in/maheshwaran-t-v-2a8bb22b6'><img className='image' alt='Linkedin link' src={linkin} style={{width:'40px',height:'40px'}}/></a></div>
         <div><a href='https://mahesh
         waranm116@gmail.com'><img alt='gamil id' className='image' style={{width:'40px',height:'40px'}} src={mail}/></a></div>
         <div><a href='https://www.instagram.com/.mahesh_official?igsh=MWc1dHFqZm50ZjRmcA=='><img className='image' alt='Instagram link' style={{width:'40px',height:'40px'}} src={insta}/></a></div>
         <div><a href='https://github.com/Mahesh7397'><img className='image' style={{width:'45px',height:'45px'}} alt='GitHub link' src={Github}/></a></div>
    </div>
  )
}

export default Contact
