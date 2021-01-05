import React from 'react';
import coffe from '../../assets/coffe.svg'
import star_rate from '../../assets/star-rate.svg'
import comment from '../../assets/comment.png'
export const ProductItem = () => {
    return <>
        <div className="product-item d-flex flex-column">
            <span className='badge bg-third d-flex justify-content-center'>BASIC</span>
            <img className='img-item' src={coffe} alt="" />
            <p className='title-item'>Coffe Maker</p>
            <div className='rate-container d-flex'>
                <div className='start-rate-container'>
                    <img src={star_rate} alt="" />
                    <img src={star_rate} alt="" />
                    <img src={star_rate} alt="" />
                    <img src={star_rate} alt="" />
                    <img src={star_rate} alt="" />
                </div>
                <div className='comment-container'>
                    <span>2</span>
                    <img src={comment} alt="" />
                </div>
            </div>
            <p className='item-amount'>$105</p>
            <div className='btn-container d-flex flex-column'>
                <button className='bg-primary'>See details</button>
                <button className='bg-secondary'> Add to cart</button>
            </div>
        </div>

    </>

}