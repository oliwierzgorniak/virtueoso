<script>
  import { activeVirtue, location } from "../store";
  export let name, id;

  function viewVirtue() {
    activeVirtue.set({ id: id });
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
    border: var(--border-size) solid var(--text-color);
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
