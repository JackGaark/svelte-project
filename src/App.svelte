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
        {
          src: "images/01_details_matter.jpg",
          type: "image"
        },
        {
          src:"images/01_lay_the_table-03.jpg",
          type: "image"
        },
        {
          src:"images/06_shot_so_fresh.jpg",
          type: "image"
        },
        {
          src:"images/03_back_in_stock.jpg",
          type: "image"
        },
        {
          src:"images/04_lay_the_table-04.jpg",
          type: "image"
        },
        ]}
    />
    <ParallaxSlider
      title="{$_('slider.2.title')}"
      slides={[ 
        {
          src: "images/02-sb_aldo2.jpg",
          type: "image"
        },
        {
          src: "images/04-sb_rise_1b.jpg",
          type: "image"
        },
        {
          src: "images/05-sb_ka_1.jpg",
          type: "image"
        },
        {
          src: "images/06-sb_cis_2.jpg",
          type: "image"
        },
        {
          src: "images/07-sb_cis_3.jpg",
          type: "image"
        },
        {
          src: "images/08-sb-boxts.jpg",
          type: "image"
        },
        {
          src: "Lodor Ipsum",
          type: "text"
        },
        
      ]}
    />
    <ParallaxSlider
      title="{$_('slider.3.title')}"
      slides={[
        {
        src: "images/09-sb_ka_3.jpg",
        type: "image"
        },
        {
        src: "videos/video1.mov",
        type: "video"
        },
        {
          src: "videos/video2.mov",
          type: "video"
        },
        {
          src: "videos/video3.mov",
          type: "video"
        },
        {
          src: "videos/video4.mov",
          type: "video"
        }
      ]}   
    />
    <ParallaxSlider
      title="{$_('slider.4.title')}"
      slides={[
        {
          src:"images/11-sb_2.jpg",
          type: "image"
        },
        {
          src: "images/12-sb-berlinb.jpg",
          type: "image"
        },
        {
          src: "images/13-sb_rise_4b.jpg",
          type: "image"
        },
        {
          src: "images/14-sb_cis_6.jpg",
          type: "image"
        },
        {
          src: "images/16-sb_boy_1.jpg",
          type: "image"
        },
        {
          src: "images/17-sb_cis_5.jpg",
          type: "image"
        },
        {
          src: "videos/video5.mp4",
          type: "video"
        }
      ]}
    />
    <ParallaxSlider
    title="{$_('slider.5.title')}"
    slides={[
        {
          src: "images/10-sb_4.jpg",
          type: "image"  
        },
        {
          src: "videos/video6.mp4",
          type: "videos"
        }
      ]}
  />
    <!-- <ParallaxSlider
      title="{$_('slider.6.title')}"
      slides={[
        "images/18-sb-denisets.jpg",
        "images/19-sb_cis_9b.jpg",
        "images/20-sb-rentree4.jpg",
        "images/21-sb_cis_8.jpg",
        "images/24-sb_cis_10.jpg",
        "images/24-sb_cis_10.jpg",
      ]}
    /> -->
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
    width: 64px;
    height: 39px;
    padding: 33px;
    cursor: pointer;
    margin-top: 60px;
    margin-right: 54px;
  }
  
  @media screen and (max-width:600px){
    .dialog-icon {
      width: 37px;
      height: 23px;
      padding: 15px;
    }
  }
  
</style>
