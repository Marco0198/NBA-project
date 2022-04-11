import React from 'react'
import './footer.css'
import  {Link} from 'react-router-dom';
import { CURRENT_YEAR} from '../../constant'
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="logo">
      <img alt="nba logo" src="/images/nba_logo.png" />

      </Link>
      <div  className="right"
>
          @NBA {CURRENT_YEAR} All rights reserve to marco
      </div  >
    </div>
  )
}
export default Footer;