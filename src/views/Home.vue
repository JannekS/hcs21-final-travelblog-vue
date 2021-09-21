<template>
  <main>
    <div class="main-container" v-if="blogPostData">
      <!-- Is this not too hacky? -->
      <Previews :blogPosts="blogPostData" />
      <TravelMap :blogPosts="blogPostData" />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

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
      testData: "This is a Test",
    };
  },
  mounted: async function () {
    const url = "http://localhost:8080/mockdata.json"; //change this later to node.js api
    try {
      const response = await fetch(url);
      const result = await response.json();

      this.blogPostData = result.sort(function (post1, post2) {
        return post1.visitingDate.from < post2.visitingDate.from;
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
</style>
