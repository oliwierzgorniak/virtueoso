<script>
  import {listElements} from '../store'
  let name = ''

  function handleAddButton() {
    listElements.update(list => [...list, name])
  }

  function handleInput(e) {
    name = e.currentTarget.value;
  }
</script>

<form on:submit|preventDefault>
  <input on:input={handleInput} value={name} type="text">
  <button on:click={handleAddButton}>Add virtue</button>
</form>

<style></style>