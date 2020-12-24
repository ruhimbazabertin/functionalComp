import React from 'react';

const Message = (props) => {

    return (
        <div className="ui message">
            <div className="header"><strong>{props.mess}</strong></div>
            <div>
                <p>{props.service}</p>
            </div>
            </div>
    );
}

export default Message;