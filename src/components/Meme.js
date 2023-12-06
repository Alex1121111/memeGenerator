import React from 'react'
import data from './data'

export default function Meme(){
    function handleClick(){
        console.log("I was clicked!")
        const memeArray = data.memes
        const r = Math.floor(Math.random()* memeArray.length)
        console.log(data.memes[r])
        // data.map(
        //     d => console.log(d)
        // );
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
            <div className='meme-img'>
                    <div className = "meme-container">
                    <img  className = "meme-image" src = {`${process.env.PUBLIC_URL}/images/meme1.svg`}/>
                    </div>
                    <div className = "overlay">
                    <h1>This is a Test String</h1>
                    <h2>This is a Test String 2</h2>
                    </div>
            </div>
        </section>
    )
}