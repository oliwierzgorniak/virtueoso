<script>
  import { onMount } from "svelte";

  onMount(() => {
    let canvas = document.querySelector(".graph-canvas");
  });
</script>

<canvas class="graph-canvas" height="200" width="300"></canvas>

<style>
  canvas {
    border: var(--border-size) solid var(--text-color);
    width: 100%;
    margin-bottom: 2.6em;
    aspect-ratio: 3/2;
  }
</style>
