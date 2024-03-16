import React, { useRef } from 'react'
import { useState } from 'react'

export default function Home() {
    const [text, setText] = useState('')
    const textarea = useRef(null)

    //handle change function for text area
    const handleonChange = (event) => {
        setText(event.target.value);
    }

    //Event listener functions for buttons
    const handleUpCLick = () => {
        setText(text.toUpperCase())
    }

    const handleLowCLick = () => {
        setText(text.toLowerCase())
    }

    const removeExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleCleartext = () => {
        let newText = '';
        setText(newText)
    }
    const handleCopyText = () => {
        if (textarea.current) {
            Copy = textarea.current.value;
            navigator.clipboard.writeText(Copy);
            // .then(()=>{

            // })
        }
    }

    //Word and text counters
    const countWords = (text) => {
        const words = text.trim().split(/\s+/);
        return words.filter(word => word !== '').length;
    };
    const letterCount = (text) => {
        const letter = text.split('');
        return letter.filter(letter => letter !== " ").length
    }
    return (
        <div className="home">

            <div className='textspace'>
                <div className="count">
                    <span className='para1'>Leter Count:{letterCount(text)}</span>
                    <span className='para2'>Word Count:{countWords(text)}</span>
                </div>

                <textarea ref={textarea} id="myText" name="text" onChange={handleonChange} value={text} placeholder='Enter your text here' />
            </div>
            <div className="buttons">
                <button className='btn btn1' onClick={handleUpCLick} >Convert to upperCase</button>
                <button className='btn btn2' onClick={handleLowCLick}>Convert to lowerCase</button>
                <button className='btn btn3' onClick={removeExtraSpace} >Remove extra spaces</button>
                <button className='btn btn4' onClick={handleCleartext}>Clear text</button>
                <button className='btn btn5' onClick={handleCopyText}>Copy Text</button>
            </div>
            <p className="para1" > Estimated reading time : {0.008 * text.split(" ").length} second</p>
            <h2>Preview:</h2>
            <p style={{ fontSize: "20px", backgroundColor: "red", color: "white", padding: "10px" }}>{text}</p>
        </div>
    )
}
/*<p>{text.split(/\s+/).length} words,{text.length} characters</p>

<h3>Preview</h3>
<p>{text.length > 0 ? text : "Enter something in textarea to Preview Here(͡o‿O͡) ***"}</p>
<p>Numbers used in your text are :---- {text.match(/\d+/g)}</p>*/
// const handleCopyText = () => {
//     var text = document.getElementById("mybox");
//     console.log(text);
//     text.select();
//     navigator.clipboard.writeText(text.value);
// }