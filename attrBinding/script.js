Vue.createApp({
  data() {
    return {
      headline: "Attribute binding is Awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
    };
  },
  computed: {
    headlineId() {
      // Convert to lowercase, replace spaces with dashes, and remove any invalid characters
      return this.headline
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-_]/g, "");
    },
  },
}).mount("#app");
