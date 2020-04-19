<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <br />
      <router-link to="/recipe-list">Lista z przepisami</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: none;
  box-sizing: border-box;
  margin: 0;
}

a,
a:visited,
a:active {
  text-decoration: none;
}

body {
  font-family: 'Nunito', sans-serif;
  font-size: 62.5%;
  font-weight: 500;
}

#app {
  font-size: 1rem;
}
</style>
