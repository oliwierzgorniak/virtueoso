<script>
  import { activeVirtue } from "../store";
  import getFormatedDate from "./history/getFormatedDate";
  import getWordValue from "../detail/history/getPointsValue";

  const MAX_RECORDS = 5;
  function getRecords(showMore, _refreshVariable) {
    const historyLength = $activeVirtue.history.length;
    if (historyLength == 0) return [];
    const historyNotReversed = showMore
      ? $activeVirtue.history
      : $activeVirtue.history.slice(historyLength - MAX_RECORDS);
    return historyNotReversed.reverse();
  }

  let showMore = false;
  function handleButton() {
    showMore = true;
  }
</script>

<section class="container">
  <h2>History</h2>
  <ol>
    {#each getRecords(showMore, $activeVirtue) as record}
      <li>
        <span>{getFormatedDate(record.dateStr)}</span>
        <div class="rating-container">
          <span>{getWordValue(record.rating)}</span>
          <div class="points-container">
            <span class="rating-points">{record.rating}</span><span>vp</span>
          </div>
        </div>
      </li>
    {/each}
  </ol>
  {#if !showMore && $activeVirtue.history.length > MAX_RECORDS}
    <button on:click={handleButton}>Show more</button>
  {/if}
</section>

<style>
  h2 {
    margin-bottom: 0.35em;
  }

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1em var(--grey-attention) solid;
    padding: 0.7em 0;
  }

  .rating-container {
    display: flex;
    gap: 0.5em;
  }

  .rating-points {
    margin-right: 0.1em;
  }

  .points-container {
    width: 5.6ch;
    text-align: right;
  }

  button {
    border: none;
    background: none;
    color: #2b2b2b;
    text-decoration: underline;
    margin: auto;
    display: block;
    font-size: 0.8rem;
    margin-top: 1.1em;
  }
</style>
