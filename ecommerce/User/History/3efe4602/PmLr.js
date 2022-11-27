import React from 'react'
import {slide as Menu} from 'react-burger-menu'

const BurgerMenu=()=>{
return(
    <Menu customBurgerIcon={<i className=''}>
        <a className='menu-item' href="/">Contact US</a>
    </Menu>
)
}
export default BurgerMenu