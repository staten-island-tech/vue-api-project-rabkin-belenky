<template>
<div >
  <div v-if="characterFound" class ="grid">
  <display-character  v-for = "character in showCharacters"
  :key="character.id"
  :name="character.name"
  :image="character.image"
  :status="character.status"
  :species="character.species"
  

  ></display-character>
  </div>
  <div v-else>
    <p>{{errorMessage}}</p>
  </div>
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
      characterFound: true,
      errorMessage: '',
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
       ).catch((error) => {
         alert(error);
         console.log(error)
       })
       
     },
      characterstoShow(){
      if(this.field === '!!!@@@hjfhjgrhjfghjfgbjkfvhjfghjdfghjogsdhik') {
          this.errorMessage = 'Your search is empty!';
          this.characterFound = false;
        }
      else if (this.type === 'Name') {
          this.errorMessage = 'Your search by is empty!';
          this.characterFound = false;
        }    
      else if (this.type ==='all'&& this.field==='all'){
         this.showCharacters = this.characters;
        }
      else {
         for (const someCharacter of this.characters) {
           if (someCharacter[this.type].toLowerCase().includes(this.field.toLowerCase())) {
             this.showCharacters.push(someCharacter);
             console.log(someCharacter);
           }
         }
       }
        
        if (!this.showCharacters.length && this.characterFound) {
          this.errorMessage = 'Nothing was found';
          this.characterFound = false;
          console.log('Nothing');
        }
     },
     },
    
     
     watch: {
        characters(newvalue){
            console.log('test', newvalue);
            this.characterstoShow();
        },
        

     },
      mounted() {
        this.characterInfo();
      },
  }
 
  
</script>

<style>
.grid {
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
}
  </style>