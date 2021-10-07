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
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgb(230, 230, 230);
}

td {
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid rgb(230, 230, 230);
}

tbody tr:hover {
  background-color: rgb(250, 250, 250);
}
</style>
