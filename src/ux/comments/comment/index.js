import React from 'react';

export default function Comment({ user, comment }) {
    return (
        <div className='comment'>
            <p className='comment-user'>{user}</p>
            <p className='comment-text'>{comment} </p>
        </div>
    );
}

