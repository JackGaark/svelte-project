<script>
  import ParallaxSlider from "./ParallaxSlider.svelte";
</script>

<main>
  <div class="container">
    <div
      class="section"
      style="background: blue; background: url('images/02-sb_aldo2.jpg'); background-size: cover; background-attachment: fixed; background-reapeat: no-repeat;"
    />
    <ParallaxSlider
      slides={[
        "images/01-sb_cis_7.jpg",
        "images/02-sb_aldo2.jpg",
        "images/04-sb_rise_1b.jpg",
        "images/05-sb_ka_1.jpg",
        "images/06-sb_cis_2.jpg",
        "images/07-sb_cis_3.jpg",
      ]}
    />
    <div
      class="section"
      style="background: blue; background: url('images/01-sb_cis_7.jpg'); background-size: cover; background-attachment: fixed; background-reapeat: no-repeat;"
    />
    <div
      class="section"
      style="background: blue; background: url('images/01-sb_cis_7.jpg'); background-size: cover; background-attachment: fixed; background-reapeat: no-repeat;"
    />
    <ParallaxSlider
      slides={[
        "images/01-sb_cis_7.jpg",
        "images/02-sb_aldo2.jpg",
        "images/04-sb_rise_1b.jpg",
        "images/05-sb_ka_1.jpg",
        "images/06-sb_cis_2.jpg",
        "images/07-sb_cis_3.jpg",
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
  .section {
    height: 100vh;
    width: 100vw;
  }
</style>
