
<template>
  
  <div id="app">
    <nav-bar></nav-bar>
        <router-view />
    <hi class="title">RICK AND MORTY</hi>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components:{
    NavBar
  },
  
  
  props: [
      "id", "name", "status", "species"
    ],
  data() {
    return{ 
    title: "Rick and Morty",
    characters:[], 
    test: 'test',
    };
  },
  provide() {
    return {
      chara: this.characters
    }
  },

  methods: {
    characterInfo() {
       fetch("https://rickandmortyapi.com/api/character")
       .then((response) => {
         if (response.ok) {
            return response.json();
         }
       })
       .then((data) => {
         this.characters = data.results;
         console.log(this.characters);
        },
      
       )
       
     },
     characterFetch(){
        console.log(this.characters);
        console.log(this.characters[0].name)

      },
  },
  mounted() {
        this.characterInfo();
      }
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

body {
  background: url("./assets/rickandmortybackground.png") no-repeat center center fixed; 
}

.title {
  font-size: 10rem;
  text-shadow: 0px 0px 5px white;
  font-weight: bold;
  color: #2c3e50;
  bottom: 5px;
}

</style>
