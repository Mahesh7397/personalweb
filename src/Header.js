import React, { useEffect, useState } from 'react'
import useWindowResize from './hook/UseWindowResize'
import './Styles/Header.css'
import logo from './image/logo192.png'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const [isview,setisview]=useState(true)
    const [isdisp,setisdisp]=useState(true)
    const [butview,setbutview]=useState(true)

    const {width}=useWindowResize()

   // console.log(width,height)
   useEffect(()=>{
      if(width>=750){
        setisdisp(true)
        setbutview(true)
        setisview(false)
      }
      if(width<=750){
        setbutview(false)
        setisview(true)
      }
   },[width])
  return (
    <div className='header'>
       <div className='title-line-bar'>
          <img  src={logo} alt='MD_logo' className='image'/>
          <div className='title-box'>
             <h3 className='title'>Maheshwaran</h3>
             <p className='title-base'>Personal Portfolio</p>
          </div> 
       </div>
       <div hidden={butview} className='butbox'>
          <button onClick={()=>{
            if(isdisp){
            setisdisp(false)}
            if(!isdisp){
            setisdisp(true)
            }
          }} className='menubutton'>{isdisp?<IoMenu size={32} color={'#6998F9'}/>:<IoCloseSharp size={32} color={'#6998F9'}/>}
          </button>
       </div>
       <section hidden={isdisp} className='secone'>
           <nav>
              <ul>
                <li><a href='#home' onClick={()=>setisdisp(true)}><h3>Home</h3></a></li>
                <li><a href='#about' onClick={()=>setisdisp(true)}><h3>About</h3></a></li>
                <li><a href='#contact' onClick={()=>setisdisp(true)}><h3>Contact</h3></a></li>
              </ul>
           </nav>
        </section> 
        <section hidden={isview} className='sectwo'>
           <nav>
              <ul>
                <li><a href='#home'><h3>Home</h3></a></li>
                <li><a href='#about'><h3>About</h3></a></li>
                <li><a href='#contact'><h3 className='constythu'>Contact</h3></a></li>
              </ul>
           </nav>
        </section>
    </div>
  )
}

export default Header