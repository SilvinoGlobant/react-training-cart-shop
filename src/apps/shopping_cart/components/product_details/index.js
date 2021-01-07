import React from 'react';
import { useParams } from 'react-router-dom';
export default function ProductsDetailProxy() {
    const { productId } = useParams();

    // console.log('productId', productId);
    return <div>
        <h1>Poducts details (proxy )</h1>
    </div>
}