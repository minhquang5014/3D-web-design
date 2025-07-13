import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles/';
import { navLinks } from '../constants';
import { logo, menu, close, creator } from '../assets/';

const Navbar = () => {   // define a function component
  const [active, setActive] = useState('')  // React state management, using a hook

  return (
    <nav 
      className={`${styles.paddindX}`}  // Special utilities class we have created
      w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link 
          to="/" 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          
          <img src={creator} alt="logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-{18px} font-bold cursor-pointer">
            Tommy <span className='sm:block hidden'>   
              | Software engineer
            </span>
          </p>
        
        </Link>

      </div>
    </nav>
  )
}

export default Navbar