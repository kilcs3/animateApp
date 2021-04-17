<template>
  <div class="home">
    <img alt="Reha logo" src="../assets/logo.png">
    <h2>beobachten. vorstellen. besser werden.</h2>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
  methods: {
    redirect: setTimeout(function(){
        window.location.href = '#/home';
      }, 5000)
  },
  components: {

  }
}
</script>
