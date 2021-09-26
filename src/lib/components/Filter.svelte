<script>
import { onMount, createEventDispatcher } from 'svelte'

let inputEl = null

const dispatch = createEventDispatcher()

function onInput(e) {
  const inputVal = e.target.value

  dispatch('filter-text', inputVal)
}

onMount(() => {
  inputEl.focus()
})
</script>

<div class="filter-section">
  <label for="search-entry">Search term:</label>
  <input
    bind:this={inputEl}
    class="search-input"
    name="search-entry"
    id="search-entry"
    type="text"
    on:input={(e) => onInput(e)}
  />
</div>

<style>
.filter-section {
  padding: 2rem 0;
}

.search-input {
  padding: 0.5rem;
}
</style>
