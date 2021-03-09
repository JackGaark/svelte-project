<script>
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  let activeSlide;
  let slide = 0;
  let x = 0;
  export let slides;
  export let title;

  const nextSlide = () => {
    if (slide < slides.length - 1) {
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
      slide = slides.length - 1;
    } else {
      activeSlide.style.transform = `translate3d(-${slide - 1}00vw, 0, 0)`;
      slide = slide - 1;
    }
  };

  const onActiveSlide = (n) => {
    slide = n;
    activeSlide.style.transform = `translate3d(-${n}00vw, 0, 0)`;
  };

</script>

<div class="slider-wrapper" >
  <h2 class="slider-title">{title}</h2>
  <div
    class="slider"
    bind:this={activeSlide}
    style={`width: ${slides.length}00vw`}
  >
    {#each slides as slide, i}
      {#if slide.indexOf('videos') < 0}
        <div
          id={i}
          class="slide"
          style={`background-position: ${i}00vw center; background-image: url(${slide})`}
          on:click={nextSlide}
        />
      {:else}
        <div
          class="slide slide-video"
          style={`background-position: ${i}00vw center;`}
          on:click={nextSlide}
          >
          <!-- svelte-ignore a11y-media-has-caption -->
          <video src={slide} autoplay loop></video>
        </div>
      {/if}
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
  <div class="paginator">
    <h4>{slide+1} / {slides.length}</h4>
  </div>
</div>

<style>
  .slider {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    transition: all 200ms ease-out 0s;
  }

  .slide {
    height: 100vh;
    width: 100vw;
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
    font-family: 'Roc Wide';
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

  .paginator {
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }

  .paginator > h4 {
    font-family: 'Moret Regular';
    background-color: rgb(157 157 157 / 74%);
    color: #363636;
    font-size: 24px;
    padding: 25px;
    width: 100px;
    margin: 0 auto;
  }
  .slider-title {
    font-family: 'Opposit-Medium';
    background-color: rgb(157 157 157 / 74%);
    min-width: 20vw;
    padding: 15px;
    position: absolute;
    z-index: 1;
    right: 15px;
    bottom: 0;
    color: #363636;
    font-size: 36px;
    -webkit-box-shadow: 0px 0px 10px 5px rgb(199 199 199 / 76%);
    -moz-box-shadow: 0px 0px 10px 5px rgb(199 199 199 / 76%);
    box-shadow: 0px 0px 10px 5px rgb(199 199 199 / 76%);
}
video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
