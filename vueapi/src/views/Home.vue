<template>
  <div class="home">
    <episodeList />
  </div>
</template>

<script>
// @ is an alias to /src

import episodeList from "../views/About.vue";
export default {
      name: "Home",
      components: {
        episodeList,
      },
};
</script>
