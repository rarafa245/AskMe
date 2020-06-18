import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage, prevPage, nextPage } from '../redux'

function AllQuestionsPagination() {

    const numOfPages = useSelector( state => state.numOfPages)
    const actualPage = useSelector( state => state.actualPage)
    const dispatch = useDispatch()

    const [pagination, setPagination] = useState()

    useEffect(() => {
        const receivedPages = []
        for (let page = 1; page <= numOfPages; page++) {
            receivedPages.push(
                <li className="page-link" key={page} onClick={() => dispatch(changePage(page))}>
                    {page}
                </li>
            )
        }

        setPagination(receivedPages)
    }, [numOfPages])


    return (
        <div className='mt-3 ml-auto mr-auto'>
            <ul className="pagination">
                <li className="page-link" onClick={() => dispatch(prevPage()) } >
                    {'<'}
                </li>
                {pagination}
                <li className="page-link" onClick={() => dispatch(nextPage()) } >
                    {'>'}
                </li>
            </ul>
        </div>
    )

}

export default AllQuestionsPagination
