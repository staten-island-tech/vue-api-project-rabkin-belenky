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
    <p class="error-message">{{errorMessage}}</p>
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
         },
       ).catch((error) => {
         alert(error);
         console.log(error)
       })
       
     },
      characterstoShow(){
      if(this.field === '!!!@@@hjfhjgrhjfghjfgbjkfvhjfghjdfghjogsdhik') {
          this.errorMessage = 'Your search is empty';
          this.characterFound = false;
        }
      else if (this.type === 'Name') {
          this.errorMessage = 'Your search is empty';
          this.characterFound = false;
        }    
      else if (this.type ==='all'&& this.field==='all'){
         this.showCharacters = this.characters;
        }
      else {
         for (const someCharacter of this.characters) {
           if (someCharacter[this.type].toLowerCase().includes(this.field.toLowerCase())) {
             this.showCharacters.push(someCharacter);
           }
         }
       }
        
        if (!this.showCharacters.length && this.characterFound) {
          this.errorMessage = 'Nothing was found';
          this.characterFound = false;
        }
     },
     },
    
     
     watch: {
        characters(){
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

.error-message {
  font-size: 2rem;
  text-shadow: 0px 0px 5px #2c3e50;
  font-weight: bold;
  color: white;
  width: fit-content;
  height: fit-content;
  margin: auto;
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(214, 36, 36, 0.75)

}
  </style>