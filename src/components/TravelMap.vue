<template>
  <div id="map-wrapper">
    <GMapMap
      :center="{ lat: 51.093048, lng: 6.84212 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 85vh"
    >
    </GMapMap>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#map-wrapper {
  width: 50%;
  height: 100%;
}
</style>
