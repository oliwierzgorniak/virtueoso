<script>
  import { activeVirtue } from "../store";
  import getFeedback from "../detail/score/getFeedback";
</script>

<section class="container">
  <span><span class="points">{$activeVirtue.points}</span> virtue points</span>
  <span class="feedback">{getFeedback($activeVirtue.points)}</span>
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 2.6em;
  }

  .points {
    font-size: 1.2rem;
  }

  .feedback {
    font-size: 1.05rem;
    font-weight: 450;
  }
</style>
