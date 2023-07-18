import React, { useState, createContext, useContext } from 'react';
import NavLinks from './NavLinks';

//will return a provider component and a consumer component
//becuase there's a useContext hook thre's no need for the consumer component
export const NavbarContext = createContext();

// console.log(NavbarContext.Provider);

export const useGlobalContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks></NavLinks>
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
