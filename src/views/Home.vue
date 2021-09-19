<template>
  <main>
    <div class="main-container">
      <Previews />
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
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  width: 90%;
  min-width: 600px;
  min-height: 100%;
  height: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
}
</style>
