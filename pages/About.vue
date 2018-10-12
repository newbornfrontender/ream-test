<script>
  export default {
    name: 'About',
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
      <h1>About</h1>
    </main>
  </section>
</template>
