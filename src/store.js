import {createStore,compose,applyMiddleware} from 'redux' //pour créer un store
import rootReducer from './reducers';//dispatcheur
import thunk from 'redux-thunk'


const initialState = {};
// deux attributs oblig
const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    ); 

export default store;
