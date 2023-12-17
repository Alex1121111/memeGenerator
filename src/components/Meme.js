import React from 'react'
import data from './data'

export default function Meme(){
    const [memeArray, setMemeArray] = React.useState([]);
    React.useEffect(
        () => {
            console.log("running useeffect")
            fetch('https://api.imgflip.com/get_memes')
                .then(res => res.json())
                .then(response => setMemeArray(response.data.memes))
            }
    , [])
    const [meme, setMeme] = React.useState('')
    const handleClick = () => {
        console.log("I was clicked!")
        console.log(memeArray[2])
        const r = Math.floor(Math.random()* memeArray.length)
        setMeme(memeArray[r])
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
                        <img  className = "meme-image" src = {meme.url}/>
                    }</div>
                    {/* <div className = "overlay">
                        <h1>{meme.htextp}</h1>
                        <h2>{meme.htexts}</h2>
                    </div> */}
            </div>
        </section>
    )
}