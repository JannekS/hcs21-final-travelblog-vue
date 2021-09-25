<template>
  <main>
    <div class="main-container" v-if="blogPostData">
      <Previews :blogPosts="blogPostData" />
      <TravelMap :blogPosts="blogPostData" />
    </div>
    <div class="main-container" v-else>
      <div class="loader"></div>
    </div>
  </main>
</template>

<script>
import Previews from "@/components/Previews.vue";
import TravelMap from "@/components/TravelMap.vue";

export default {
  name: "Home",
  components: {
    Previews,
    TravelMap,
  },
  data: function () {
    return {
      blogPostData: undefined,
      serverURL: process.env.VUE_APP_SERVER_URL,
    };
  },
  mounted: async function () {
    const url = `${this.serverURL}posts`;
    try {
      const response = await fetch(url);
      const result = await response.json();

      this.blogPostData = result.sort(function (post1, post2) {
        return post1.date_from < post2.date_from;
      });
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  /* width: 90%; */
  min-width: 600px;
  height: 85vh;
  margin: 20px;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
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
