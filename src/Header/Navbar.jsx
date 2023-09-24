import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar py-8">
            <div className="navbar-start">
                <Link to='/' className="text-3xl"><span className='text-yellow-500'>69</span>Store</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-10 text-xl">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/cart'>Cart</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="btn">Login</NavLink>
            </div>
        </div>
    )
}

export default Navbar