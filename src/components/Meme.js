import React from 'react'

export default function Meme(){
    function handleClick(){
        console.log("I was clicked!")
    }
    return(
        <section className='meme-section'>
            <div className = 'input-section'>
                <input placeholder = 'Shut up'/>
                <input placeholder = 'and take my money'/>
            </div>
            <div className = 'button-section'>
                <button onClick={handleClick}>Get a new meme image</button>
            </div>
        </section>
    )
}