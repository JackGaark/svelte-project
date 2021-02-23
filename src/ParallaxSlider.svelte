<script>
  import { onMount } from "svelte";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  let activeSlide;
  let slide = 0;
  let x = 0;
  let clientX = 0;
  export let slides ;

  const nextSlide = () => {
    if (slide < 2) {
      activeSlide.style.transform = `translate3d(-${slide + 1}00vw, 0, 0)`;
      slide += 1;
    } else {
      activeSlide.style.transform = `translate3d(0vw, 0, 0)`;
      slide = 0;
    }
  };

  const prevSlide = () => {
    if (slide === 0) {
      activeSlide.style.transform = `translate3d(-200vw, 0, 0)`;
      slide = 2;
    } else {
      activeSlide.style.transform = `translate3d(-${slide - 1}00vw, 0, 0)`;
      slide = slide - 1;
    }
  };

  const onActiveSlide = (n) => {
    slide = n;
    activeSlide.style.transform = `translate3d(-${n}00vw, 0, 0)`;
  };

  const onTouchStart = (e) => {
    e.stopPropagation();
    x = e.x;
    activeSlide.style.cursor = "move";
  };

  onMount(() => {
    const elements = document.querySelectorAll(".slide");
    elements.forEach((item) => {
      item.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        clientX = e.x;
        item.addEventListener("mousemove", onTouchStart);
      });

      item.addEventListener("mouseup", (e) => {
        e.stopPropagation();
        item.removeEventListener("mousemove", onTouchStart);
        activeSlide.style.cursor = "default";
        if (x < clientX) {
          nextSlide();
        } else {
          prevSlide();
        }
      });
    });
  });

  
</script>

<div class="slider-wrapper">
  <div class="slider" bind:this={activeSlide}>
    {#each slides as slide, i}
      <div class="slide" style={`background-position: ${i}00vw; background: url(${slide})`} />
    {/each}
  </div>

  <div class="actions">
    <div class="arrow left">
      <span on:click={prevSlide}>
        <ChevronLeftIcon />
      </span>
    </div>
    <div class="arrow right">
      <span on:click={nextSlide}>
        <ChevronRightIcon />
      </span>
    </div>
  </div>
  <div class="dots">
    <div on:click={() => onActiveSlide(0)} class={slide === 0 && "active"} />
    <div on:click={() => onActiveSlide(1)} class={slide === 1 && "active"} />
    <div on:click={() => onActiveSlide(2)} class={slide === 2 && "active"} />
  </div>
</div>

<style>
    .slider {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: 300vw;
    transition: all 200ms ease-out 0s;
  }

  .slide {
    height: 100vh;
    width: 100vw;
    background: red;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    transition: all 200ms ease-out 0s;
  }

  .slider-wrapper {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: 100vw;
    overflow: hidden;
    transition: 0.3s all;
  }

  .arrow {
    position: absolute;
    width: 70px;
    cursor: pointer;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .dots {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }

  .dots > div {
    height: 10px;
    width: 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
    display: inline-block;
    margin: 0px 3px;
  }

  .dots .active {
    background-color: rgba(255, 255, 255, 0.5);
  }

</style>
