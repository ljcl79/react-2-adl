import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light d-flex">
            <div>
                <NavLink to="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/1212/1212781.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/carrito">
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    Carrito
                </NavLink>
            </div>
        </nav>
    )
}
