<script>
  import Detail from "./locations/Detail.svelte";
  import Home from "./locations/Home.svelte";
  import { location } from "./js/store";
</script>

{#if $location == "detail"}
  <Detail />
{:else}
  <Home />
{/if}
