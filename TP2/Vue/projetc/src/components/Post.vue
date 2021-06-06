<template>
    <img v-on:click="$emit('monEvent', post.title, post.author_fullname, post.url)" class="images" :src="post.url" alt="">
</template>

<script>
export default {
    name: "Post",
    props: ["post"],
};

</script>

<style scoped>

</style>