import {combineReducers} from 'redux'
import contactReducer from './contactReducer'
export default combineReducers({
    myContact : contactReducer // lier le module contact avec le reducer correspond
})