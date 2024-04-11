<script>
  import AddForm from "./lib/AddForm.svelte";
  import VirtuesList from "./lib/VirtuesList.svelte";
  import { isAddFormOpen } from "./store";
</script>

<h1>VIRTUEOSO</h1>
<VirtuesList />
{#if $isAddFormOpen}
  <AddForm />
{/if}

<style>
  h1 {
    font-family: "Cinzel", serif;
    font-weight: 400;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
