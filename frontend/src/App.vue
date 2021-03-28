<template>
  <router-view />
</template>

<style>
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#app #content {
  display: flex;
  height: 100vh;
  background-color: rgb(46, 46, 46);
  color: #fff;
}
</style>
