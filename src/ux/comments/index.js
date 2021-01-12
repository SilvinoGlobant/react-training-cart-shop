import React from 'react';
import Comment from './comment'

export default function Comments({ comments }) {
    return <div className='comments'>
        <p className='comments-title'>Comments:</p>
        <div className='comments-container'>
            {comments?.map((item, index) => <Comment key={`comment-${index}`} {...item} />)}
        </div>
    </div>

}




