import React from 'react'
import {Link} from 'react-router-dom'
import ('/style.css')

const Navbar=()=>{
    
    return(
        <nav className='navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Profil'>Profil</Link></li>
                <li><Link to='/Contact'>Contact Us</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar