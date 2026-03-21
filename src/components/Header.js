import React from "react";
import '../styles.css';

export default function Header() {
    return (
        <div className="my-header">
            <img className="logo" src='logo.png' alt='moviedux'></img>
            <h2 className='app-subtitle'><
                u>It's time for popcorn! Find your next movie here.</u>
            </h2>
        </div>
    )
}