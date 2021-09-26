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
          <router-link to="/"
            ><img src="/icons/home.svg" /><span> Home</span>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/contact"
            ><img src="/icons/at-sign.svg" /><span> Contact</span></router-link
          >
        </div>
        <div class="nav-item">
          <router-link to="/new-post">
            <img src="/icons/edit.svg" /><span> New Post</span></router-link
          >
        </div>
        <div class="nav-item">
          <router-link to="/login"
            ><img src="/icons/log-in.svg" /><span> Log In</span></router-link
          >
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
  /*   position: fixed;
  top: 0;
  margin: 0; */
  width: 100%;
  min-width: 300px;
  background-color: #e6d5b8;
  /*   z-index: 10000; */
}

#header-wrapper {
  /* width: 90%; */
  /*   min-width: 600px; */
  max-height: 80px;
  max-width: 2800px;
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
  display: none;
}

@media only screen and (min-width: 600px) {
  #blog-title > h1 {
    display: flex;
  }
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
  margin-left: 15px;
  display: flex;
  align-items: center;
}

.nav-item img {
  height: 20px;
  vertical-align: middle;
  stroke: #4a3933;
}

.nav-item img:hover {
  height: 25px;
}

.nav-item span {
  display: none;
}

@media only screen and (min-width: 800px) {
  .nav-item span {
    vertical-align: middle;
    display: inline;
  }
  .nav-item img:hover {
    height: 20px;
  }
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
