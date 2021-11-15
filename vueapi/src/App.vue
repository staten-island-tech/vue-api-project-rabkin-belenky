<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button class="databtn" @click="episodeFetch">Data</button>
      <button class="databtn" @click="characterFetch">Data2</button>
    </div>
    <h1 class="header">{{title}}</h1>
    <div class="grid">
      <div class="portraits">

      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return{ 
    title: "Rick and Morty"
    }
  },
  methods: {
 episodeFetch() {
   fetch('https://rickandmortyapi.com/api/episode')
       .then((response) => {
         if (response.ok) {
            return response.json();
         }
       })
       .then((data) => {
         console.log(data);
       }
       )},
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.databtn {
  position: relative;
  height: 3rem;
  padding: 1rem;
  margin-right: 3rem;
  display: flex;
  background-color: purple;
  color: gold;
  flex-direction: row;
  text-align: center;
  align-items: center;
  border-radius: 1.5rem;
}
</style>
