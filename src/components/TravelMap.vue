<template>
  <div id="map-wrapper">
    <GMapMap
      :center="center"
      :zoom="3"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(post, index) in blogPosts"
          :position="post.location.geo"
          :clickable="true"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
export default {
  props: {
    blogPosts: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      center: this.blogPosts[0].location.geo,
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        }, // Along list of clusters
      ],
    };
  },
  mounted: function () {
    console.log(this.center);
    console.log(this.blogPosts);
  },
};
</script>

<style scoped>
#map-wrapper {
  width: 50%;
  height: 100%;
}
</style>
