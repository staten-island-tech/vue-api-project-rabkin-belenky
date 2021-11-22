<template>
  <div class="home">
    <characterGrid/>
  </div>
</template>

<script>

import characterGrid from "../components/characterGrid.vue";
export default {
      name: "Home",
      components: {
        characterGrid,
      },
};
</script>
