<template>
<div>
  <display-character   v-for = "character in characters"
  :key="character.id"
  :name="character.name"
  :image="character.image"
  :status="character.status"
  :species="character.species"
  

  ></display-character>
</div>
  
</template>

<script>
 import DisplayCharacter from './DisplayCharacter.vue';
  export default {
    components: {
      DisplayCharacter
    },
    data() {
    return {
      characters:[]
    };
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
     displayImage() {
          console.log(this.character);
        }

     },
      mounted() {
        this.characterInfo();
      },
    mouseOver: function(){
            this.active = !this.active;   
            
  }, 
  updated(){
    console.log(this.character);
  }
  }
 
  
</script>

<style></style>