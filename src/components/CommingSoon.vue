<template>
  <div class="container">
    <h1>Comming soon:</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
  margin: auto;
  margin-top: 10px;
  min-width: 300px;
  min-height: 480px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
}

p {
  font-size: 1.2rem;
}
</style>
