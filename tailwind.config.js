export default {
  mode: "jit",
  purge: ["./src/**/*.svelte", "./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "green-color": "#2cc46b",
        "dark-blue": "#0f0f2c",
        "white-grey": "#f2f3f5",
      },
    },
  },
  variants: {},
  plugins: [],
};
