<script>
  import ListElement from "./ListElement.svelte";
  import { isAddFormOpen, listElements } from "../store";

  const virtuesJson = window.localStorage.getItem("virtues");
  const virtues = virtuesJson ? JSON.parse(virtuesJson) : [];
  listElements.set(virtues.map(({ name }) => name));
</script>

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
    on:click={() => isAddFormOpen.set(true)}>Add virtue</button
  >
</section>

<style>
  .list-container {
    /* display: flex;
    flex-direction: column; */
    /* align-items: center; */
    width: 80vw;
    max-width: 20rem;
  }

  .list-container h2 {
    margin-bottom: 0.5em;
  }

  .list-container ul {
    margin-bottom: 1.1em;
  }

  .list-container .message {
    display: block;
    margin-top: 1em;
    margin-bottom: 2em;
  }

  .add-virtue-button {
    background-color: var(--grey-attention);
    width: min-content;
    white-space: nowrap;
    display: block;
    margin: auto;
  }
</style>
