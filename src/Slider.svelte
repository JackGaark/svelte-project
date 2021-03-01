<script>
  import { onMount } from "svelte";
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  const slides = [
    "images/01-sb_cis_7.jpg",
    "images/02-sb_aldo2.jpg",
    "images/01-sb_cis_7.jpg",
    "images/02-sb_aldo2.jpg",
    "images/01-sb_cis_7.jpg",
    "images/02-sb_aldo2.jpg",
  ];

  onMount(() => {
    const elements = document.querySelectorAll(".slide");

    elements.forEach((item, i) => {
      const width = `${i}00`;
      item.style.backgroundPosition = `${width - i}vw`;
    });
  });
</script>

<div class="container">
  <div class="section" />

  <Carousel perPage="1">
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>

    {#each slides as slide, i}
      <div
        class="slide"
        style={`background: url(${slide}); background-position: ${i}00vw; background-size: cover; background-attachment: fixed; background-repeat: no-repeat;`}
      />
    {/each}

    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </Carousel>
</div>

<style>
  :global(body) {
    padding: 0;
  }
  .section {
    background: url("images/01-sb_cis_7.jpg");
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }

  .slide {
    height: 100vh;
    width: 101vw;
  }
</style>
