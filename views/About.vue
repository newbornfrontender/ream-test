<script>
  export default {
    name: 'About',

    data: () => ({
      title: 'About',
    }),

    head () { return {
      title: this.title,
      meta: [{
        hid: 'about-description',
        name: 'description',
        content: `${this.title} page description`,
      }],
    }},
  };
</script>

<template>
  <h1>About</h1>
</template>
