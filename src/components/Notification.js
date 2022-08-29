import React from 'react';

function Notification({message, warning}) {

    const stylesSuccess = {
        display: message !== '' && !warning ? 'block' : 'none',
    };
    const stylesError = {
        display: message !== '' && warning ? 'block' : 'none',
    };

    return (
        <>
            <div className="alert alert-danger alert-dismissible fade show" 
                role="alert"
                style={stylesError}
            >
                {message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div 
                className="alert alert-success alert-dismissible fade show" 
                role="alert"
                style={stylesSuccess}
            >
                {message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </>

    )

}

export default Notification