<script>
  import ListElement from "./lib/ListElement.svelte";
  import AddForm from "./lib/AddForm.svelte";
  import { listElements } from "./store";
  let isAddFormOpen = false;
</script>

<h1>VIRTUEOSO</h1>
<section class="list-container">
  <h2>Virtues</h2>
  <ul>
    {#if $listElements.length > 0}
      {#each $listElements as name}
        <ListElement {name} />
      {/each}
    {:else}
      <span class="message">No virtues to show</span>
    {/if}
  </ul>
  <button
    class="button add-virtue-button"
    on:click={() => (isAddFormOpen = true)}>Add virtue</button
  >
</section>
{#if isAddFormOpen}
  <AddForm />
{/if}

<style>
  .list-container {
    /* display: flex;
    flex-direction: column; */
    /* align-items: center; */
    width: 80vw;
    max-width: 20rem;
  }

  .list-container h2 {
    margin-bottom: 0.2em;
  }

  .list-container ul {
    margin-bottom: 1em;
  }

  .list-container .message {
    display: block;
    margin-top: 1em;
    margin-bottom: 2em;
  }

  h1 {
    font-family: "Cinzel", serif;
    font-weight: 430;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .add-virtue-button {
    background-color: var(--grey-attention);
    width: min-content;
    white-space: nowrap;
    display: block;
    margin: auto;
  }
</style>
