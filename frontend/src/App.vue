<template>
  <div id="app">
    <div id="nav">
      <img alt="logo" src="./assets/icon-above-font.png">
      <div class="router-link">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div id="main-page">
      <router-view/>
    </div>
    <footer>
      Copyright @Groupomania 2020
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
		height: 80px;
    width: 200px;
    object-fit: cover;
	}
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#main-page {
  min-height: calc(100vh - 160px);
}
</style>
