<script>
  import { onMount } from "svelte";
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  const slides = [
    "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
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
    background: url("https://images.unsplash.com/photo-1606726712298-a9d14f8297a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80");
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
