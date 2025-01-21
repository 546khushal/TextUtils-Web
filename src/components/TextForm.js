import React, { useState, useEffect } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [wordLimit, setWordLimit] = useState(0);
    const [fontSize, setFontSize] = useState(16); // Default font size
    const [emails, setEmails] = useState([]);
    const [phoneNumbers, setPhoneNumbers] = useState([]);
    const [urls, setUrls] = useState([]);

    // Load text from local storage when the component mounts
    useEffect(() => {
        const savedText = localStorage.getItem('text');
        if (savedText) {
            setText(savedText);
        }
    }, []);

    // Save text to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('text', text);
    }, [text]);

    // Extract emails from the text
    const extractEmails = () => {
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
        const foundEmails = text.match(emailPattern);
        setEmails(foundEmails || []);
        props.showAlert(foundEmails ? "Emails Extracted!" : "No Emails Found!", "info");
    };

    // Extract phone numbers from the text
    const extractPhoneNumbers = () => {
        const phonePattern = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
        const foundPhones = text.match(phonePattern);
        setPhoneNumbers(foundPhones || []);
        props.showAlert(foundPhones ? "Phone Numbers Extracted!" : "No Phone Numbers Found!", "info");
    };

    // Extract URLs from the text
    const extractUrls = () => {
        const urlPattern = /https?:\/\/[^\s]+/g;
        const foundUrls = text.match(urlPattern);
        setUrls(foundUrls || []);
        props.showAlert(foundUrls ? "URLs Extracted!" : "No URLs Found!", "info");
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Copy to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    };

    // Remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };

    // Capitalize first letter of each word
    const handleCapitalizeWords = () => {
        let newText = text.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        setText(newText);
        props.showAlert("Capitalized each word!", "success");
    };

    // Reverse the text
    const handleReverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text Reversed!", "success");
    };

    // Word limit handling
    const handleWordLimitChange = (event) => {
        setWordLimit(event.target.value);
    };

    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    const handleDownloadText = () => {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'text.txt';
        document.body.appendChild(element);
        element.click();
    };

    // Text statistics
    const words = text.split(/\s+/).filter((element) => element.length !== 0);
    const sentences = text.split(/[.!?]+/).filter((element) => element.length !== 0);
    const averageWordLength = words.length ? (text.length / words.length).toFixed(2) : 0;
    const remainingWords = wordLimit ? wordLimit - words.length : 0;

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743',
                            fontSize: fontSize + 'px',
                        }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeWords}>Capitalize Words</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>Reverse Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownloadText}>Download Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={extractEmails}>Extract Emails</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={extractPhoneNumbers}>Extract Phone Numbers</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={extractUrls}>Extract URLs</button>

                <div className="my-3">
                    <label htmlFor="wordLimit">Set Word Limit:</label>
                    <input
                        type="number"
                        id="wordLimit"
                        className="form-control"
                        value={wordLimit}
                        onChange={handleWordLimitChange}
                    />
                    {wordLimit > 0 && (
                        <p>Words remaining: {remainingWords}</p>
                    )}
                </div>

                <div className="my-3">
                    <label htmlFor="fontSize">Adjust Font Size:</label>
                    <input
                        type="range"
                        id="fontSize"
                        min="12"
                        max="36"
                        value={fontSize}
                        onChange={handleFontSizeChange}
                        className="form-range"
                    />
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{words.length} words, {text.length} characters</p>
                <p>{sentences.length} sentences</p>
                <p>Average word length: {averageWordLength} characters</p>
                <p>{0.008 * words.length} Minutes read</p>

                <h2>Extracted Information</h2>
                <p><strong>Emails:</strong> {emails.length > 0 ? emails.join(', ') : "No emails found"}</p>
                <p><strong>Phone Numbers:</strong> {phoneNumbers.length > 0 ? phoneNumbers.join(', ') : "No phone numbers found"}</p>
                <p><strong>URLs:</strong> {urls.length > 0 ? urls.join(', ') : "No URLs found"}</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
