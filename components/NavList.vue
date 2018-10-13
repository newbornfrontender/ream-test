<script>
  import ItemsList from './ItemsList.vue';

  export default {
    name: 'NavList',

    components: {
      ItemsList,
    },

    data: () => ({
      items: [{
        text: 'Home',
        path: '/',
      }, {
        text: 'About',
        path: '/about',
      }],
    }),
  };
</script>

<template>
  <nav>
    <ItemsList
      :tag="'ul'"
      :items="items"
    />
  </nav>
</template>
