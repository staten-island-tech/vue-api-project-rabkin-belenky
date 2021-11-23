<template>
  <div class="about">
    <ul class="episode-table">
      <li class="episode-list-item"></li>
      <h2>{{id.name}}</h2>
      <img v-bind:src =  "id.image" >

    </ul>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: "characterGrid",
    data() {
      return {
        id:{ image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        name: 'Rick Sanchez',
        status: 'alive',
        species: 'human',
        }
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
         console.log(data);
       }
       )
       
     },
     displayImage() {

     }
  } 
  }
 
  
</script>

<style></style>