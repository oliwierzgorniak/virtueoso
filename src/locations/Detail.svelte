<script>
  import VirtuesList from "../lib/VirtuesList.svelte";
  import { activeVirtue } from "../store";
</script>

<h1>{$activeVirtue}</h1>

<style>
  h1 {
    font-family: "Cinzel", serif;
    font-weight: 400;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
