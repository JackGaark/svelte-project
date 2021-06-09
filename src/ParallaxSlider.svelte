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

  const Cursors = {
    RIGHT: 'right-cursor',
    LEFT: 'left-cursor',
  };

  const handleSliderClick = () => {
    if(sliderCursor === Cursors.RIGHT) {
      nextSlide();
    }else if(sliderCursor === Cursors.LEFT) {
      prevSlide();
    }
  }

  const onActiveSlide = (n) => {
    slide = n;
    activeSlide.style.transform = `translate3d(-${n}00vw, 0, 0)`;
  };

  let sliderCursor = 'cursor';
  let wrapperWidth = 0;

	function handleMousemove(event) {
    const cursorXPosition = event.clientX;
    sliderCursor = (wrapperWidth / 2) <= cursorXPosition ? Cursors.RIGHT : Cursors.LEFT; 
	}
</script>

<div class="slider-wrapper" bind:clientWidth={wrapperWidth} on:mousemove={handleMousemove}>
  <img class="image-logo" src="images/00-sb-logo-simple-white.svg" alt="Logo" />
  <h2 class="slider-title">{title}</h2>
  <div
    class={`slider ${sliderCursor}`}
    bind:this={activeSlide}
    on:click={handleSliderClick}
    style={`width: ${slides.length}00vw`}
  >
    {#each slides as slide, i}
      {#if slide.indexOf("videos") < 0}
        <div
          id={i}
          class={`slide ${sliderCursor}`}
          style={`background-position: ${i}00vw center; background-image: url(${slide})`}
        />
      {:else}
        <div
          class={`slide slide-video ${sliderCursor}`}
          style={`background-position: ${i}00vw center;`}
        >
          <!-- svelte-ignore a11y-media-has-caption -->
          <video src={slide} autoplay loop muted />
        </div>
      {/if}
    
    {/each}
  </div>
  <div class="paginator">
    <h4>{slide + 1} / {slides.length}</h4>
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
    font-family: "Roc Wide";
    position: absolute;
    width: 70px;
    cursor: pointer;
    top: 0;
    bottom: 0;
    margin: auto;
    color: #fff;
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
    font-family: "Moret Regular";
    /* background-color: rgb(255 255 255 / 80%); */
    color: #fff;
    font-size: 36px;
    padding: 25px;
    width: 100px;
    margin: 0 auto;
  }
  .slider-title {
    font-family: "Opposit-Medium";
    /* background-color: rgb(255 255 255 / 80%); */
    min-width: 20vw;
    padding: 15px;
    position: absolute;
    z-index: 1;
    left: 15px;
    bottom: 0;
    color: #fff;
    font-size: 50px;
  }
  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  .image-logo {
    position: fixed;
    left: 25px;
    top: 25px;
    width: 250px;
    z-index: 1;
    cursor: url(/images/home-cursor.png), auto;
  }

  .right-cursor {
    cursor: url(/images/right-cursor.png), auto;
  }
  .left-cursor {
    cursor: url(/images/left-cursor.png), auto;
  }

  @media screen and (max-width: 1200px) {
    .slider-title {
      bottom: 50px;
      font-size: 42px;
    }
    .paginator {
      bottom: 0;
    }
    .paginator > h4 {
      font-size: 32px;
    }

  .slide {
      background-attachment: scroll;
      height: 60vw;
      background-position: center !important;
  }

    .image-logo {
      width: 125px;
    }
    .slider-title {
      font-size: 14px;
      bottom: 30;
      left: 5px;
    }
  }

  @media screen and (max-width: 600px) {
    .slider-title {
      font-size: 32px;
    }

    .paginator > h4 {
      font-size: 24px;
    }
  }
</style>
