<script>
  import getId from "./functions/getId";
  import getNewVirtueObject from "./functions/getNewVirtueObject";
  import { activeVirtue, location } from "../store";

  export let name;

  const id = getId();

  const virtuesJson = window.localStorage.getItem("virtues");
  const newVirtue = getNewVirtueObject(id, name);
  $: console.log(name);
  let newVirtuesJson;
  if (!virtuesJson) {
    newVirtuesJson = JSON.stringify([newVirtue]);
  } else {
    const virtues = JSON.parse(virtuesJson);
    newVirtuesJson = JSON.stringify([...virtues, newVirtue]);
  }
  window.localStorage.setItem("virtues", newVirtuesJson);

  function viewVirtue() {
    activeVirtue.set(id);
    location.set("detail");
  }
</script>

<li>
  <span>
    {name}
  </span>
  <button on:click={viewVirtue} class="button list-element-button">View</button>
</li>

<style>
  li {
    border: 1px solid var(--text-color);
    font-size: 0.938rem;
    padding: 0.8em 0.9em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.7em;
  }

  .list-element-button {
    padding: 0.2em 0.5em;
  }
</style>
