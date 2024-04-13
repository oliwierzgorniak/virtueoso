<script>
  import { activeVirtue } from "../../../store";
  import getFeedback from "../../functions/detail/getFeedback";

  let feedback = getFeedback($activeVirtue.virtuePoints);
</script>

<section class="container">
  <span>{$activeVirtue.virtuePoints}</span> <span>{feedback}</span>
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
  }
</style>
