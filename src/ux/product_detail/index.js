import React, { useState } from 'react';
import coffe from '../../assets/coffe.svg';
import star_rate from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';


export default function ProductDetail({
    id,
    name,
    rate,
    price,
    comments,
    basics,
    img,
    description,
    addProduct }) {

    const [isActiveSeeMore, setIsActiveSeeMore] = useState(false);

    const handleSeemMore = () => {
        setIsActiveSeeMore(!isActiveSeeMore)
    }

    const handleAddProduct = () => {
        if (!addProduct) return;
        addProduct({
            product: [
                {
                    uuid: `${Math.random().toString(32).slice(2)}`,
                    id,
                    name,
                    rate,
                    price,
                    comments,
                    basics,
                    img,
                }
            ]
        })

    }

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
            <div className={`product-detail-text ${isActiveSeeMore ? '' : 'cut-text'}`}>
                {description}
            </div>
            <small onClick={handleSeemMore}>{isActiveSeeMore ? 'See less' : 'See more'}</small>
            <div className='product-detail-button-container'>
                <button
                    onClick={handleAddProduct}
                >Add to cart</button>
            </div>
        </div>
    </div>
}




