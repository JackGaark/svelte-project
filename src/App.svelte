<script>
  import ParallaxSlider from "./ParallaxSlider.svelte";
  import PopUp from "./PopUp.svelte";
  import { _ } from 'svelte-i18n';
import { initI18n } from "./i18n/i18n";

  initI18n();

  let modalOpen = false;
  function showModal() {
    modalOpen = true;
  }
  function hideModal() {
    modalOpen = false;
  }
</script>


<div class="header">
    <img src="images/dialog-icon.png" class="dialog-icon" alt="Dialog icon" on:click={showModal} />
</div>

<PopUp bind:modalOpen></PopUp>

<main>
  <div class="container">
    <ParallaxSlider
      title="{$_('slider.1.title')}"
      slides={[
        "images/01-sb_cis_7.jpg",
      ]}
    />
    <ParallaxSlider
      title="{$_('slider.2.title')}"
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
      title="{$_('slider.3.title')}"
      slides={[
        "images/09-sb_ka_3.jpg",
        "videos/video1.mov"
      ]}
    />
    <ParallaxSlider
      title="{$_('slider.4.title')}"
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
    title="{$_('slider.5.title')}"
    slides={[
      "images/10-sb_4.jpg",
    ]}
  />
    <ParallaxSlider
      title="{$_('slider.6.title')}"
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

  .dialog-icon {
    width: 50px;
    padding: 50px;
    cursor: pointer;
  }
</style>
