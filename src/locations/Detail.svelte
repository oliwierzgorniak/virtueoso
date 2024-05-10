<script>
  import Buttons from "../lib/components/detail/Buttons.svelte";
  import History from "../lib/components/detail/History.svelte";
  import Score from "../lib/components/detail/Score.svelte";
  import { activeVirtue } from "../store";

  const virtuesJson = window.localStorage.getItem("virtues");
  const virtues = JSON.parse(virtuesJson);
  activeVirtue.set(virtues.find(({ id }) => id == $activeVirtue.id));
</script>

<h1>{$activeVirtue.name}</h1>
<Score />
<Buttons />
<History />

<style>
  h1 {
    font-family: "Cinzel", serif;
    font-weight: 400;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
