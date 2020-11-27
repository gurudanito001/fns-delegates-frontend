import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props)=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 sticky-top">
            <Link to="/" className="navbar-brand font-weight-bold" href="#">FNS Delegates</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/admitted" className="nav-link">Admitted Attendees</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/guests" className="nav-link" href="#">Guests </Link>
                    </li>
                </ul>
                <button className="btn btn-sm btn-secondary mr-1 ml-auto" data-toggle="modal" data-target="#registerModal">Add Delegate</button>
            </div>
        </nav>
    )
}

export default Navbar;