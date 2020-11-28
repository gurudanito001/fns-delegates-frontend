import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props)=>{
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4 sticky-top">
            <a href="#" className="navbar-brand font-weight-bold"  onClick={()=>{props.setCurrentPage("allAttendees")}}>FNS Delegates</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link font-weight-bold" onClick={()=>{props.setCurrentPage("admittedAttendees")}}>Admitted Attendees</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link font-weight-bold" href="#" onClick={()=>{props.setCurrentPage("guests")}}>Guests </a>
                    </li>
                </ul>
                <button className="btn btn-sm btn-secondary mr-1 ml-auto" data-toggle="modal" data-target="#registerModal">Add Attendee</button>
            </div>
        </nav>
    )
}

export default Navbar;