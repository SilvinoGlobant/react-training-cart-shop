import React from 'react';

export default {
    title: 'Core/Comment',
    parameters: {
        position: "1.0"
    }
};

const Comment = (args) => (
    <div className='comment'>
        <p className='comment-user'>Jon Doe</p>
        <p className='comment-text'>Excelent Product </p>
    </div>
);

export const CommentDemo = Comment.bind({});
Comment.args = {

};
