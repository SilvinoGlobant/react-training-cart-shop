import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OurProducts } from '../../../../ux/views/our_products';

export default function MainPage({ productList }) {

    const navigate = useNavigate();


    function navigateToDetails(id) {
        navigate(`/shopping/${id}`)
    }

    // const [list, setList] = useState([])

    // useEffect(() => {
    //     if (productList.isLoading) return;
    //     setList(productList?.records ?? [])
    // }, [productList])


    // if (productList.isLoading) {
    //     return <h4>Loading list ...</h4>
    // }

    return <OurProducts list={productList} navigateToDetails={navigateToDetails} />

}