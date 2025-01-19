import React from 'react';

function Alert(props) {
    const caplitalize =(word)=>{                      //word first char capital
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div>
            {props.alert && (  // Ensure the alert object exists before rendering
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{caplitalize(props.alert.type)}</strong>: {props.alert.msg}
                    
                </div>
            )}
        </div>
    );
}

export default Alert;
