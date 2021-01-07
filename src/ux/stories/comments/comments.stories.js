import React from 'react';
import { CommentDemo } from '../comment/comment.stories';

export default {
    title: 'Core/Comments',
    // component: ProductItem,
    parameters: {
        position: "1.0"
    }
};

const Comments = (args) => (
    <div className='comments'>
        <p className='comments-title'>Comments:</p>
        <div className='comments-container'>
            <CommentDemo />
            <CommentDemo />
            <CommentDemo />
            <CommentDemo />
        </div>
    </div>
);

export const CommentsDemo = Comments.bind({});
Comments.args = {

};
