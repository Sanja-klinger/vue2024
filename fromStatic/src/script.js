Vue.createApp({
  data() {
    return {
      name: "Sake Sake",
    };
  },
  computed: {
    currentDate() {
      return new Date().toLocaleString("en-US");
    },
  },
}).mount("#app");
