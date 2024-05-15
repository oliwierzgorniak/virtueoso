<script>
  import backSvg from "../../assets/back.svg";
  import { isAddRecordOpen, location } from "../store";

  function handleBackButton() {
    location.set("home");
  }

  function handleReviewButton() {
    isAddRecordOpen.set(true);
  }
</script>

<section>
  <nav>
    <button on:click={handleBackButton} class="back-button button"
      ><img class="back-arrow" src={backSvg} alt="back arrow" />
      <span>Go back</span></button
    >
  </nav>
  <button on:click={handleReviewButton} class="button">Review the day</button>
</section>

<style>
  section {
    display: flex;
    gap: 1.1em;
    position: fixed;
    bottom: 3em;
    left: 50%;
    transform: translateX(-50%);
  }

  .back-button {
    background: transparent;
    display: flex;
    gap: 0.5em;
    width: max-content;
    align-items: center;
  }

  .back-arrow {
    margin-top: -2px;
  }
</style>
