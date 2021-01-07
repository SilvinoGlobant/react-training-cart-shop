import React from 'react';
import coffe from '../../assets/coffe.svg';
import star_rate from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';

export function ProductItem({
    id,
    name,
    rate,
    price,
    comments,
    basics,
    img,
    navigateToDetails
}) {

    return <div className="product-item d-flex flex-column">
        {basics ? <span className='badge bg-third d-flex justify-content-center'>BASIC</span> : null}
        <img className='img-item' src={img || coffe} alt="" />
        <p className='title-item'>{name || 'No name'}</p>
        <div className='rate-container d-flex'>
            <div className='start-rate-container'>
                <img src={star_rate} alt="" />
                <img src={star_rate} alt="" />
                <img src={star_rate} alt="" />
                <img src={star_rate} alt="" />
                <img src={star_rate} alt="" />
            </div>
            <div className='comment-container'>
                <span>{comments || 0}</span>
                <img src={comment} alt="" />
            </div>
        </div>
        <p className='item-amount'>${price || '0.00'}</p>
        <div className='btn-container d-flex flex-column'>
            <button
                className='bg-primary'
                onClick={() => navigateToDetails(id)}>See details</button>
            <button className='bg-secondary'> Add to cart</button>
        </div>
    </div>
}