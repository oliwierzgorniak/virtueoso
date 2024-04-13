<script>
  import { activeVirtue } from "../store";

  const virtuesJson = window.localStorage.getItem("virtues");
  const virtues = JSON.parse(virtuesJson);
  activeVirtue.set(virtues.find(({ id }) => id == $activeVirtue.id));
</script>

<h1>{$activeVirtue.name}</h1>

<style>
  h1 {
    font-family: "Cinzel", serif;
    font-weight: 400;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
