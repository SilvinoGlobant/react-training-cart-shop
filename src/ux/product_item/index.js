import React, { useEffect, useState } from 'react';
import coffe from '../../assets/coffe.svg';
import star_rate from '../../assets/star-rate.svg';
import comment from '../../assets/comment.png';

export function ProductItem({
    addProduct,
    id,
    name,
    rate,
    price,
    comments,
    basics,
    img,
    navigateToDetails
}) {

    const [starts, setStarts] = useState([])
    const [isHalf, setIsHalf] = useState(false)


    const getStarts = () => {
        const newRate = rate.toString();
        const newRateIntegers = newRate.split(".")[0]
        const isHalf = newRate.split(".")[1] === '5' ? true : false;
        const starts = [];
        for (let i = 0; i < Number(newRateIntegers); i++) {
            starts.push({ isInteger: true })
        }
        setStarts(starts);
        setIsHalf(isHalf);
    }

    useEffect(() => {
        getStarts()
    }, [])

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
    return <div className="product-item d-flex flex-column">
        {basics ? <span className='badge bg-third d-flex justify-content-center'>BASIC</span> : null}
        <img className='img-item' src={img || coffe} alt="" />
        <p className='title-item'>{name || 'No name'}</p>
        <div className='rate-container d-flex'>
            <div className='start-rate-container d-flex justify-content-center align-items-center'>
                {starts.map(start => <img src={star_rate} alt="" />)}
                {isHalf && <div className='half-start d-flex  align-items-center'>

                    <img src={star_rate} alt="" />
                </div>
                }
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
            <button className='bg-secondary' onClick={handleAddProduct}> Add to cart</button>
        </div>
        <div className='w-100 border-bottom' />
    </div>
}