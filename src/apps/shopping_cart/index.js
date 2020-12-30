import React from 'react';
import { Provider } from "react-redux";
import Aplication from './application';
import createStore from "./store";

const store = createStore();
function Shopping() {
    return (<Provider store={store}>
        <Aplication />
    </Provider>)

}

export default Shopping;