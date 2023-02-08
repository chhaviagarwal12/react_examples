import React, { useEffect, useRef, useState } from 'react'
import {slide as Menu} from 'react-burger-menu'
import { Link } from 'react-router-dom'

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
 
return(
    <div ref={ref}>
        <Menu  isOpen={open} noOverlay customBurgerIcon={<i className='bars large icon'/>} >
        <Link to='/userprofile' className='menu-item'>{window.localStorage.getItem("token")?
        `${(userProfile.name.firstname)}+" "+${(userProfile.name.lastname)}`:"User Profile"}
         <i className="user large icon">
                </i></Link>
        <hr/>
     <Link to='/orders' className='menu-item'> Orders <i className="large boxes icon"></i></Link>
     <hr/> 
     <Link className='menu-item' to="/contact">
     Contact Us <i className=" large phone icon"></i></Link>
 </Menu>
    </div>
    
)
}
const mapStateToProps=(state)=>{
  
    return{
       userProfile:state.userProfile
   }
 }
export default connect(mapStateToProps)(BurgerMenu)