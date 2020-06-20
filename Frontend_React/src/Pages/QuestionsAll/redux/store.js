import { createStore } from 'redux'
import pagesReducer from './TotalOfPages/reducer'

const store = createStore(pagesReducer)

export default store