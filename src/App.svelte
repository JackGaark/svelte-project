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
        {
          src:"images/05_come_together-02.jpg",
          type: "image"
        },
        {
          src: "videos/video7.mp4",
          type: "video"
        },
        {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
        }
        ]}
    />
    <ParallaxSlider 
        title="{$_('slider.2.title')}"
        slides={[
          {
            src: "images/ALTI_1.png",
            type: "image"
          },
          {
            src: "images/ALTI_2.png",
            type: "image"
          },
          {
            src: "images/ALTI_3.png",
            type: "image"
          },
          {
            src: "images/ALTI_4.png",
            type: "image"
          },
          {
            src: "images/ALTI_5.png",
            type: "image"
          },
          {
            src: "images/ALTI_6.png",
            type: "image"
          },
          {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
          }
        ]}
    />
    <ParallaxSlider
      title="{$_('slider.3.title')}"
      slides={[ 
        {
          src: "images/HSCo_Mag_1.png",
          type: "image"
        },
        {
          src: "images/HSCo_Mag_2.png",
          type: "image"
        },
        {
          src: "images/HSCo_Mag_3.png",
          type: "image"
        },
        {
          src: "images/HSCo_Mag_4.png",
          type: "image"
        },
        {
          src: "images/HSCo_Mag_5.png",
          type: "image"
        },
        {
          src: "images/HSCo_Mag_6.png",
          type: "image"
        },
        {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
        }
      ]}
    />
    <ParallaxSlider
      title="{$_('slider.4.title')}"
      slides={[
        {
          src: "images/NP_1.png",
          type: "image"
        },
        {
          src:"images/NP_2.png",
          type: "image"
        },
        {
          src:"videos/NP_3.mp4",
          type: "video"
        },
        {
          src:"videos/NP_4.mp4",
          type: "video"
        },
        {
          src:"videos/NP_5.mp4",
          type: "video"
        },
        {
          src:"images/NP_6.png",
          type: "image"
        },
        {
          src:"images/NP_7.png",
          type: "image"
        },
        {
          src:"videos/NP_8.mp4",
          type: "video"
        },
        {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
        }
        ]}
    />
    <ParallaxSlider
      title="{$_('slider.5.title')}"
      slides={[
        {
          src: "images/KOMBI_1.png",
          type: "image"
        },
        {
          src:"images/KOMBI_2.png",
          type: "image"
        },
        {
          src:"images/KOMBI_3.png",
          type: "image"
        },
        {
          src:"images/KOMBI_4.png",
          type: "image"
        },
        {
          src:"images/KOMBI_5.png",
          type: "image"
        },
        {
          src:"images/KOMBI_6.png",
          type: "image"
        },
        {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
        }
        ]}
    />
    <ParallaxSlider
      title="{$_('slider.6.title')}"
      slides={[
        {
          src: "images/LB_1_1.png",
          type: "image"
        },
        {
          src:"images/LB_1_2.png",
          type: "image"
        },
        {
          src:"images/LB_1_3.png",
          type: "image"
        },
        {
          src:"images/LB_1_5.png",
          type: "image"
        },
        {
          src:"images/LB_1_6.png",
          type: "image"
        },
        {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
        }
        ]}
    />
    <ParallaxSlider
      title="{$_('slider.7.title')}"
      slides={[ 
        {
          src: "images/LB_2_1.png",
          type: "image"
        },
        {
          imageSrc: "images/LB_2_1.png",
          videoSrc: "videos/video7.mp4",
          type: "two-columns"
        },
        {
          src: "images/LB_2_2.png",
          type: "image"
        },
        {
          src: "images/LB_2_3.png",
          type: "image"
        },
        {
          src: "images/LB_2_4.png",
          type: "image"
        },
        {
          src: "images/LB_2_5.png",
          type: "image"
        },
        {
          src: "images/LB_2_6.png",
          type: "image"
        },
        {
          src:"images/LB_2_7.png",
          type: "image"
        },
        {
          src:"images/LB_2_8.png",
          type: "image"
        },
        {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
        }
      ]}
    />
    
    <ParallaxSlider
      title="{$_('slider.8.title')}"
      slides={[
        {
        src: "images/HIRRS_1.png",
        type: "image"
        },
        {
        src: "images/HIRRS_2.png",
        type: "image"
        },
        {
          src: "images/HIRRS_3.png",
          type: "image"
        },
        {
          src: "images/HIRRS_4.png",
          type: "image"
        },
        {
          src: "images/HIRRS_5.png",
          type: "image"
        },

        {
          src: "images/HIRRS_6.png",
          type: "image"
        },
        {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
        },
        {
          src: "The body sats what words cannot- vulnerable, free and quitely powerful.  Our creative direction counterbalances traditional beauty ideals and removes the male gaze to introduce a woman's body in a new and real context. HIRRS is designed for a woman's movement.",
          type: "text",
          title: "Heading file"
        }
      ]}   
    />
    <ParallaxSlider
      title="{$_('slider.9.title')}"
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
        }
      ]}
    />
    <ParallaxSlider
    title="{$_('slider.10.title')}"
    slides={[
        {
          src: "images/10-sb_4.jpg",
          type: "image"  
        }
      ]}
  />
    <ParallaxSlider
      title="{$_('slider.11.title')}"
      slides={[
          {
          src: "images/18-sb-denisets.jpg",
          type: "image"
          },
          { 
          src: "images/19-sb_cis_9b.jpg",
          type: "image"
          },
          { 
          src: "images/20-sb-rentree4.jpg",
          type: "image"
          },
          { 
          src: "images/21-sb_cis_8.jpg",
          type: "image"
          },
          { 
          src: "images/24-sb_cis_10.jpg",
          type: "image"
          },
          { 
          src: "images/24-sb_cis_10.jpg",
          type: "image"
          }
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
