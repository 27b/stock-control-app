import React from "react";

import './Message.css';

export const Message = ({status, color, message}) => {
    return (
        <>
            {
                status ?
                    <div className="message-container">
                        <div className={ 'message ' + color }>{ message }</div>
                    </div>
                : ''
            }
        </>
    )
}