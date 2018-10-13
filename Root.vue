<script>
  import ItemsList from './components/ItemsList.vue';

  export default {
    name: 'Root',

    components: {
      ItemsList,
    },

    data: () => ({
      items: [{
        name: 'First',
      }],
    }),
  };
</script>

<template>
  <section>
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>

          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <ItemsList
        :tag="'ul'"
        :items="items"
      />

      <router-view />
    </main>
  </section>
</template>
