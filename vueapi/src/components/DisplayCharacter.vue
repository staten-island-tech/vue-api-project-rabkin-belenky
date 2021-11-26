<template>
    <div class="about">
    <ul class="episode-table">
      <li class="episode-list-item"></li>
        <!-- <h2>{{id.name}}</h2> -->
      <div v-if="active">
        <h2>{{name}}</h2>
      </div>
      <div class="character-img" v-on:mouseover="active = !active">
        <img v-bind:src = "image">
      </div>
      </ul>
    <p></p>
  </div>
</template>

<script>
export default {
    props: ['name','image', 'status', 'species'],
    data() {
      
        return {
        // active: false,
        // id:{ image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        // name: 'Rick Sanchez',
        // status: 'alive',
        // species: 'human',
       // },
      };
  
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