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
      easing: elasticInOut,
    }}
  >
    <slot />

    <button on:click={hideModal}> ? </button>
  </div>
{/if}

<style>
  .popup {
    background: white;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 1500;
    top: 0;
    left: 0;
  }
</style>
