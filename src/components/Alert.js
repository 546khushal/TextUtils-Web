import React from 'react';

function Alert(props) {
    const capitalize = (word) => { // Capitalize the first letter of the word
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ minHeight: '50px' }}>
            {props.alert && (  // Ensure the alert object exists before rendering
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    );
}

export default Alert;
