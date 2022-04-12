import React from 'react'
import './header.css';
import  {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars} from '@fortawesome/free-solid-svg-icons'

import SideNav from './Sidenav/sideNave';
const Header = (props) => {
    const logo=()=>
        (
            <Link to="/" className="logo">
            <img alt="nba logo" src="/images/nba_logo.png" />
            </Link>
        )

    // const navBars=()=>
    //     (
    //         <div>
    //         <FontAwesomeIcon  onClick={props.onOpenNav}
    //          icon={faBars} style={{color:'black',padding:'10px'}}/>
    //         </div>
          
    //     )
    
  return (
    <>
    <header className="header">
  
        <SideNav {...props} />
        <div className="headerOpt">{logo()}</div>
        
    </header>
    </>
  )
}
export default Header;