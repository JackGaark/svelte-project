<script>
  import { fly } from "svelte/transition";
  import { _ } from 'svelte-i18n';
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
  <img src="images/dialog-icon-mobile.png" class="dialog-icon mobile" alt="Dialog icon" on:click={hideModal} />
  <img src="images/dialog-icon-mobile.png" class="dialog-icon mobile" alt="Dialog icon" on:click={hideModal} />
    <img src="images/dialog-center.jpeg" class="dialog-center" alt="Dialog center" />
    <img class="image-logo" src="images/00-sb-logo-simple-white.svg" alt="Logo" />
    <div class="bonjour-button" on:click={showBonjourDialog}>{$_('dialog.sayBonjour')}</div>
    {#if bonjourOpen}
      <div class="bonjour-dialog" transition:fly={{
        x: window.innerWidth,
        duration: 1000,
      }}>
      <div class="bonjour-dialog-container">
        <h1>{$_('dialog.sayHi.title')}</h1>
        <p class="p1">
          {$_('dialog.sayHi.p1.text1')} 
          {$_('dialog.sayHi.p1.text2')} 
          {$_('dialog.sayHi.p1.text3')} 
          {$_('dialog.sayHi.p1.text4')} 
          {$_('dialog.sayHi.p1.text5')} 
          {$_('dialog.sayHi.p1.text6')} 
          {$_('dialog.sayHi.p1.text7')} 
        </p>
        <div class="address">
          <h4>{$_('dialog.sayHi.address1.title')}</h4>
          <span>{$_('dialog.sayHi.address1.text')}</span>
        </div>
        <div class="address">
          <h4>{$_('dialog.sayHi.address2.title')}</h4>
          <span>{$_('dialog.sayHi.address2.text')}</span>
        </div>
        <div class="footer">
          <p>{$_('dialog.sayHi.footer.text')}</p>
        </div>
        <div class="bonjour-button close" on:click={hideBonjourDialog}>{$_('dialog.sayBonjour')}</div>
      </div>
      </div>
    {/if}
    <div class="modal-container">
      <div class="modal-section left-side">
        <div class="modal-section-content">
          <h5 class="title">{$_('dialog.title')}</h5>
          <p class="left-text"> 
            {$_('dialog.leftText')}
          </p>
        </div>
      </div>
      <img src="images/dialog-center-mobile.jpeg" class="dialog-center-mobile" alt="Dialog center" />
      <div class="modal-section right-side">
        <div class="right modal-section-content">
          <div class="services">
            <h5 class="title">{$_('dialog.services.title')}</h5>
            <ul>
              <li>{$_('dialog.services.strategy')}</li>
              <li>{$_('dialog.services.branding')}</li>
              <li>{$_('dialog.services.design')}</li>
              <li>{$_('dialog.services.creativeDirection')}</li>
              <li>{$_('dialog.services.artDirection')}</li>
              <li>{$_('dialog.services.motion')}</li>
              <li>{$_('dialog.services.production')}</li>
              <li>{$_('dialog.services.digital')}</li>
              <li>{$_('dialog.services.content')}</li>
            </ul>
          </div>
          <div class="client-list">
            <h5 class="title">{$_('dialog.clientList.title')}</h5>
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
    height: 80vh;
    width: 100vw;
    font-family: 'roc-grotesk';

  }
  .modal-section {
    width: 50%;
    min-width: 300px;
    flex: 1 1 auto;
    overflow-y: auto;
    padding-bottom: 200px;
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
    font-family: 'Moret Regular';

  }
  .modal-section-content p {
    position: absolute;
    z-index:1;
  }
  .dialog-icon {
    position: absolute;
    right: 0;
    width: 64px;
    padding: 50px;
    cursor: pointer;
    z-index: 4;
  }
  .dialog-icon.mobile {
    display:none;
  }
  .modal-container {
    color: #fff;
    overflow: auto;
  }

  h5.title {
    font-family: 'Opposit-Medium';
    font-weight: 100;
    font-size: 18px;
    color: #E2EE75;
  }
  
  .dialog-center {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    width: 350px;
  }

  .left-text {
    font-size: 46px;
    line-height: 60px;
  }

.right.modal-section-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: 'roc-grotesk';
  font-size:  18px;
}
  
.right.modal-section-content h5 {
  color: #C84501;
  font-weight: 200;
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

.image-logo {
    position: absolute;
    left: 48px;
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
    font-size: 0.8rem;
    z-index: 2;
    font-weight: 600;
    cursor: pointer;
  }
  .bonjour-dialog {
  width: 552px;
  height: 500px;
  position: absolute;
  z-index: 3;
  background-color: #F86C01;
  border: solid 1px #F86C01;
  top: 30vh;
  right:0;
  padding: 25px;
}
.bonjour-dialog-container {
  position:relative;
  color: #1F0EDF;
  overflow-y: auto;
}
.bonjour-dialog-container h1 {
  font-weight: 100;
  color: #fff;
}
.bonjour-dialog-container h4 {
  margin-bottom:0;
}
.bonjour-dialog-container .p1 {
  font-size: 1.6rem;
  font-weight: 300;
  width: 88%;
}
.bonjour-dialog-container .footer {
  color: #000;
  margin-top: 60px;
}
.bonjour-button.close {
  background-color: #1F0EDF;
  color:  #F86C01;
  top: 125px;
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
    height: 100vh;
  }
  .modal-section-content p {
    position: relative;
  }
  .bonjour-dialog {
    width: 70vw;
    height: 80vh;
    top:100px
  }

  .dialog-icon {
    display: none;
  }
  .dialog-icon.mobile {
    width: 37px;
    display:block;
  }

}
</style>
