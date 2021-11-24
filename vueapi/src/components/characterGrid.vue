<template>
  <div class="about">
    <ul class="episode-table">
      <li class="episode-list-item"></li>
        <!-- <h2>{{id.name}}</h2> -->
      <div v-if="active">
        <h2>{{id.name}}</h2>
      </div>
      <div class="character-img" v-on:mouseover="active = !active">
        <img v-bind:src = "id.image">
      </div>
    </ul>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: "characterGrid",
    data() {
      active: false
      return {
        id:{ image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        name: 'Rick Sanchez',
        status: 'alive',
        species: 'human',
        },
      },
  
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
         console.log(data);
       }
       )
       
     },
     displayImage() {

     },
    mouseOver: function(){
            this.active = !this.active;   
        }
  } 
  }
 
  
</script>

<style></style>