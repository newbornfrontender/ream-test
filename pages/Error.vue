<script>
  export default {
    name: 'Index',
    props: {
      error: {
        type: Object,
        required: true,
      },
    },
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
      <h1>{{ error.code === 404 ? 'Page not found' : error.code }}</h1>
    </main>
  </section>
</template>
