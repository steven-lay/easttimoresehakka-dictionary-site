<script>
import { onMount } from 'svelte'
import { getSheetEntries } from '$lib/functions/getSheetEntries'

let results = []
let categories = ['All']
let loading = true

onMount(async () => {
  const { results: result, newCategories } = await getSheetEntries()

  results = [...results, ...result]
  categories = [...categories, ...newCategories]

  loading = false
})

/* Pagination testing */
const entriesPerPage = 10

$: curPage = 1
$: totalEntries = results.length
$: totalPages = Math.ceil(totalEntries / entriesPerPage)
$: shownItems = results.slice(
  (curPage - 1) * entriesPerPage,
  (curPage - 1) * entriesPerPage + entriesPerPage
)

function changePage(forwards) {
  if (forwards) {
    curPage = curPage >= totalPages ? curPage : ++curPage
  } else {
    curPage = curPage == 1 ? curPage : --curPage
  }
}
</script>

<div class="main-container">
  <h1 class="main-heading">East Timorese Hakka Dictionary</h1>

  {#if loading}
    <p>Loading results...</p>
  {:else}
    <table>
      <thead>
        <tr>
          <th>Entry</th>
          <th>Definition</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {#each shownItems as row}
          <tr>
            <td>{@html row.entry}</td>
            <td>{row.definition}</td>
            <td>{row.category}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <div class="pagination-area select-none">
      <div class="page-display">
        Page {curPage} of {totalPages}
      </div>
      <div
        class="pagination-button pagination-button-left"
        class:cursor-pointer={curPage > 1}
        class:disabled={curPage == 1}
        on:click={() => changePage(0)}
      >
        &#60; Previous
      </div>
      <div
        class="pagination-button"
        class:cursor-pointer={curPage < totalPages}
        class:disabled={curPage >= totalPages}
        on:click={() => changePage(1)}
      >
        Next >
      </div>
    </div>
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

.pagination-area {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  font-weight: bold;
}

.page-display {
  margin-right: 1rem;
}

.pagination-button:not(.disabled) {
  color: indigo;
  cursor: pointer;
}

.pagination-button:active {
  background-color: rgb(230, 230, 230);
}

.pagination-button-left {
  margin-right: 1rem;
}

.disabled,
.disabled:active {
  color: lightgray;
  background-color: transparent;
}

.select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

th {
  text-align: left;
}

td,
th {
  padding: 0.5rem 1rem;
  border: 1px solid rgb(200, 200, 200);
}

tbody tr:hover {
  background-color: rgb(250, 250, 250);
}
</style>
