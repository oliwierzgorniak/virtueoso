<script>
  import Detail from "./locations/Detail.svelte";
  import Home from "./locations/Home.svelte";
  import { location } from "./store";
</script>

{#if $location == "detail"}
  <Detail />
{:else}
  <Home />
{/if}
