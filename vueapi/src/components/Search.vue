<template>
<form>
    <div class="forms">
      <label for="type-question"> Search by </label>
      <select id="type-question" name="type-question" v-model="typeQuestion"> 
        <option value="name" > Name </option>
        <option value="episode"> Episode</option>
        <option value="species"> Species</option>
        <option value="status"> Status</option>
      </select>
    </div>
     <div class="forms">
      <label for="search-field">Search</label>
      <input id="search-field" name="search-field" type="text" v-model="searchField"/>
    </div>
     <button class="submit-button" type="button" @click="submitSearch()">Submit </button>
</form>
</template>

<script>
export default {
    data() {
        return {
           typeQuestion: 'Name',
           searchField: '',
        }
    },
    methods: {
        submitSearch() {
            console.log(this.searchField);
            this.$router.push('/characterGrid/'+ this.typeQuestion + '/' + this.searchField);
            
        }
    }
}
</script>
<style>

.forms {
  margin: 2rem;
  font-weight: bold;
  text-shadow: 0px 0px 5px white;
}

.submit-button {
  width: 4rem;
  height: 2rem;
  font-size: 1rem;
}
</style>