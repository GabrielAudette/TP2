<template>
    <div className="123">
        <img :src="post.url" alt="">
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["post"],
};

</script>

<style scoped>

</style>