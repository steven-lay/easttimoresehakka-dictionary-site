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

<header>
  <div class="header-container">
    <h1 class="main-heading">East Timorese Hakka Dictionary</h1>

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
  </div>
</header>

<style>
header {
  width: 100%;
  top: 0;
  background-color: darkslateblue;
  box-shadow: 0px 2px 8px 3px rgba(0, 0, 0, 0.18);
}

input,
select {
  border: 1px solid black;
  border-radius: 6px;
  background-color: white;
}

.header-container {
  max-width: 80rem;
  padding: 2rem 1rem 1rem 1rem;
  margin: 0 auto;
}

.main-heading {
  margin-top: 0;
  font-size: 2.25rem;
  font-weight: 500;
  color: white;
}

label {
  color: white;
}

@media (max-width: 500px) {
  .main-heading {
    text-align: center;
  }
}

label {
  display: block;
}

.filter-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0;
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
