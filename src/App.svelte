<script>
  import ParallaxSlider from "./ParallaxSlider.svelte";
</script>

<main>
  <div class="container">
    <div
      class="section"
      style="background: blue; background: url('https://images.unsplash.com/photo-1606726712298-a9d14f8297a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80'); background-size: cover; background-attachment: fixed; background-reapeat: no-repeat;"
    />
    <ParallaxSlider slides={[
      "https://images.unsplash.com/photo-1613929905911-96040610a54d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
      "https://images.unsplash.com/photo-1613908416519-0ea2777f5985?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1612831661941-254341b885e9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80"
  ]}></ParallaxSlider>
    <div
      class="section"
      style="background: blue; background: url('https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'); background-size: cover; background-attachment: fixed; background-reapeat: no-repeat;"
    />
    <div
      class="section"
      style="background: blue; background: url('https://images.unsplash.com/photo-1606726712298-a9d14f8297a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80'); background-size: cover; background-attachment: fixed; background-reapeat: no-repeat;"
    />
    <ParallaxSlider slides={[
      "https://images.unsplash.com/photo-1613929905911-96040610a54d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
      "https://images.unsplash.com/photo-1613908416519-0ea2777f5985?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1612831661941-254341b885e9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80"
  ]}></ParallaxSlider>

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
