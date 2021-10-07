<slot />

<style>
@import '../modern-normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* Prevent scrollbar causing layout shift */
:global(body) {
  overflow-y: scroll;
  font-family: 'Roboto', sans-serif;
}

:global(.select-none) {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
