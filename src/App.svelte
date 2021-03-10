<script>
  import ParallaxSlider from "./ParallaxSlider.svelte";
  import PopUp from "./PopUp.svelte";

  let open = false;
  function showModal() {
    open = true;
  }
  function hideModal() {
    open = false;
  }
</script>

<div class="header">
  <button on:click={showModal}> ? </button>
</div>
<PopUp bind:open>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi
    assumenda delectus! Sint sapiente, non commodi perspiciatis totam pariatur
    voluptatum veritatis minus. Quam, voluptatum harum perspiciatis soluta
    cumque debitis quas!
  </p>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque excepturi
    assumenda delectus! Sint sapiente, non commodi perspiciatis totam pariatur
    voluptatum veritatis minus. Quam, voluptatum harum perspiciatis soluta
    cumque debitis quas!
  </p>
</PopUp>

<main>
  <div class="container">
    <ParallaxSlider
      title="This is the first title"
      slides={[
        "images/01-sb_cis_7.jpg",
      ]}
    />
    <ParallaxSlider
      title="This is a random title 2"
      slides={[
        "images/02-sb_aldo2.jpg",
        "images/04-sb_rise_1b.jpg",
        "images/05-sb_ka_1.jpg",
        "images/06-sb_cis_2.jpg",
        "images/07-sb_cis_3.jpg",
        "images/08-sb-boxts.jpg",
      ]}
    />
    <ParallaxSlider
      title="This is a random title 3"
      slides={[
        "images/09-sb_ka_3.jpg",
        "videos/video1.mov"
      ]}
    />
    <ParallaxSlider
      title="This is a random title 4"
      slides={[
        "images/11-sb_2.jpg",
        "images/12-sb-berlinb.jpg",
        "images/13-sb_rise_4b.jpg",
        "images/14-sb_cis_6.jpg",
        "images/16-sb_boy_1.jpg",
        "images/17-sb_cis_5.jpg",
      ]}
    />
    <ParallaxSlider
    title="This is a random title 5"
    slides={[
      "images/10-sb_4.jpg",
    ]}
  />
    <ParallaxSlider
    title="This is a random title 6"
      slides={[
        "images/18-sb-denisets.jpg",
        "images/19-sb_cis_9b.jpg",
        "images/20-sb-rentree4.jpg",
        "images/21-sb_cis_8.jpg",
        "images/24-sb_cis_10.jpg",
        "images/24-sb_cis_10.jpg",
      ]}
    />
  </div>
</main>

<style>
  :global(body) {
    padding: 0;
  }

  .container {
    overflow: hidden;
  }

  .header {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 1000;
    font-family: "Opposit-Medium";
  }

  p {
    font-size: 18px;
    font-family: "Opposit-Medium";
  }
</style>
