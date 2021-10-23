import React from 'react'
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  return (
    <header className="header">
      
        <Link to="/recipes" className="header-recipes">HEALTHY RECIPES</Link>
        <Link to="/blog" className="header-blog">BLOG</Link>
        <Link to="/join" className="header-join">JOIN</Link>
        <Link to="/register" className="header-register">REGISTER</Link>
    </header>
  )
}

export default Header
