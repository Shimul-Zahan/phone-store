import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar py-8">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-3xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-10 text-xl">
                    <Link to='/'>Home</Link>
                    <Link to='/cart'>Cart</Link>
                    
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn">Login</Link>
            </div>
        </div>
    )
}

export default Navbar