<template>
  <main>
    <div class="main-container">
      <Previews :blogPosts="blogPostData" />
      <TravelMap />
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
    };
  },
  mounted: async function () {
    const url = "http://localhost:8080/mockdata.json"; //change this later to node.js api
    try {
      const response = await fetch(url);
      const result = await response.json();

      this.blogPostData = result;
      console.log(this.blogPostData);
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
