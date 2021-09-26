<script>
import { createEventDispatcher } from 'svelte'

export let curPage = 0
export let totalPages = 0

const dispatch = createEventDispatcher()

function onChangePage(val) {
  dispatch('change-page', val)
}
</script>

<div class="pagination-area select-none">
  <div class="page-display">
    Page {curPage} of {totalPages}
  </div>
  <button
    class="pagination-button"
    disabled={curPage == 1}
    on:click={() => onChangePage(0)}
  >
    &#60; Previous
  </button>
  <button
    class="pagination-button"
    disabled={curPage >= totalPages}
    on:click={() => onChangePage(1)}
  >
    Next >
  </button>
</div>

<style>
.pagination-area {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.5rem;
  font-weight: bold;
}

.page-display {
  margin-right: 1rem;
}

.pagination-button {
  padding: 1rem;
  width: 7rem;
}

.select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
