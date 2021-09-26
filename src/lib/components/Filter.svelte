<script>
import { onMount, createEventDispatcher } from 'svelte'

export let categories = []

let inputEl = null

onMount(() => {
  inputEl.focus()
})

const dispatch = createEventDispatcher()

function onTextInputChange(e) {
  const inputVal = e.target.value
  dispatch('filter-text', inputVal)
}

function onSelectChange(e) {
  const inputVal = e.target.value
  dispatch('filter-category', inputVal)
}
</script>

<div class="filter-section">
  <div class="search-area">
    <label for="search-entry">Search term:</label>
    <input
      bind:this={inputEl}
      class="search-input"
      name="search-entry"
      id="search-entry"
      type="text"
      on:input={(e) => onTextInputChange(e)}
    />
  </div>
  <div class="select-area">
    <label for="categories-select">Filter by category:</label>

    <select
      name="categories-select"
      id="categories-select"
      on:change={(e) => onSelectChange(e)}
    >
      <option value="">All</option>
      {#each categories as category}
        <option value={category}>{category}</option>
      {/each}
    </select>
  </div>
</div>

<style>
label {
  display: block;
}

.filter-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem 0;
}

.search-input,
select {
  padding: 0.5rem;
  margin-top: 0.5rem;
}

.select-area {
  margin-left: 2rem;
}

@media (max-width: 600px) {
  .search-area {
    flex-grow: 1;
  }

  .search-input {
    width: 100%;
  }

  .select-area {
    margin-left: 0;
    margin-top: 1rem;
    flex-grow: 1;
  }

  select {
    width: 100%;
  }
}
</style>
