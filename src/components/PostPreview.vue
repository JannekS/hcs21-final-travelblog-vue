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
        {{ blogPost.city }} | {{ blogPost.country }}
      </p>
      <p>
        <img src="/icons/calendar.svg" alt="Date: " />
        {{ blogPost.trip_duration }}
      </p>
      <div class="author-info">
        <div class="author-img">
          <img :src="blogPost.author_image" alt="author-img" />
        </div>
        <p>{{ blogPost.author_name }}</p>
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
  background-color: white;
  /* border: solid 1px black; */
  box-shadow: 10px 5px 5px rgb(98, 98, 98);
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
