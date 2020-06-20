import { CHANGE_TOTAL_PAGES,
         CHANGE_ACTUAL_PAGE,
         PREVIOUS_PAGE,
         NEXT_PAGE } from './types'

const totalPages = (totalPages) => ({
                                    type: CHANGE_TOTAL_PAGES,
                                    number: totalPages
                                    })

const changePage = (actualPage) => ({
                                    type: CHANGE_ACTUAL_PAGE,
                                    number: actualPage
                                    })

const prevPage = () => ({
                        type: PREVIOUS_PAGE
                        })

const nextPage = () => ({
                        type: NEXT_PAGE
                        })

export {
    totalPages,
    changePage,
    prevPage,
    nextPage
}