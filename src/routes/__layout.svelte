<script>
import 'virtual:windi.css'
</script>

<slot />

<style>
/* Prevent scrollbar causing layout shift */
:global(body) {
  overflow-y: scroll;
}
</style>
