import React from 'react'
import data from './data'

export default function Meme(){
    const memeArray = data.memes
    const [meme, setMeme] = React.useState('')
    const handleClick = () => {
        console.log("I was clicked!")
        const r = Math.floor(Math.random()* memeArray.length)
        setMeme(memeArray[r])
        console.log(meme)
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
                    {
                        (meme != '') &&
                        <img  className = "meme-image" src = {`${process.env.PUBLIC_URL}/images/${meme.imagesrc}`}/>
                    }</div>
                    <div className = "overlay">
                        <h1>{meme.htextp}</h1>
                        <h2>{meme.htexts}</h2>
                    </div>
            </div>
        </section>
    )
}