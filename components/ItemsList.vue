<script>
  export default {
    name: 'ItemsList',

    props: {
      tag: {
        type: String,
        required: true,
        validator: value => {
          const ol = value === 'ol';
          const ul = value === 'ul';

          return ol || ul;
        },
      },

      items: {
        type: Array,
        required: true,
      },
    },

    render (createElement) {
      return createElement(this.tag, this.items.map(item => {
        return createElement('li', [
          createElement('router-link', {
            attrs: {
              to: item.path,
            },
          }, item.text),
        ]);
      }));
    },
  };
</script>
