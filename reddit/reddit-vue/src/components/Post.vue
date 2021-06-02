<template>
  <div className="col-sm">
    <div className="card">
      <div className="thumbnail">
        <img :src="post.thumbnail" alt="Image" className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{{ post.title }}</h5>
        <a :href="post.url" className="btn btn-primary">Voir</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
};
</script>

<style scoped>
.thumbnail {
  width: 300px;
  margin: 0 auto;
}

.card {
  min-height: 400px;
  max-width: 300px;
}

.card-title {
  font-size: 1rem;
}
</style>