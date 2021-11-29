<template>
        <div class="character-img" >
          <span v-on:click="changePicture()">
            <img class="character-img-img" v-if="showPicture"  v-bind:src = "image">
            <div class="character-info" v-else>
                <img class="character-info-img" v-bind:src = "image">
                <p class="character-info-name">Name: {{name}}</p>
                <p class="character-info-status">Status: {{status}}</p>
                <p class="character-info-species">Species: {{species}}</p>
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

.character-img-img {
  border: 0.5rem solid #2c3e50;
  border-radius: 25px;
}

.character-info {
  width: 300px;
  height: 300px;
  align-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  border: 0.5rem solid #2c3e50;
  position: absolute;
  text-shadow: 0px 0px 5px white;
  border-radius: 25px;
}

.character-info-name {
  width: 300px;
  position: absolute;
  top: .5rem;
  text-align: center;
}

.character-info-species {
  width: 300px;
  position: absolute;
  top: 5rem;
  text-align: center;
}

.character-info-status {
  width: 300px;
  position: absolute;
  top: 10rem;
  text-align: center;
}

.character-info-img {
  opacity: 0.45;
  border-radius: 18px;
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