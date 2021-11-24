import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import ResultItem from './ResultItem'

const resultsPerPage = 5

export default function ResultsList({ results }) {
  const [currentResults, setCurrentResults] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [resultOffset, setResultOffset] = useState(0)

  useEffect(() => {
    setPageCount(Math.ceil(results.length / resultsPerPage))
  }, [results])

  useEffect(() => {
    const endOffset = resultOffset + resultsPerPage
    setCurrentResults(results.slice(resultOffset, endOffset))
  }, [resultOffset, results])

  function handlePageClick(event) {
    const newOffset = (event.selected * resultsPerPage) % results.length
    setResultOffset(newOffset)
  }

  return (
    <ListContainer>
      <ListText>Results: {results?.length || 0} found</ListText>
      <ResultsArea>
        {currentResults?.map(result => (
          <ResultItem key={JSON.stringify(result)} result={result} />
        ))}
      </ResultsArea>

      <StyledReactPagination
        breakLabel="..."
        nextLabel={<FaAngleDoubleRight />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel={<FaAngleDoubleLeft />}
        renderOnZeroPageCount={null}
      />
    </ListContainer>
  )
}

const StyledReactPagination = styled(ReactPaginate)`
  display: flex;
  padding-left: 0;
  justify-content: center;
  user-select: none;

  li {
    display: inline-block;
    cursor: pointer;
  }

  li.selected {
    border-radius: 35px;
    background-color: #f5f5f5;
  }

  li > a {
    display: inline-block;
    padding: 0.5rem 1rem;
  }
`

const ListContainer = styled.div`
  max-width: 30rem;
  padding: 0 1rem;
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
