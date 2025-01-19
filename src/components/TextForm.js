import React, { useState } from 'react'
//Importing React and useState
// React: Used to create components.
// useState: A React hook that allows you to add state to functional components.
//           State is used to manage and track dynamic data in your application.    


export default function TextForm(props) {
    const [text, setText] = useState(''); 
    //text: A state variable that holds the current text.
    //setText: A function that updates the value of text.
    //useState('Enter text here'): Initializes the state with the string 'Enter text here'

    const handleUppercaseClick = () => {
        const upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted into UpperCase","success");                      
    };
    const handleLowercaseClick = () => {
        const lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted into LowerCase","success");
    };
    const handleClearClick = () => {
        const clearText = '';
        setText(clearText);
        props.showAlert("Cleared TextBox","success");
    };
    const handleCapitalizeClick = () => {
        const capitalizedText = text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setText(capitalizedText);
    };
    const handlefindEmail = () => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const emails = text.match(emailRegex); 
        if (emails) {
            setText(emails.join("\n")); // Replace text with found emails, each on a new line
        } else {
            setText("No emails found."); // Update text if no emails are present
        }
    };

    const handleCopyText = () => {
        //console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/); // Splits the text into an array of words
        setText(newText.join(" ")); // Joins the array back into a string with a single space
    };
    

    
    const handleOnChange = (event) => {
        setText(event.target.value);
        //event.target.value gets the current value of the textarea.
        //setText(event.target.value) updates the text state with the new value.
    };


   
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#424442':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick={handleUppercaseClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary m-2" onClick={handleLowercaseClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary m-2" onClick={handleCapitalizeClick}>
                Convert to Capitalized
            </button>
            <button className="btn btn-primary m-2" onClick={handlefindEmail}>
                Find Email
            </button>
            <button className="btn btn-primary m-2" onClick={handleCopyText}>
                Copy Text
            </button>
            <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </button>
            <button className="btn btn-primary m-2" onClick={handleClearClick}>
                Clear
            </button>
            
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} Words, {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p> 
        </div>

        </>
        
    );
}
