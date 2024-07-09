import React from 'react'
import './Styles/Home.css'

const Home = () => {
  return (
    <div style={{color:'#ffff',height:'90vh'}} id='home' className='home'>
        <div className='contentbox'>
            <h3 className='firstline'>Hii ,</h3>
            <h2 className='secondline'>I am Maheshwaran ,</h2>
            <p className='thirdline'>It's My Personal website</p>

            <ul>
              <li>Web Developer</li>
              <li>Mobile App Developer</li>
            </ul>
        </div>
    </div>
  )
}

export default Home