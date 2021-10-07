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
  <button disabled={curPage == 1} on:click={() => onChangePage(0)}>🡐 Previous</button>
  <button disabled={curPage >= totalPages} on:click={() => onChangePage(1)}>
    Next 🡒
  </button>
</div>

<style>
.pagination-area {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  font-weight: bold;
}

button {
  padding: 0.75rem 1rem;
  width: 8rem;
  color: white;
  background-color: rgb(92, 79, 175);
  transition: background-color 0.3s;
  border: 1px solid transparent;
  border-radius: 5px;
}

button:hover {
  background-color: rgb(75, 65, 143);
}

button:active {
  background-color: rgb(53, 45, 105);
}

button:disabled {
  background-color: rgb(168, 168, 168);
}
</style>
