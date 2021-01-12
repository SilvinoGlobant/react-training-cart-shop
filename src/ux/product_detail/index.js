import React from 'react';
import coffe from '../../assets/coffe.svg';
import star_rate from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';


export default function ProductDetail({ description, name, img, price }) {

    return <div className='product-details d-flex '>
        <div className='product-detail-img'>
            <img src={img} alt="" />
        </div>

        <div className='product-detail'>
            <h1 className='product-detail-title m-0'>{name} </h1>
            <div className='product-detail-rate-comments d-flex'>
                <div className='start-rate-container'>
                    <img src={star_rate} alt="" />
                    <img src={star_rate} alt="" />
                    <img src={star_rate} alt="" />
                    <img src={star_rate} alt="" />
                    <img src={star_rate} alt="" />
                </div>
                <div className='comment-container'>
                    <span>{2}</span>
                    <img src={comment} alt="" />
                </div>

            </div>
            <div className='product-detail-amount-container d-flex'>
                <h1 className='product-detail-amount '>${price}</h1>
                <div className='badge bg-third d-flex justify-content-center align-items-center'>
                    <span >BASIC</span>
                </div>
            </div>
            <div className='product-detail-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
            </div>
            <small>See more.</small>
            <div className='product-detail-button-container'>
                <button
                >Add to cart</button>
            </div>
        </div>
    </div>
}




