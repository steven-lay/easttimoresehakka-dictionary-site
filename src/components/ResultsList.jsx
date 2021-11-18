import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import ResultItem from './ResultItem'

const entriesPerPage = 5

export default function ResultsList({ results }) {
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [results])

  const resultText = results.length === 1 ? 'result' : 'results'

  const totalPages = Math.ceil(results.length / entriesPerPage)

  const start = (page - 1) * entriesPerPage
  const end = page * entriesPerPage
  const pagedResults = results.slice(start, end)

  function handlePageClick(e) {
    setPage(e.selected + 1)
  }

  return (
    <ListContainer>
      <ListText>
        {results.length} {resultText} found
      </ListText>
      <ResultsArea>
        {!!pagedResults.length &&
          pagedResults.map(result => (
            <ResultItem key={JSON.stringify(result)} result={result} />
          ))}
      </ResultsArea>

      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaAngleDoubleRight />}
        onPageChange={handlePageClick}
        pageCount={totalPages}
        previousLabel={<FaAngleDoubleLeft />}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
      />
    </ListContainer>
  )
}

const ListContainer = styled.div`
  width: 30rem;
  margin: 2rem auto;
`

const ResultsArea = styled.ul`
  list-style: none;
  padding-left: 0;
`

const ListText = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
`
