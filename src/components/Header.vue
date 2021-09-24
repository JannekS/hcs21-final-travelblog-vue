<template>
  <header>
    <div id="header-wrapper">
      <div id="logo-title">
        <div id="logo">
          <img src="/icons/compass.svg" alt="LOGO" />
        </div>
        <div id="blog-title">
          <h1 class="text-4xl">My Travel Blog</h1>
        </div>
      </div>
      <nav>
        <div class="nav-item">
          <router-link to="/">Home</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/new-post">New Post</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/login">Log In</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  /* position: fixed;
  top: 0;
  margin: 0; */
  width: 100%;
  background-color: #e6d5b8;
  /* z-index: 10000; */
}

#header-wrapper {
  width: 90%;
  min-width: 600px;
  max-height: 80px;
  /* max-width: 1200px; */
  margin: 0 auto;
  /* margin-right: auto; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 20px;
  padding-right: 20px; */
  padding: 10px 20px;
  /* z-index: 10; */
}

#logo-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

#blog-title > h1 {
  font-family: "Lobster", cursive;
  margin: 0;
  color: #e45826;
}

nav {
  /* width: 30px; */
  /* min-width: 50%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-item {
  height: 50%;
  /* vertical-align: middle; */
  margin-left: 10px;
}

#logo {
  height: 40px;
  width: 40px;
}

#logo img {
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
  border-radius: 10px;
  color: #e45826;
}
</style>
