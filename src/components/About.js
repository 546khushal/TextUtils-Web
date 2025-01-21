import React from 'react';

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        borderRadius: '8px',
        padding: '20px',
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3 text-center" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <p className="lead" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <strong>TextUtils</strong> is a powerful text analyzer built using <strong>React.js</strong> to provide users with a variety of tools like character count, word count, and removal of extra spaces. This tool is free to use and highly useful for individuals who need quick and efficient text analysis for blogs, essays, and more.
                    </p>
                    <p className="lead" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        Whether you're a content creator, writer, or student, TextUtils will help you streamline your writing process with instant text statistics and tools to improve productivity.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img 
                        src="https://via.placeholder.com/400x300" 
                        alt="TextUtils" 
                        className="img-fluid rounded"
                        style={{ borderRadius: '10px' }}
                    />
                </div>
            </div>

            <hr />

            <h3 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Key Features</h3>
            <ul className="list-group">
                <li className="list-group-item" style={myStyle}>📝 **Word Counter**: Count the number of words in your text.</li>
                <li className="list-group-item" style={myStyle}>🔢 **Character Counter**: Quickly check the number of characters in a text.</li>
                <li className="list-group-item" style={myStyle}>💨 **Remove Extra Spaces**: Easily remove unnecessary spaces from your text.</li>
                <li className="list-group-item" style={myStyle}>🌍 **Multi-Browser Support**: Works in Chrome, Firefox, Safari, and more.</li>
                <li className="list-group-item" style={myStyle}>🔓 **Free to Use**: No registration or payment required to use the features.</li>
            </ul>

            <hr />

            <h3 className="mt-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About the Creator</h3>
            <p className="lead" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <strong>Khushal Suthar</strong> is a passionate <strong>MCA Student</strong> and a budding software developer. At the age of 21, Khushal created <strong>TextUtils</strong> using React.js to make text analysis easier for everyone. With a love for coding and building useful applications, Khushal continues to improve his skills and develop tools that are both practical and innovative.
            </p>

            <hr />

            <h4 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Contact Information</h4>
            <ul className="list-group">
                <li className="list-group-item" style={myStyle}>📞 Phone: <a href="tel:+917230907187">7230907187</a></li>
                <li className="list-group-item" style={myStyle}>📧 Email: <a href="mailto:khushalsuthar546@gmail.com">khushalsuthar546@gmail.com</a></li>
            </ul>

            <hr />
            
            <footer className="text-center">
                <p style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    Created by <strong>Khushal Suthar</strong>
                </p>
            </footer>
        </div>
    )
}
