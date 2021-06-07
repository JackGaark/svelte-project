<script>
  import { fly } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";
  let scrollY;
  export let modalOpen = false;
  export let bonjourOpen = false;
  function showModal() {
    modalOpen = true;
  }
  function hideModal() {
    modalOpen = false;
  }

  function showBonjourDialog() {
    bonjourOpen = true;
  }
  function hideBonjourDialog() {
    bonjourOpen = false;
  }
</script>

<svelte:window bind:scrollY />

{#if modalOpen}
  <div
    class="popup"
    style="top:{scrollY}px"
    transition:fly={{
      y: -window.innerHeight,
      duration: 1000,
    }}
  >
  <img src="images/dialog-icon.png" class="dialog-icon" alt="Dialog icon" on:click={hideModal} />
    <img src="images/dialog-center.jpeg" class="dialog-center" alt="Dialog center" />
    <img class="image-logo" src="images/00-sb-logo-simple-white.svg" alt="Logo" />
    <div class="bonjour-button" on:click={showBonjourDialog}>Say Bonjour</div>
    {#if bonjourOpen}
      <div class="bonjour-dialog" transition:fly={{
        y: -window.innerHeight,
        duration: 1000,
      }}>
      <div class="bonjour-dialog-container">
        <h1>Say Hi!</h1>
        <div class="bonjour-close-dialog">
          <span on:click={hideBonjourDialog}>Close</span>
        </div>
      </div>
      </div>
    {/if}
    <div class="modal-container">
      <div class="modal-section left-side">
        <div class="modal-section-content">
          <h5 class="title">Hi there, Bounjour and Bienvenue.</h5>
          <p class="left-text"> 
            We are a creative studio - based on two of Canada's three coasts.
            With HQs in both Montréal and Vancouver, we make sure we work almost all the timezones (lolz).
            Got budget? Hit us up! we deliver sweet sweet creative, zappy copy or slick code. Wegotchu.
            What if we had more text and a few more sentences in here? Then we would need to scroll some more...
            A little more, still.
          </p>
        </div>
      </div>
      <img src="images/dialog-center.jpeg" class="dialog-center-mobile" alt="Dialog center" />
      <div class="modal-section right-side">
        <div class="right modal-section-content">
          <div class="services">
            <h5>Services</h5>
            <ul>
              <li>Strategy</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Creative Direction</li>
              <li>Art Direction</li>
              <li>Motion</li>
              <li>Production</li>
              <li>Digital</li>
              <li>Content</li>
            </ul>
          </div>
          <div class="client-list">
            <h5>Client List</h5>
            <ul>
              <li>Kombi Canada</li>
              <li>Nike</li>
              <li>Altitude Sports</li>
              <li>Little Burgundy</li>
              <li>Saxx Underwear</li>
              <li>Fable Home</li>
              <li>Herschel Supply Co.</li>
              <li>Call it Spring</li>
              <li>Aldo</li>
              <li>Hirrs</li>
              <li>Nine Point Agency</li>
              <li>Alain Carle Architect</li>
              <li>Osei Duro</li>
              <li>Koppitsch Wine</li>
              <li>Boxermans</li>
              <li>Loic</li>
              <li>Denise</li>
              <li>Kit and Ace</li>
              <li>Oh Baby Nutrition</li>
              <li>La Firme</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .popup {
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 1500;
  }
  .modal-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    height: 100vh;
    width: 100vw;

  }
  .modal-section {
    width: 50%;
    min-width: 300px;
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .left-side {
    background-color: #1900FF;
  }
  .right-side {
    background-color: #E2EE75;
  }
  .modal-section-content {
    padding: 50px;
    padding-top: 150px;
    position: relative;
  }
  .modal-section-content p {
    position: absolute;
    z-index:1;
  }
  .dialog-icon {
    position: absolute;
    right: 0;
    width: 50px;
    padding: 50px;
    cursor: pointer;
    z-index: 4;
  }
  .modal-container {
    color: #fff;
    overflow: auto;
  }
  
  .dialog-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .left-text {
    font-size: 46px;
    line-height: 60px;
  }

.right.modal-section-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
  
.right.modal-section-content h5 {
  color: #C84501
}
.right.modal-section-content ul {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #1900FF
}
.dialog-center-mobile {
  display: none;
}
.dialog-center, .dialog-center-mobile {
  opacity: 0.85;
}

.image-logo {
    position: absolute;
    left: 25px;
    top: 25px;
    width: 250px;
    z-index: 1;
  }
  .bonjour-button {
    background-color:#C84501;
    writing-mode: vertical-rl;
    text-orientation: upright;
    position: absolute;
    right: 25px;
    top: 50vh;
    color:#1900FF;
    padding: 10px;
    border-radius: 15px;
    font-size:0.7rem;
    z-index: 2;
  }
  .bonjour-dialog {
  width: 400px;
  height: 600px;
  position: absolute;
  z-index: 3;
  background-color: #E2EE75;
  border: solid 1px #C84501;
  top: 50vh;
  right:0;
  padding: 25px;
}
.bonjour-dialog-container {
  position:relative;
}
.bonjour-close-dialog {
  position: absolute;
  right: 0;
  top: -5px;
  font-weight: 700;
  font-size: 1.3rem
}
@media screen and (max-width: 600px) {
  .modal-section {
    width: 100%;
    flex: 1;
    overflow:initial
  }
  .dialog-center-mobile {
    display: block;
  }
  .dialog-center {
    display:none;
  }

  .modal-container { 
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    overflow-y: auto;
  }
  .modal-section-content p {
    position: relative;
  }
  .bonjour-dialog {
    width: 70vw;
    height: 80vh;
    top:100px
  }
}
</style>
