<script>
  export let name;
</script>

<li>
  <span>
    {name}
  </span>
  <button class="button list-element-button">View</button>
</li>

<style>
  li {
    border: 1px solid var(--text-color);
    font-size: 0.938rem;
    padding: 0.8em 0.9em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list-element-button {
    padding: 0.2em 0.5em;
  }
</style>
