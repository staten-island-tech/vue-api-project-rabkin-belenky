<template>
  <div class="about">
    <ul class="episode-table">
      <li class="episode-list-item"></li>
    </ul>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: "characterGrid",
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
     }
  } 
  }
 
  
</script>

<style></style>