<template>
  <div>
    <Post v-for ="post in data" :key="post.id" :post="post" /> 
  </div>
</template>

<script>
import Post from './components/Post'

export default {
  name: 'App',
  components: {
    Post
  },
    data() {
      return {}
    },
    methods: {
      getRedditData(sub) {
        const url = `https://www.reddit.com/r/${sub}.json`;

        return fetch(url)
        .then((res) => res.json())
        .then((json) => {
          return json.data.children.map((data) =>{
            return data.data;
          });
        });
      },
    },
    mounted() {
      this.getRedditData("wallpaper").then(data =>{
        console.log(data)
      });
    },
};
</script>

<style>

</style>
