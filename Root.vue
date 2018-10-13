<script>
  import NavList from './components/NavList.vue';

  export default {
    name: 'Root',

    components: {
      NavList,
    },
  };
</script>

<template>
  <section>
    <header>
      <NavList />
    </header>

    <main>
      <router-view />
    </main>
  </section>
</template>
