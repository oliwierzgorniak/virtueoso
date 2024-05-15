<script>
  import { afterUpdate } from "svelte";
  import backSvg from "../../assets/back.svg";
  import { activeVirtue, isAddRecordOpen, location } from "../store";

  function handleBackButton() {
    location.set("home");
  }

  function handleReviewButton() {
    isAddRecordOpen.set(true);
  }

  let wasDayReviewed = false;

  function getWasDayReviewed() {
    if ($activeVirtue.history.length) {
      const lastRecord =
        $activeVirtue.history[$activeVirtue.history.length - 1];
      const lastRecordsDate = new Date(lastRecord.dateStr);
      const todaysDate = new Date();

      return (
        lastRecordsDate.getDate() == todaysDate.getDate() &&
        lastRecordsDate.getMonth() == todaysDate.getMonth() &&
        lastRecordsDate.getFullYear() == todaysDate.getFullYear()
      );
    }
  }
  wasDayReviewed = getWasDayReviewed();

  afterUpdate(() => {
    wasDayReviewed = getWasDayReviewed();
  });
</script>

<section>
  <nav>
    <button on:click={handleBackButton} class="back-button button"
      ><img class="back-arrow" src={backSvg} alt="back arrow" />
      <span>Go back</span></button
    >
  </nav>
  {#if !wasDayReviewed}
    <button on:click={handleReviewButton} class="button">Review the day</button>
  {/if}
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
