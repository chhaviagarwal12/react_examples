import React, { useEffect, useRef, useState } from 'react'
import {slide as Menu} from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const BurgerMenu=(props)=>{
  const [open,setOpen]=useState(false)
    const ref=useRef()
 console.log("in burger menu component",props.userProfile)
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
            <Link to='/userprofile' className='menu-item'>
                {window.localStorage.getItem("token") && (props.userProfile)?
            `${(props.userProfile.name.firstname)} ${(props.userProfile.name.lastname)}`:"User Profile"}
             <i className="user large icon">
                    </i></Link>
            <hr/>
         <Link to='/orders' className='menu-item'> Orders <i className="large boxes icon"></i></Link>
         <hr/> 
         
     </Menu>
        </div>
        
    )
 }


const mapStateToProps=(state)=>{
 console.log("from burger menu map state to props",state.userProfile)
    return{
       userProfile:state.userProfile.data
   }
 }
export default connect(mapStateToProps)(BurgerMenu)