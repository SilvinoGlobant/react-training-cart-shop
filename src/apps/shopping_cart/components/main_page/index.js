import React, { useEffect, useState } from 'react';
import { OurProducts } from '../../../../ux/views/our_products';

export default function MainPage({ productList }) {

    const [list, setList] = useState([])

    useEffect(() => {
        if (productList.isLoading) return;
        setList(productList?.records ?? [])
    }, [productList])


    if (productList.isLoading) {
        return <h4>Loading list ...</h4>
    }

    return <OurProducts list={list} />

}