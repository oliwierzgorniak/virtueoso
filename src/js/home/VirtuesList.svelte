<script>
  import ListElement from "./ListElement.svelte";
  import { isAddFormOpen, listElements } from "../store";

  const virtuesJson = window.localStorage.getItem("virtues");
  const virtues = virtuesJson ? JSON.parse(virtuesJson) : [];
  listElements.set(
    virtues.map(({ name, id }) => ({
      id: id,
      name: name,
    }))
  );
</script>

<section class="container">
  <h2>Virtues</h2>
  <ul>
    {#if $listElements.length > 0}
      {#each $listElements as el}
        <ListElement id={el.id} name={el.name} />
      {/each}
    {:else}
      <span class="message">No virtues to show</span>
    {/if}
  </ul>
  <button
    class="button add-virtue-button"
    on:click={() => isAddFormOpen.set(true)}>Add a virtue</button
  >
</section>

<style>
  h2 {
    margin-bottom: 0.7em;
  }

  ul {
    margin-bottom: 1.7em;
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
