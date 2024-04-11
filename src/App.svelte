<script>
  import ListElement from "./lib/ListElement.svelte";
  import AddForm from "./lib/AddForm.svelte";
  import { listElements } from "./store";
  let isAddFormOpen = false;
</script>

<main>
  <ul>
    {#each $listElements as name}
      <ListElement {name} />
    {/each}
  </ul>
  <button on:click={() => (isAddFormOpen = true)}>Add virtue</button>
</main>
{#if isAddFormOpen}
  <AddForm />
{/if}

<style>
</style>
