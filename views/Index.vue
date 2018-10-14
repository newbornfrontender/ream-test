<script>
  export default {
    name: 'Index',

    data: () => ({
      title: 'Home',
    }),

    head () { return {
      title: this.title,
      meta: [{
        hid: 'home-description',
        name: 'description',
        content: `${this.title} page description`,
      }],
    }},
  };
</script>

<template>
  <h1 :class="$style.title">{{ title }}</h1>
</template>

<style module>
  .title {
    color: blue;
  }
</style>

