<script>
  import closeSvg from "../../../assets/close.svg";
  import { isAddFormOpen, listElements } from "../../../store";
  import getId from "../../functions/home/getId";
  import getNewVirtueObject from "../../functions/home/getNewVirtueObject";
  let name = "";

  function handleAddButton() {
    const id = getId();
    listElements.update((list) => [...list, { id: id, name: name }]);

    const virtuesJson = window.localStorage.getItem("virtues");
    const newVirtue = getNewVirtueObject(id, name);
    let newVirtuesJson;
    if (!virtuesJson) {
      newVirtuesJson = JSON.stringify([newVirtue]);
    } else {
      const virtues = JSON.parse(virtuesJson);
      newVirtuesJson = JSON.stringify([...virtues, newVirtue]);
    }
    window.localStorage.setItem("virtues", newVirtuesJson);

    closeAddForm();
  }

  function handleInput(e) {
    name = e.currentTarget.value;
  }

  function closeAddForm() {
    isAddFormOpen.set(false);
  }

  // document.body.classList.add("overflow-hidden");
</script>

<div on:click|self={closeAddForm} class="bg">
  <div class="container">
    <button on:click={closeAddForm} class="close-button">
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
      <button on:click={handleAddButton} class="button">Add the virtue</button>
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
