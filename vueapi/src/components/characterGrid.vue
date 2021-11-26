<template>
<div>
  <display-character   v-for = "character in showCharacters"
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
    props:['type', 'field'],
    data() {
    return {
      characters:[],
      showCharacters: [],
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
         console.log(this.type);
        },
       ).catch((error) => {
         alert(error);
         console.log(error)
       })
       
     },
      characterstoShow(){
      console.log(this.type, this.field)
       if (this.type ==='all'&& this.field==='all'){
         this.showCharacters = this.characters;
        }
       else{
         for (const someCharacter of this.characters) {
           if (someCharacter[this.type] === this.field) {
             this.showCharacters.push(someCharacter);
             console.log(someCharacter);
           }
         }
       } 
     },
     },
    
     
     watch: {
        characters(newvalue){
            console.log(newvalue);
            this.characterstoShow();
        },
        type(newvalue){
            console.log(newvalue);
            console.log('nothing');
        },

     },
      mounted() {
        this.characterInfo();
      },
  }
 
  
</script>

<style></style>