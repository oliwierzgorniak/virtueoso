<script>
  import { activeVirtue } from "../../../store";
  import getFormattedDate from "../../functions/detail/getFormattedDate";
  import getPointsValue from "../../functions/detail/getPointsValue";
</script>

<section class="container">
  <h2>History</h2>
  <ol>
    {#each $activeVirtue.history as record}
      <li>
        <span>{getFormattedDate(record.dateStr)}</span>
        <div>
          <span>{record.rating}</span><span
            ><span class="rating-points">{getPointsValue(record.rating)}</span
            >vp</span
          >
        </div>
      </li>
    {/each}
  </ol>
  <button>Show more</button>
</section>

<style>
  h2 {
    margin-bottom: 0.5em;
  }

  section {
  }

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1em var(--grey-attention) solid;
    padding: 0.7em 0;
  }

  .rating-points {
    margin-left: 1.5em;
    margin-right: 0.1em;
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
