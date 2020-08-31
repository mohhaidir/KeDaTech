import React from 'react'
import lostOnline from '../assets/img/undraw_lost_online_wqob.png'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className="navbar-container">
            <h1 className="home-button">Home</h1>
            {/* <img className="nav-img" src={lostOnline}/> */}
            <div className="button-wrapper">
                <h1 className="about">About</h1>
                <h1 className="pricing">Pricing</h1>
                <h1 className="contact">Contact</h1>
                <h2 className="login">
                    <Link to="/login" style={{ textDecoration: 'none', color: 'none' }}>
                        Login
                    </Link>
                </h2>
            </div>
        </div>
    )
}