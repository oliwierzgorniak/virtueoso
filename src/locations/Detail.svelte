<script>
  import Buttons from "../js/detail/Buttons.svelte";
  import Graph from "../js/detail/Graph.svelte";
  import History from "../js/detail/History.svelte";
  import Score from "../js/detail/Score.svelte";
  import { activeVirtue } from "../js/store";

  const virtuesJson = window.localStorage.getItem("virtues");
  const virtues = JSON.parse(virtuesJson);
  activeVirtue.set(virtues.find(({ id }) => id == $activeVirtue.id));
</script>

<h1>{$activeVirtue.name}</h1>
<div class="container">
  <Graph />
  <Score />
  <History />
  <Buttons />
</div>

<style>
  h1 {
    font-family: "Cinzel", serif;
    font-weight: 400;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
