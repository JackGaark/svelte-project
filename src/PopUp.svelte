<script>
  import { fly } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";
  let scrollY;
  export let open = false;
  function showModal() {
    open = true;
  }
  function hideModal() {
    open = false;
  }
</script>

<svelte:window bind:scrollY />

{#if open}
  <div
    class="popup"
    style="top:{scrollY}px"
    transition:fly={{
      y: -window.innerHeight,
      duration: 1000,
    }}
  >
  <button class="modal-btn" on:click={hideModal}> ? </button>
    <div class="modal-container">
      <slot />
    </div>
  </div>
{/if}

<style>
  .popup {
    background: #000;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 1500;
  }
  .modal-btn {
    position: absolute;
    right: 0;
  }
  .modal-container {
    padding: 25px;
    color: #fff;
  }

  
</style>
