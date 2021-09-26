<template>
  <div class="detail-wrapper">
    <div class="blog-post">
      <h1>{{ blogPost.title }}</h1>
      <div class="meta-data">
        <div class="travel-data">
          <p>
            <img src="/icons/map-pin.svg" alt="Location: " />
            {{ blogPost.city }} | {{ blogPost.country }}
          </p>
          <p>
            <img src="/icons/calendar.svg" alt="Date: " />
            {{ blogPost.trip_duration }}
          </p>
        </div>
        <div>
          <p>Author:</p>
          <div class="author-info">
            <div class="author-img">
              <img :src="blogPost.author_image" alt="author-img" />
            </div>
            <p>{{ blogPost.author_name }}</p>
          </div>
        </div>
      </div>

      <div class="post-img">
        <img :src="blogPost.image" alt="Image of Destination" />
      </div>
      <div class="main-text">
        {{ blogPost.text }}
      </div>
    </div>
    <div class="map-wrapper">
      <GMapMap
        :center="geo"
        :zoom="10"
        :options="{
          minZoom: 4,
          restriction: {
            latLngBounds: {
              north: 85,
              south: -85,
              east: 179.99,
              west: -179.99,
            },
            strictBounds: true,
          },
          draggable: false,
          fullscreenControl: false,
        }"
        map-type-id="terrain"
        style="width: 100%; height: 100%"
      >
        <GMapMarker :position="geo" />
      </GMapMap>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogPost: {},
    geo: {},
  },
};
</script>

<style scoped>
.detail-wrapper {
  width: 80%;
  min-width: 600px;
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}

.meta-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.blog-post {
}
.post-img {
  height: 50%;
  width: 100%;
  margin: 20px 0;
}

.post-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.author-info {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.author-img {
  height: 50px;
  width: 50px;
}

.author-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.main-text {
  white-space: pre-line;
  font-size: 1.2rem;
}

.map-wrapper {
  width: 100%;
  height: 400px;
  margin: 20px 0px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
