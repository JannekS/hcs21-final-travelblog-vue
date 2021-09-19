<template>
  <div id="prev-wrapper">
    <div id="post-previews" v-for="(post, i) in blogPosts" :key="i">
      <PostPreview :blogPost="post" />
    </div>
  </div>
</template>

<script>
import PostPreview from "./PostPreview.vue";

export default {
  components: {
    PostPreview,
  },
  props: {
    blogPosts: Array,
  },
};
</script>

<style scoped>
#prev-wrapper {
  width: 50%;
  height: 100%;
  margin: 20px auto auto auto;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
