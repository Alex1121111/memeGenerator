import React from 'react';

export default function Navbar(){
    return(
        <nav className='navbar'>
        <section className='left-section'>
            <img src = {process.env.PUBLIC_URL + '/images/memelogo.svg'} className='memelogo'/>
            <h1>Meme Generator</h1>
        </section>
        <section className='right-section'>
            <p>React Course - Project 3</p>
        </section>
        </nav>
    );
}