<template>
  <div id="map-wrapper">
    <!-- <GMapMap
      :center="{ lat: 51.093048, lng: 6.84212 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 85vh"
    >
    </GMapMap> -->
    <GMapMap
      :center="center"
      :zoom="5"
      map-type-id="terrain"
      style="width: 1005; height: 100%"
    >
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
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
};
</script>

<style scoped>
#map-wrapper {
  width: 50%;
  height: 100%;
}
</style>
