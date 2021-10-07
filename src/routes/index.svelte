<script>
import FilterHeader from '$lib/components/FilterHeader.svelte'
import PaginationControls from '$lib/components/PaginationControls.svelte'
import ResultTable from '$lib/components/ResultTable.svelte'
import { getSheetEntries } from '$lib/functions/getSheetEntries'
import { onMount } from 'svelte'

let results = []
let categories = []
let loading = true

/* Retrieve dictionary entries from Google sheets */
onMount(async () => {
  const { results: result, newCategories } = await getSheetEntries()

  results = [...results, ...result]
  categories = [...categories, ...newCategories]

  loading = false
})

$: filterTxt = ''
$: filterCat = ''

/* Pagination testing */
const entriesPerPage = 10

$: curPage = 1

$: filteredItems = results.filter(
  (item) =>
    item.definition.toLowerCase().includes(filterTxt.toLowerCase()) &&
    item.category.includes(filterCat)
)

/* The entries that are actually rendered on the table */
$: shownItems = filteredItems.slice(
  (curPage - 1) * entriesPerPage,
  (curPage - 1) * entriesPerPage + entriesPerPage
)

$: totalEntries = filteredItems.length

/* totalPages can be 0 if totalEntries is 0, so put a min of 1 */
$: totalPages = totalEntries ? Math.ceil(totalEntries / entriesPerPage) : 1

/* If there is a change in filters, change page back to 1 */
$: {
  filteredItems
  curPage = 1
}

function changePage(forwards) {
  if (forwards.detail) {
    curPage = ++curPage
  } else {
    curPage = --curPage
  }
}

function setFilteredText(filter) {
  filterTxt = filter.detail
}

function setFilteredCategory(cat) {
  filterCat = cat.detail
}
</script>

<FilterHeader
  {categories}
  on:filter-text={(txt) => setFilteredText(txt)}
  on:filter-category={(cat) => setFilteredCategory(cat)}
/>

<div class="main-container">
  {#if loading}
    <p>Loading results...</p>
  {:else}
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
  padding: 1rem 1rem;
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}
</style>
