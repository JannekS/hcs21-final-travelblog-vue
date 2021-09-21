<template>
  <div id="map-wrapper">
    <GMapMap
      :center="center"
      :zoom="4"
      :options="{
        minZoom: 2,
        restriction: {
          latLngBounds: {
            north: 85,
            south: -85,
            east: 179.99,
            west: -179.99,
          },
          strictBounds: true,
        },
      }"
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
          <div><PostInfoWindow :blogPost="post" /></div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>

<script>
import PostInfoWindow from "@/components/PostInfoWindow.vue";

export default {
  components: {
    PostInfoWindow,
  },
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
