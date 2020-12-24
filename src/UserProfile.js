import React from 'react';

const UserProfile = (props) => {
    return (
        <div className="userProfile">
        <div className="header"><strong>{props.userHeader}</strong></div>
        <div class="content"><p>{props.userBody}</p></div>
        </div>
    )
}

export default UserProfile;