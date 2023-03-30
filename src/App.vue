<template>
  <nav>
    <router-link to="/">Home</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  text-align: center;
  text-decoration-line: none;
  color: #000000;
}
a:link{
color: red;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #000000;

}
a.router-link{
  color: red;
}
</style>
