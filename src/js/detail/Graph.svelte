<script>
  import { onMount } from "svelte";
  import { activeVirtue } from "../store";
  import drawGraph from "./graph/drawGraph";

  onMount(() => {
    const canvas = document.querySelector(".graph-canvas");

    drawGraph(canvas, $activeVirtue);
  });
</script>

<canvas class="graph-canvas" height="200" width="300"></canvas>

<style>
  canvas {
    border: var(--border-size) solid var(--text-color);
    width: 100%;
    margin-bottom: 1.5em;
    aspect-ratio: 3/2;
  }
</style>
