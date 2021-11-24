import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { matchSorter } from 'match-sorter'
import SearchSection from '../components/SearchSection'
import ResultsList from '../components/ResultsList'

export default function Home({ result: data }) {
  const [filteredData, setfilteredData] = useState([])

  function onSearch(searchTerm) {
    if (!searchTerm.length) {
      setfilteredData([])
      return
    }

    const filtered = matchSorter(data, searchTerm, {
      keys: ['definition'],
      threshold: matchSorter.rankings.WORD_STARTS_WITH,
    })

    setfilteredData(filtered)
  }

  return (
    <>
      <NextSeo title="Dictionary" />
      <SearchSection onSearch={onSearch} />
      <ResultsList results={filteredData} />
    </>
  )
}

export async function getStaticProps() {
  const id = process.env.SHEET_ID
  const apiKey = process.env.SHEET_API_KEY
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/Dictionary/?alt=json&key=${apiKey}`

  const res = await fetch(url)
  const data = await res.json()

  let result = data.values
  result.shift()
  result = result.map(([romanisation, chinese, definition, category]) => ({
    romanisation,
    chinese,
    definition,
    category,
  }))

  return {
    props: { result },
    revalidate: 60,
  }
}
