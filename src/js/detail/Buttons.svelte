<script>
  import backSvg from "../../assets/back.svg";
  import { location } from "../store";

  function handleBackButton() {
    location.set("home");
  }
</script>

<section>
  <nav>
    <button on:click={handleBackButton} class="back-button button"
      ><img src={backSvg} alt="back arrow" /> <span>Go back</span></button
    >
  </nav>
  <button class="button">Review the day</button>
</section>

<style>
  section {
    display: flex;
    gap: 1.1em;
    position: fixed;
    bottom: 3em;
  }

  .back-button {
    background: transparent;
    display: flex;
    gap: 0.5em;
    width: initial;
  }
</style>
