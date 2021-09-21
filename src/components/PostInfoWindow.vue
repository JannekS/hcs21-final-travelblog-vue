<template>
  <div>
    <h3>{{ blogPost.title }}</h3>
    <p>
      <img src="/icons/calendar.svg" alt="Date: " />
      {{ blogPost.visitingDate.from }} to {{ blogPost.visitingDate.to }}
    </p>
    <div id="read-more">
      <div class="author-info">
        <div class="author-img">
          <img :src="blogPost.author.image" alt="author-img" />
        </div>
        <p>{{ blogPost.author.name }}</p>
      </div>
      <router-link :to="detailPage">Read post</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogPost: {},
  },
  data: function () {
    return {
      detailPage: `/post/${this.blogPost.id}`,
    };
  },
};
</script>

<style scoped>
#read-more {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.author-info {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.author-img {
  height: 30px;
  width: 30px;
}

.author-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
