import { CHANGE_TOTAL_PAGES,
         CHANGE_ACTUAL_PAGE,
         PREVIOUS_PAGE,
         NEXT_PAGE } from './types'

const initialState = {
    numOfPages: 1,
    actualPage: 1
}

const pagesReducer = (state = initialState, action) => {

    let currentPage = state.actualPage
    
   switch(action.type) {
        case CHANGE_TOTAL_PAGES:
            return {
                ...state,
                numOfPages: action.number
            }

        case CHANGE_ACTUAL_PAGE:
            return {
                ...state,
                actualPage: action.number
            }
        
        case PREVIOUS_PAGE:
            if (currentPage != 1)
                --currentPage

            return {
                ...state,
                actualPage: currentPage
            }
        
        case NEXT_PAGE:
            if (currentPage < state.numOfPages)
                ++currentPage

            return {
                ...state,
                actualPage: currentPage
            }

        
        default:
            return state
   }

}

export default pagesReducer