<template>
  <div class="home">
    <episodeList/>
  </div>
</template>

<script>

import episodeList from "../components/episodeList.vue";
export default {
      name: "Home",
      components: {
        episodeList,
      },
};
</script>
