<script>
  import closeSvg from "../assets/close.svg";
  import { listElements } from "../store";
  let name = "";

  function handleAddButton() {
    listElements.update((list) => [...list, name]);
  }

  function handleInput(e) {
    name = e.currentTarget.value;
  }

  // document.body.classList.add("overflow-hidden");
</script>

<div class="bg">
  <div class="container">
    <button class="close-button">
      <img src={closeSvg} alt="close" />
    </button>
    <form on:submit|preventDefault>
      <label for="name-input"> Virtues's name </label>
      <input
        on:input={handleInput}
        placeholder="Self-discipline"
        id="name-input"
        value={name}
        type="text"
      />
      <button on:click={handleAddButton} class="button">Add virtue</button>
    </form>
  </div>
</div>

<style>
  .bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(1.2px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    background-color: var(--bg-color);
    padding: 2.3em 2em 1.8em 2em;
    border: 1px solid var(--text-color);
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .close-button {
    background: none;
    border: none;
    padding: 0.5em;
    width: 2.7rem;
    aspect-ratio: 1/1;
    position: absolute;
    top: 0em;
    right: 0em;
  }

  .close-button img {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 0.75rem;
    margin-bottom: 0.3em;
  }

  input {
    font-size: 0.844rem;
    padding: 0.5em 0.6em;
    margin-bottom: 1.5em;
  }

  form button {
    display: block;
    margin: auto;
  }
</style>
