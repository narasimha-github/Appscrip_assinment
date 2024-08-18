import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faBagShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import SidebarOption from '../SidebarOption';
import './index.css';

const Header = () => {
  const [side, setSide] = useState(false);

  const showSideOptions = () => {
    setSide(!side);
  };

  return (
    <div className="headerMainContainer">
      <div className="headerSubContainer1">
        <div className="optionContainer">
          <FontAwesomeIcon icon={faBars} className="websiteLogo1" onClick={showSideOptions} />
          <img 
            src="https://cdn.pixabay.com/photo/2013/07/12/18/18/rainbow-colors-153229_1280.png"
            alt="Website Logo"
            className="websiteLogo"
          />
        </div>
        <h1 className="logoName">LOGO</h1>
        <div className="websiteFavoriteIcons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          <FontAwesomeIcon icon={faHeart} className="heartIcon" />
          <FontAwesomeIcon icon={faBagShopping} className="bagIcon" />
          <FontAwesomeIcon icon={faUser} className="userIcon" />
          <select className="select">
            <option>ENG</option>
            <option>TEL</option>
            <option>HIN</option>
          </select>
        </div>
      </div>
      <div className="headerSubContainer2">
        <button>SHOP</button>
        <button>SKILLS</button>
        <button>STORIES</button>
        <button>ABOUT</button>
        <button>CONTACT US</button>
      </div>
      <SidebarOption side={side} />
    </div>
  );
};

export default Header;
