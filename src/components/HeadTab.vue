<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <router-link to="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/1280px-Tmdb.new.logo.svg.png"
        alt="logo"
        class="logo"
      />
    </router-link>

    <div class="section">
      <RouterLink class="routerClass" to="/">Home</RouterLink>
      <h3>Tv Shows</h3>
      <h3>People</h3>
      <h3>More</h3>

      <RouterLink class="routerClass" to="/favourites">Favourites</RouterLink>
    </div>
  </nav>
</template>

<style >
.navbar {
  background-color: navy;
  color: white;
  height: 10%;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-radius: 10px;
}
.routerClass {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.section {
  display: flex;
  align-items: center;
  width: 450px;
  justify-content: space-between;
}
.logo {
  height: 56px;
  width: 120px;
  margin-left: 40px;
}
</style>
