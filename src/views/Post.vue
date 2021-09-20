<template>
  <div class="detail-wrapper">
    <div class="go-back">
      <router-link to="/">Back to overview</router-link>
    </div>
    <div class="blog-post" v-if="blogPost.title">
      <h1>{{ blogPost.title }}</h1>
      <div class="meta-data">
        <div class="travel-data">
          <p>
            <img src="/icons/map-pin.svg" alt="Location: " />
            {{ blogPost.location.city }} | {{ blogPost.location.country }}
          </p>
          <p>
            <img src="/icons/calendar.svg" alt="Date: " />
            {{ blogPost.visitingDate.from }} to
            {{ blogPost.visitingDate.to }}
          </p>
        </div>
        <div>
          <p>Author:</p>
          <div class="author-info">
            <div class="author-img">
              <img :src="blogPost.author.image" alt="author-img" />
            </div>
            <p>{{ blogPost.author.name }}</p>
          </div>
        </div>
      </div>

      <div class="post-img">
        <img :src="blogPost.image" alt="Image of Destination" />
      </div>
      <div class="main-text">
        {{ blogPost.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      blogPost: {},
    };
  },
  methods: {},
  mounted: async function () {
    const url = "http://localhost:8080/mockdata.json"; //change this later to node.js api
    const context = this;
    try {
      const response = await fetch(url);
      const result = await response.json();

      context.blogPost = result.find(function (post) {
        return post.id === Number(context.$route.params.id);
      });
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  },
};
</script>

<style scoped>
.detail-wrapper {
  width: 80%;
  min-width: 600px;
  max-width: 1000px;
  margin: 20px auto;
}
.go-back {
}

.meta-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.blog-post {
}
.post-img {
  height: 50%;
  width: 100%;
  margin: 20px 0;
}

.post-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
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

.main-text {
  white-space: pre-line;
}
</style>
