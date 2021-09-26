<script>
import PaginationControls from '$lib/components/PaginationControls.svelte'
import ResultTable from '$lib/components/ResultTable.svelte'
import Filter from '$lib/components/Filter.svelte'
import { onMount } from 'svelte'
import { getSheetEntries } from '$lib/functions/getSheetEntries'

let results = []
let categories = ['All']
let loading = true
let filterTxt = ''

onMount(async () => {
  const { results: result, newCategories } = await getSheetEntries()

  results = [...results, ...result]
  categories = [...categories, ...newCategories]

  loading = false
})

/* Pagination testing */
const entriesPerPage = 10

$: curPage = 1
$: filteredItems = results.filter((item) =>
  item.definition.toLowerCase().includes(filterTxt.toLowerCase())
)
$: shownItems = filteredItems.slice(
  (curPage - 1) * entriesPerPage,
  (curPage - 1) * entriesPerPage + entriesPerPage
)
$: totalEntries = filteredItems.length
$: totalPages = totalEntries ? Math.ceil(totalEntries / entriesPerPage) : 1

function changePage(forwards) {
  if (forwards.detail) {
    curPage = curPage >= totalPages ? curPage : ++curPage
  } else {
    curPage = curPage == 1 ? curPage : --curPage
  }
}

function setFilteredText(filter) {
  console.log(filter.detail)
  filterTxt = filter.detail
}
</script>

<div class="main-container">
  <h1 class="main-heading">East Timorese Hakka Dictionary</h1>

  {#if loading}
    <p>Loading results...</p>
  {:else}
    <Filter on:filter-text={(txt) => setFilteredText(txt)} />
    <ResultTable data={shownItems} />
    <PaginationControls
      {curPage}
      {totalPages}
      on:change-page={(val) => changePage(val)}
    />
  {/if}
</div>

<style>
.main-container {
  max-width: 80rem;
  padding: 0 1rem;
  margin: 1rem auto;
}

.main-heading {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
</style>
