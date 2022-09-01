import React, { useState } from 'react';
import '../App.css';
import '../index.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

function Nav() {

  const[menu, setMenu]= useState(false)

  const menuHamburger=()=>{
    setMenu(!menu);
}
  return (

    <header className="Header">
    <Link to= "/">
      <h1 className="H1-Nav">
        Hering
      </h1>
    </Link>
      <button className="Btn-Svg" onClick={menuHamburger}>
        <svg className='Svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        
        </button>
        
      <nav className={`Nav ${ menu ? 'Active' : ''}` }>
        <ul className="Ul-Nav">
          <Link to="/">
            <li className="Li-Nav"clasName="A-Nav">Home</li>
          </Link>
          <Link to="/category/netbook">
            <li className="Li-Nav"clasName="A-Nav">Netbook</li>
          </Link>
          <Link to="/category/periferico">
            <li className="Li-Nav" clasName="A-Nav">Perifericos</li>
          </Link>
          <Link to="/contacto">
            <li className="Li-Nav">Contact</li>
          </Link>
          <CartWidget/>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;
