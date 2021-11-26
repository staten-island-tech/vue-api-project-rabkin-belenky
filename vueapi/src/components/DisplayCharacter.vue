<template>
      <div class="character-img" >
          <span v-on:click="changePicture()">
            <img v-if="showPicture"  v-bind:src = "image">
            <div v-else>
                <p>Name: {{name}}</p>
                <p>Status: {{status}}</p>
                <p>Species: {{species}}</p>
            </div>
          </span>
      </div>
</template>

<script>
export default {
    props: ['name','image', 'status', 'species'],
    data() {
      return {
        showPicture: true
      };
    },
    methods: {
        changePicture() {
            this.showPicture = !this.showPicture;

        }
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
</style>