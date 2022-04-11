import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faCoffee } from '@fortawesome/fontawesome-free-solid'
// import  {Link} from 'react-router-dom';
import SideNavItems from './sideNav_items';

 const SideNavigation = (props) => {
    const [showNav, setShowNav] = useState();
    // const navItems = [ 
    //    <Link to="/" >
    //        Home
    //     </Link>,
    //     <Link to="/about">
    //     About
    //     </Link >,
    //     <Link to="/contact">
    //      Contact
    //     </Link>,
    //   ];
    // //   const title = ()=>(<h1>Hello octo </h1>);

  return (
    <div>
    <MenuIcon onClick={() => setShowNav(true)} />
    <SideNav navStyle={{background:"black"}} showNav={showNav} onHideNav={() => setShowNav(false)} title="marco" >
        <SideNavItems />
        </SideNav>
  </div>
  )
}
export default SideNavigation;