import cart from './reducers';
export default function module() {
    return {
        // unique id of the module
        id: 'shopping/cart',
        //maps the store key ti the reducer
        reducerMap: { cart }
    }
}