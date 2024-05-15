<script>
  import closeSvg from "../../assets/close.svg";
  import { activeVirtue, isAddRecordOpen } from "../store";
  // import getNewVirtueObject from "../home/addForm/getNewVirtueObject";
  let rating = "-2";

  function handleAddButton() {
    const id = $activeVirtue.id;

    const virtuesJson = window.localStorage.getItem("virtues");
    const virtues = JSON.parse(virtuesJson);
    const newVirtues = virtues.map((virtue) => {
      if (virtue.id == id) {
        const newRecord = {
          dateStr: new Date().toISOString(),
          rating: +rating,
        };
        virtue.history.push(newRecord);
        virtue.points += +rating;

        activeVirtue.set(virtue);
        console.log($activeVirtue);
      }

      return virtue;
    });

    window.localStorage.setItem("virtues", JSON.stringify(newVirtues));

    closeAddForm();
  }

  function handleInput(e) {
    rating = e.currentTarget.value;
  }

  function closeAddForm() {
    isAddRecordOpen.set(false);
  }

  // document.body.classList.add("overflow-hidden");
</script>

<div on:click|self={closeAddForm} class="bg">
  <div class="container">
    <button on:click={closeAddForm} class="close-button">
      <img src={closeSvg} alt="close" />
    </button>
    <form on:submit|preventDefault>
      <label for="review-select"> Review </label>
      <select on:change={handleInput} value="-2">
        <option value="-10">Very bad</option>
        <option value="-5">Bad</option>
        <option value="-2">Neutral</option>
        <option value="5">Good</option>
        <option value="10">Very good</option>
      </select>
      <button on:click={handleAddButton} class="button">Review the day</button>
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
    top: 0;
    left: 0;
  }

  .container {
    background-color: var(--bg-color);
    padding: 2.3em 2em 1.8em 2em;
    border: var(--border-size) solid var(--text-color);
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

  select {
    font-size: 0.844rem;
    padding: 0.5em 0.6em;
    margin-bottom: 1.5em;
  }

  form button {
    display: block;
    margin: auto;
  }
</style>
