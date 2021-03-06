import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Stack from '@mui/material/Stack';

import guitar from '../../assets/logo-images/guitar.png';
import devilHorns from '../../assets/logo-images/cartoon_devil_horns_hand.png';


const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className='font-link'>  

    <div className='' id='header-box'>
    <Link to='/' id='header-title-link'> <h1 className='font-link' id='header-title-text'>MUSICOLOGY</h1></Link>
        <p className='font-link'>For Those About to Rock</p>  

      <nav className=''>
        {Auth.loggedIn() ? (
          <>
          <Stack direction='row' id='btn-stack' spacing={1} justifyContent='right'>
            <img src={guitar} alt='guitar' id='header-icon' />
            <Link to='/profile'>My Profile</Link>
            <img src={devilHorns} alt='rock devil horns' id='header-icon' />
            <Link to='/bulletin_board'>Bulletin Board</Link>
            <img src={guitar} alt='guitar' id='header-icon' />
            <a href='/' onClick={logout}>
              Logout
            </a>
          </Stack>
          </>
        ) : (
          <>
            <Stack direction='row' id='btn-stack' spacing={4} justifyContent='right'>
              <img src={guitar} alt='guitar' id='header-icon' />
              <Link to='/login'>Login</Link>
              <img src={devilHorns} alt='rock devil horns' id='header-icon' />
              <Link to='/signup'>Signup</Link>
              <img src={guitar} alt='guitar' id='header-icon' />
            </Stack>
          </>
        )}
      </nav>
    </div>
  </header>
  );
};

export default Header;