<template>
<form>
    <div class="forms">
      <label for="type-question">What do you want to search by?</label>
      <select id="type-question" name="type-question">
        <option value="Name"> Name</option>
        <option value="Episode"> Episode</option>
        <option value="Species"> Species</option>
        <option value="Status"> Status</option>
      </select>
    </div>
     <div class="forms">
      <label for="search-field">Search</label>
      <input id="search-field" name="search-field" type="text" />
    </div>
     <button>Submit </button>
</form>
</template>

<script>
export default {
    methods: {
        submitSearch() {

        }
    }
}
</script>