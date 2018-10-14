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
  <div>
    <h1 :class="$style.title">{{ title }}</h1>

    <pre :class="$style.codeArea">
      <code>
        // css modules names

        {{ $style }}
      </code>
    </pre>
  </div>
</template>

<style module>
  .title {
    color: green;
  }

  .codeArea {
    margin: .85rem 0;
    padding: 1.25rem 1.5rem;
    line-height: 1.4;
    color: white;
    background-color: #282c34;
    border-radius: 6px;
  }
</style>
