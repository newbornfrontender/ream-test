<script>
  export default {
    name: 'Error',

    props: {
      error: {
        type: Object,
        required: true,
      },
    },

    data: () => ({
      title: 'Page not found',
    }),

    methods: {
      checkStatusCode (num) {
        return this.error.code === num;
      },
    },

    head () { return {
      title: this.title,
      meta: [{
        hid: 'error-description',
        name: 'description',
        content: 'Error page description',
      }],
    }},
  };
</script>

<template>
  <section>
    <h1 v-if="checkStatusCode(404)">{{ title }}</h1>
    <pre v-else>{{ error.code }}</pre>

    <p>Go to <router-link to="/">Home</router-link></p>
  </section>
</template>
