import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import userActions from 'api/core/users/actions.common.js';
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
    let currentAppName;

    return (<Router>
        <Route path="/" element={<Demo />} />
    </Router>);
}

export default connect(


)(Application);