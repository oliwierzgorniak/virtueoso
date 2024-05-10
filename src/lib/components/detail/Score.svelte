<script>
  import { activeVirtue } from "../../../store";
  import getFeedback from "../../functions/detail/getFeedback";

  let feedback = getFeedback($activeVirtue.points);
</script>

<section class="container">
  <span>{$activeVirtue.points}</span> <span>{feedback}</span>
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
  }
</style>
