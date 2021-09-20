<script>
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  import { debug } from "svelte/internal";

  let activeSlide;
  let slide = 0;
  let x = 0;
  export let slides;
  export let newSlides;
  export let title;

  console.log(newSlides)

  const nextSlide = () => {
    // {console.log ("hello world from next slide")}
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
      {#if slide.type === "image"}
        <div
          id={i}
          class={`slide ${sliderCursor}`}
          style={`background-position: ${i}00vw center; background-image: url(${slide.src})`}
        />
      {:else}
        {#if slide.type === "video"}
        <div
          id={i}
          class={`slide slide-video ${sliderCursor}`}
          style={`background-position: ${i}00vw center;`}
        >
          <!-- svelte-ignore a11y-media-has-caption -->
          <video src={slide.src} autoplay loop muted />
        </div>
        {:else}
        <div class="text_slide">
          <div class="text_slide_container">
            <h5 class="text_title">
              {slide.title}
            </h5>{slide.src}
          </div> 
        </div>
        {/if}
      {/if}
    {/each}
  </div>
  <div class="paginator">
    <h4>{slide + 1} / {slides.length}</h4>
  </div>
</div>

<style>
  .text_slide_container {
    padding-left: 55px;
    padding-top: 80px;
    width: 60%;
  }
  
  .text_title {
    padding-top: 50px;
    color: #E2EE75;
    font-size: 18px;
    font-weight: 100;
    font-family: "Opposit-Medium";

  }
  
  .text_slide {
    background-color: #290B15;
    height: 100vh;
    width: 100vw;
    color: white;
    text-align: 15vw;
    font-size: 54px;
    font-weight: 100;
    font-family: "Moret Regular";
  }
  
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
    bottom: 0;
    right: 20vw;
    text-align: center;
    width: 100px;
    font-family: "Moret Regular";
    /* background-color: rgb(255 255 255 / 80%); */
    color: #fff;
    font-size: 36px;
  }

  .slider-title {
    font-family: "Opposit-Medium";
    /* background-color: rgb(255 255 255 / 80%); */
    min-width: 20vw;
    padding: 55px;
    margin-bottom: 0;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    color: #fff;
    font-size: 38px;
  }
  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  .image-logo {
    position: fixed;
    left: 55px;
    top: 35px;
    width: 177px;
    height: 4.75rem;
    z-index: 1;
    cursor: url(/images/home-cursor.png), auto;
  }

  .right-cursor {
    cursor: url(/images/right-cursor.svg), auto;
  }
  .left-cursor {
    cursor: url(/images/left-cursor.svg), auto;
  }

  @media screen and (max-width: 1200px) {
    .slider-title {
      bottom: 0;
      font-size: 2.25rem;
    }
    .paginator {
      font-size: 1.6rem;
      right: 20vw;
      bottom: 0;
      margin-bottom: 55px;
    }

    .slide {
        background-attachment: scroll;
        /* height: 60vw; */
        background-position: center !important;
    }
 
    .image-logo {
      width: 125px;
    }
  }

  @media screen and (max-width: 600px) {
    .slider-title {
      font-size: 1.2rem;
      width: 5vw;
    }

    .paginator{
      font-size: 1.2rem;
      right: 5vw;
    }
  }
</style>
