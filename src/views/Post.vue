<template>
  <div>
    <div class="go-back">
      <router-link to="/">Back to overview</router-link>
    </div>
    <div v-if="pageLoaded">
      <div v-if="status === 'OK'">
        <PostDetail :blogPost="blogPost" :geo="geo" />
      </div>
      <div v-else>
        <FourOFour />
      </div>
    </div>
    <div v-else>
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import PostDetail from "@/components/PostDetail.vue";
import FourOFour from "@/components/FourOFour.vue";
export default {
  components: {
    PostDetail,
    FourOFour,
  },
  data: function () {
    return {
      blogPost: {},
      geo: {},
      pageLoaded: false,
      status: String,
      serverURL: process.env.VUE_APP_SERVER_URL,
    };
  },
  methods: {},
  mounted: async function () {
    const postId = Number(this.$route.params.id);
    const url = `${this.serverURL}/post/${postId}`;
    const context = this;
    try {
      const response = await fetch(url);
      const result = await response.json();

      context.blogPost = result;
      context.geo = { lat: result.lat, lng: result.lng };
      context.pageLoaded = true;
      context.status = result.status;
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  },
};
</script>

<style scoped>
.go-back {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #e6d5b8;
  margin: 10px;
  float: left;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 30vh auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
