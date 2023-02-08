import React, { useEffect, useRef, useState } from 'react'
import {slide as Menu} from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const BurgerMenu=({userProfile})=>{
  const [open,setOpen]=useState(false)
    const ref=useRef()
 
    // useEffect(()=>{
    //     window.addEventListener("click",(event)=>{
    //         if(ref.current.contains(event.target)){
    //             return;
    //         }
    //         console.log(ref.current)
    //         setOpen(false)
    //  })
    // },[])
  if(userProfile.data){
    return(
        <div ref={ref}>
            <Menu  isOpen={open} noOverlay customBurgerIcon={<i className='bars large icon'/>} >
            <Link to='/userprofile' className='menu-item'>
                {window.localStorage.getItem("token") && (userProfile.data.name)?
            `${(userProfile.data.name.firstname)} ${(userProfile.data.name.lastname)}`:"User Profile"}
             <i className="user large icon">
                    </i></Link>
            <hr/>
         <Link to='/orders' className='menu-item'> Orders <i className="large boxes icon"></i></Link>
         <hr/> 
         
     </Menu>
        </div>
        
    )
 }

 }
const mapStateToProps=(state)=>{
//   console.log("from burger menu map state to props",state.userProfile.data)
    return{
       userProfile:state.userProfile
   }
 }
export default connect(mapStateToProps)(BurgerMenu)