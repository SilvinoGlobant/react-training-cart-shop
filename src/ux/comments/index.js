import React from 'react';
import Comment from './comment'

export default function Comments() {
    return <div className='comments'>
        <p className='comments-title'>Comments:</p>
        <div className='comments-container'>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    </div>

}




