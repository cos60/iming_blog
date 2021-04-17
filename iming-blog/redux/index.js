import { createStore } from 'redux'
import reducer from './reducers'

const defaultState = {

    category: []

}

function createMyStore() {

    return createStore(reducer, defaultState);
}

export default createMyStore;