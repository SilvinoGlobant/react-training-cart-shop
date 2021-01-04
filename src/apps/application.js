import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsActions } from './shopping_cart/actions';
import { currentListSelector } from './shopping_cart/selectors'
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route } from 'react-router-dom';



const DynamicApp = loadable(({ name }) => import(`./${name}`), {
    cacheKey: props => props.name,
    fallback: () => <div> Loading ... </div>
});

const Demo = () => {
    return <div>Demo </div>
}


function Application() {
    let currentAppName = 'shopping_cart';
    return (<Router>
        <Route path="/" element={currentAppName ? <DynamicApp name={currentAppName} /> : <Demo />} />
    </Router>);
}

export default connect(

)(Application);