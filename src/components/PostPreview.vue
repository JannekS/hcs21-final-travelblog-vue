<template>
  <div class="post-prev">
    <div class="post-img">
      <router-link :to="detailPage"
        ><img :src="blogPost.image" alt="Image of Destination"
      /></router-link>
    </div>
    <div class="prev-content">
      <router-link :to="detailPage"
        ><h2 class="post-title">
          {{ blogPost.title }}
        </h2></router-link
      >
      <p>
        <img src="/icons/map-pin.svg" alt="Location: " />
        {{ blogPost.location.city }} | {{ blogPost.location.country }}
      </p>
      <p>
        <img src="/icons/calendar.svg" alt="Date: " />
        {{ blogPost.visitingDate.from }} to {{ blogPost.visitingDate.to }}
      </p>
      <div class="author-info">
        <div class="author-img">
          <img :src="blogPost.author.image" alt="author-img" />
        </div>
        <p>{{ blogPost.author.name }}</p>
      </div>
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
.post-prev {
  height: 500px;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px black;
}

.post-img {
  height: 50%;
  width: 100%;
}

.post-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.post-img img:hover {
  cursor: pointer;
}

.post-title:hover {
  cursor: pointer;
}

.author-info {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.author-img {
  height: 50px;
  width: 50px;
}

.author-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
