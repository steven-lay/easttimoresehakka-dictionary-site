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
  <div
    class="pagination-button pagination-button-left"
    class:cursor-pointer={curPage > 1}
    class:disabled={curPage == 1}
    on:click={() => onChangePage(0)}
  >
    &#60; Previous
  </div>
  <div
    class="pagination-button"
    class:cursor-pointer={curPage < totalPages}
    class:disabled={curPage >= totalPages}
    on:click={() => onChangePage(1)}
  >
    Next >
  </div>
</div>

<style>
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
</style>
