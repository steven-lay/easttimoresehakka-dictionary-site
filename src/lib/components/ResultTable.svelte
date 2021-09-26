<script>
export let data = []
</script>

<table>
  <thead>
    <tr>
      <th>Entry</th>
      <th>Definition</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        <td>{@html row.entry}</td>
        <td>{row.definition}</td>
        <td>{row.category}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
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
