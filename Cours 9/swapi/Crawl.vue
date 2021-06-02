<template>
  <div></div>
</template>

<script>
import SWAPI from "./SWAPI";

export default {
  name: 'Crawl',
  components: {}, // fin COMPONENTS
  methods: {}, // fin METHODS
  mounted() // fin MOUNTED
};
</script>

<style>
body {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hyades.jpg/1200px-Hyades.jpg");
  background-size: cover;
  overflow: hidden;
}

.crawl {
  color: rgb(228, 225, 46);
  font-size: 42px;
  text-align: center;
  animation: crawl-animation 155s;
}

@keyframes crawl-animation {
  0% {
    transform: perspective(220px) rotateX(20deg) translateY(700px);
  }
  100% {
    transform: perspective(220px) rotateX(20deg) translateY(-5000px);
  }
}
</style>