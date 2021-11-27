<template>
        <div class="character-img" >
          <span v-on:click="changePicture()">
            <img v-if="showPicture"  v-bind:src = "image">
            <div class="character-info" v-else>
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

.character-img {
  height: 20vw;
  width: 20vw;
  margin: 0 auto;
  position: relative;
  margin: 2rem auto;
  align-content: center;
}

.character-info {
  width: 300px;
  height: 300px;
  align-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #11005c;
  border: 0.5rem solid #11005c;
}

.character-info-img {
  opacity: 0.3;
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