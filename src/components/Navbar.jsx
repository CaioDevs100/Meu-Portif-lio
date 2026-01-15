import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ background: '#282c34', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-around' }}>
      <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
      <a href="#sobre" style={{ color: 'white', textDecoration: 'none' }}>Sobre</a>
      <a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a>
      <a href="#projetos" style={{ color: 'white', textDecoration: 'none' }}>Projetos</a>
      <a href="#contato" style={{ color: 'white', textDecoration: 'none' }}>Contato</a>
    </nav>
  );
};

export default Navbar;