<template>
  <footer>
    <!-- <div id="footer-wrapper">
            <div class="footer-item">
                <p>Credits</p>
            </div>
            <div class="footer-item">
                <p>About</p>
            </div>
            <div class="footer-item">
                <p>something else</p>
            </div>
        </div> -->
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  margin: 0;
  width: 100%;
  z-index: 10000;
  background-color: #e6d5b8;
  font-size: 0.5rem;
  height: 30px;
}

#footer-wrapper {
  width: 30%;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#footer-item p {
  font-size: 0.1rem;
  padding: 2ps;
}
</style>
