import React from 'react';

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

        </div>
    </div>
);

export const CommentsDemo = Comments.bind({});
Comments.args = {

};
