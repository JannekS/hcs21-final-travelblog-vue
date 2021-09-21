<template>
  <div id="map-wrapper">
    <GMapMap
      :center="center"
      :zoom="4"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GMapMarker
        :key="index"
        v-for="(post, index) in blogPosts"
        :position="post.location.geo"
        :clickable="true"
        @click="openInfoWindow(post.id)"
      >
        <GMapInfoWindow
          :closeclick="true"
          @closeclick="openInfoWindow(null)"
          :opened="openedPostId === post.id"
        >
          <div>I am in info window</div>
        </GMapInfoWindow>
      </GMapMarker>
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
      openedPostId: null,
    };
  },
  mounted: function () {
    console.log(this.center);
    console.log(this.blogPosts);
  },
  methods: {
    openInfoWindow(id) {
      this.openedPostId = id;
    },
  },
};
</script>

<style scoped>
#map-wrapper {
  width: 50%;
  height: 100%;
  border-radius: 10px;
}
</style>
